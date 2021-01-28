const nodemailer = require('nodemailer')
const jwtSecret = require('../../config/jwtConfig')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { Users } = require('../../db')
const { check, validationResult } = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple')

app = express()

//Validations
router.post('/register', [
    check('name', 'Must fill name field').not().isEmpty().isAlpha(),
    check('surname', 'Must fill surname field').not().isEmpty(),
    check('email', 'Must be a valid email').isEmail(),
    check('username', 'Must fill username field').not().isEmpty().isAlpha(),
    check('password', 'Must fill password field').not().isEmpty().isLength({ min: 3 })
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errores: errors.array() })
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await Users.create(req.body)

    //Send Email confirmation
    function sendEmail() {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'hollywood.manager.dweb@gmail.com',
                pass: 'Dweb1230='
            }
        })

        const mailOptions = {
            from: 'Hollywood Manager <hollywood.manager.dweb@gmail.com>',
            to: 'hollywood.manager.send@outlook.com',
            subject: 'Email confirmation',
            text: 'Welcome to Hollywood Manager'
        }
        
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).send(error.message)
            } else {
                console.log('Email sent')
            }
        })
    }
    sendEmail()
    console.log('registrado')
    res.redirect('http://localhost:3000/')
})

//Login
router.post('/login', async (req, res, next) => {
    const user = await Users.findOne({ where: { username: req.body.username } })
    if (user) {
        const password = bcrypt.compareSync(req.body.password, user.password)
        if (password) {
            console.log('login success')
            // document.getElementById('people').style.display = 'block';
            // document.getElementById('movies').style.display = 'block';
            // document.getElementById('studios').style.display = 'block';
            // document.getElementById('cinemas').style.display = 'block';
            // document.getElementById('openEditProfile').style.display = 'block';
            res.json({ success: tokenUser(user) })
            //return res.redirect('http://localhost:3000')

            next()
        } else {
            res.json({ error: 'Password does not match' })
        }
    } else {
        res.json({ error: 'Username does not match' })
    }
})

const tokenUser = (user) => {
    const payload = {
        userId: user.id,
        createAt: moment().unix(),
        expiredAt: moment().add(5, 'minutes').unix()
    }
    return jwt.encode(payload, jwtSecret.secret)
}



module.exports = router