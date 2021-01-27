const jwt = require('jwt-simple')
const moment = require('moment')
const jwtSecret = require('../../config/jwtConfig')


const checkToken = (req, res, next) => {
    if(!req.headers['user-token']) {
        return res.json({ error: 'You need to add token on the header' })
    }

    const userToken = req.headers['user-token']
    let payload = {}

    try {
        payload = jwt.decode(userToken, jwtSecret.secret)
    } catch (err) {
        return res.json({ error: 'The token is not valid' })
    }
    
    if(payload.expiredAt < moment().unix()) {
        return res.json({ error: 'Token has been expired' })
    }

    req.userId = payload.userId

    next()
}

module.exports = {
    checkToken: checkToken
}