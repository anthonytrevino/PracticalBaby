const express = require('express')
const bodyParser = require('body-parser')
const models = require('./models')
const app = express()
const session = require('express-session')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors')
const saltRounds = 10;



app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cors())

app.use(bodyParser.json());

const database = {
    users: [
        {
            id: '123',
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            username: 'JohnDoe123',
            password: 'cookies',
            joined: new Date()

        },
        {
            id: '124',
            firstName: 'Sally',
            lastName: 'Doe',
            email: 'sally@gmail.com',
            username: 'SallyDoe123',
            password: 'bananas',
            joined: new Date()

        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'john@gmail.com'
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/login', (req, res) => {
    console.log(req.body.email + " email")
    console.log(req.body.username + " username")

    if (req.body.email === database.users[0].email) {
        if (req.body.password === database.users[0].password) {
            res.json('success');
        }
    } else if (req.body.email === '') {
        if (req.body.username === database.users[0].username && req.body.password === database.users[0].password) {
            res.json('success');
        }

    } else {
        res.status(400).json('error logging in');
    }
})


app.post('/register', (req, res) => {
    const { email, username, firstName, lastName, password } = req.body;

    database.users.push({

        id: '125',
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
        joined: new Date()


    }); res.json(database.users[database.users.length - 1])
});

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


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server is running')
})
