const { application } = require('express')
const express = require('express')
const router = express.Router()

// Import Controller
const {getUsers, postUser, putUser, deleteUser} = require('./../controllers/users.controlls')

// Import Middleware
const { isLogged } = require('./../middlewares/isLogged')
router.use(isLogged)
// Methods
router.get('/',getUsers)

router.get('/create', postUser)

router.get('/update', putUser)

router.get('/delete', deleteUser)

module.exports = router