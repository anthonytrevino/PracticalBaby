const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')
const app = express()
const session = require('express-session')
const bcrypt = require('bcrypt')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cors())
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
console.log('hi')
app.post('/users', function (req, res) {
    console.log("NOOOOOOOO")
    console.log(req.body)
    let emailaddress = req.body.emailaddress;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let password = req.body.password;


    console.log(emailaddress)
    console.log(firstname)
    console.log(lastname)
    console.log(username)
    console.log(password)

    res.json({
        emailaddress: emailaddress,
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password
    })
})

app.listen(9000, () => {
    console.log('Server is running')
})