const express = require('express')
const bodyParser = require('body-parser')
const conRouter = require('../contactUl')

const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/', conRouter)

app.use('/contracts', conRouter);

module.exports = app
