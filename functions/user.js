const models = require('../models')
const bcrypt = require('bcrypt')
const general = require('./general')
const saltRounds = 10

module.exports = {
    // returns array of all user objects
    getAllUsers: function () {
        return new Promise(function (resolve, reject) {
            models.user.findAll()
                .then(function (results) {
                    resolve(general.getJSON(results))
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
    // returns one user object
    // input: userid
    getUserById: function (userId) {
        return new Promise(function (resolve, reject) {
            models.user.findOne({
                where: {
                    id: userId
                }
            }).then(function (result) {
                resolve(general.getJSON(result))
            })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
    // returns one user object
    // input: username
    getUserByEmail: (email) => {
        return new Promise((resolve, reject) => {
            models.User.findOne({
                where: {
                    email: email
                }
            }).then((result) => {
                resolve(general.getJSON(result))
            })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getUserByUsername: (username) => {
        return new Promise((resolve, reject) => {
            models.User.findOne({
                where: {
                    username: username
                }
            }).then((result) => {
                resolve(general.getJSON(result))
            })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    usernameEmailTaken: (username, email) => {
        emailTaken = false
        usernameTaken = false
        return new Promise((resolve, reject) => {
            models.user.count({
                where: {
                    username: username
                }
            })
                .then(function (count) {
                    if (count > 0) {
                        usernameTaken = true
                    }
                })
                .then(function () {
                    return models.user.count({
                        where:
                        {
                            email: email
                        }
                    })
                        .then(function (count) {
                            if (count > 0) {
                                emailTaken = true
                            }
                        })
                }

                )
                .then(function () {
                    resolve({ usernameTaken: usernameTaken, emailTaken: emailTaken })
                })
                .catch(function (error) {
                    reject(error)
                })


        })
    },
    // inserts new user to user table
    // input: username, password, email
    addNewUser: (firstName, lastName, username, password, email) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(saltRounds, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    let newUser = models.User.build({
                        firstName: firstName,
                        lastName: lastName,
                        username: username,
                        password: hash,
                        email: email
                    })
                    newUser.save()
                        .then(() => {
                            resolve(newUser)
                        })
                        .catch((error) => {
                            reject(error)
                        })
                })
            })
        })
    },
    // removes user from user table
    // input: userid
    deleteUserById: function (userid) {
        return new Promise(function (resolve, reject) {
            models.user.destroy({
                where: {
                    id: userid
                }
            }).then(function () {
                resolve()
            })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
    // removes user from user table
    // input: userid
    deleteUserByUserID: function (userid) {
        return new Promise(function (resolve, reject) {
            models.user.destroy({
                where: {
                    id: userid
                },
                cascade: true
            }).then(function () {
                resolve()
            })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
    updateUserEmail: function (userid, email) {
        return new Promise(function (resolve, reject) {
            models.user.update({
                email: email
            },
                {
                    where:
                    {
                        id: userid
                    }
                }
            )
                .then(function () {
                    resolve()
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    }
    ,
    updateUserPassword: function (userid, password) {
        return new Promise(function (resolve, reject) {
            models.user.update({
                password: password
            },
                {
                    where:
                    {
                        id: userid
                    }
                }
            )
                .then(function () {
                    resolve()
                })
                .catch(function (error) {
                    reject(error)
                })
        })
    },
}
