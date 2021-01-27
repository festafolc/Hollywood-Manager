const express = require('express')
const bodyParser = require('body-parser')

const router = require('./routes/api')
const app = express()

app.use(express.static('./public'));

require('./db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.listen(3000, () => console.log("listenig at 3000"))

