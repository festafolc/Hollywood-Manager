const express = require('express')
const router = express.Router()
const middleware = require('./middleware/middelware')
const apiFilmsRouter = require('./api/films')
const apiUsersRouter = require('./api/users')

router.use('/films', middleware.checkToken, apiFilmsRouter)
router.use('/users', apiUsersRouter)

module.exports = router