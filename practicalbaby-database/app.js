const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')
const functions = require('./functions')
const app = express()
const session = require('express-session')
const bcrypt = require('bcrypt')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
