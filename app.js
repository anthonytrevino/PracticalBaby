const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')
const app = express()
const session = require('express-session')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const functions = require('./functions')
const saltRounds = 10;

if (process.env.NODE_ENV == 'development') {
    require('dotenv').config()
}


app.use(session({
    secret: '1a2s3d',
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cors())

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/loginwEmail', (req, res) => {
    const { email, password } = req.body;

    console.log(email)
    functions.user.getUserByEmail(email).then((userInfo) => {
        if (userInfo == null) {
            res.send('Not valid input')
        } else {
            console.log(userInfo.username)
            bcrypt.compare(password, userInfo.password, () => (res))
            if (res) {
                console.log('login succesful')
                req.session.userid = userInfo.id
                req.session.username = userInfo.username
                res.json(userInfo)
            } else {
                console.log(match)
                console.log(password)
                console.log('This is not working')
                console.log(userInfo.password)
            }
        }
    }
    )
})

app.post('/loginwUsername', (req, res) => {
    const { username, password } = req.body;

    console.log(username)
    functions.user.getUserByUsername(username).then((userInfo) => {
        if (userInfo == null) {
            res.send('Not valid input')
        } else {
            console.log(userInfo.username)
            bcrypt.compare(password, userInfo.password, () => (res))
            if (res) {
                console.log('login successful')
                req.session.userid = userInfo.id
                req.session.username = userInfo.username
                res.json(userInfo.id)
            } else {
                console.log(match)
                console.log(password)
                console.log('This is not working')
                console.log(userInfo.password)
            }
        }
    }
    )
})

// app.post('/login', (req, res) => {
//     console.log(req.body.email + " email")
//     console.log(req.body.username + " username")

//     if (req.body.email === database.users[0].email) {
//         if (req.body.password === database.users[0].password) {
//             res.json('success');
//         }
//     } else if (req.body.email === '') {
//         if (req.body.username === database.users[0].username && req.body.password === database.users[0].password) {
//             res.json('success');
//         }

//     } else {
//         res.status(400).json('error logging in');
//     }
// })


app.post('/register', function (req, res) {
    const { firstName, lastName, username, password, confirmPassword, email } = req.body;
    console.log('I am being called')
    // let errorMessage = null

    functions.user.addNewUser(firstName, lastName, username, password, email)
        .then(() => {
            res.json('registered')
        })

    // res.render('register', { message: errorMessage })
})



app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        }
    })
    if (!found) {
        res.status(400).json('not found');
    }
})

if (process.env.NODE_ENV === 'production') {
    // if the client is a create-react-app, go to the .gitignore in the client folder, and take out
    // the word 'build' so that it isn't hidden from git and heroku

    // serves up the static files

    app.use(express.static('practicalbaby/build'))
    // if the app is a single page app, like a react app that uses react router for example
    app.get('*', (req, res) =>
        res.sendFile(path.join(__dirname, 'practicalbaby', 'build', 'index.html'))
    )
}


// const PORT = process.env.PORT || 5000;
// app.listen(PORT);

app.listen(9000, () => {
    console.log('Server is running')
})
