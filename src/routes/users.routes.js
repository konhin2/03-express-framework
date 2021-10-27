const { application } = require('express')
const express = require('express')
const router = express.Router()

// Import Controller
const {
    getUsers, 
    getPostUser, 
    getPutUser, 
    getDeleteUser,
    postUser,
    putUser,
    deleteUser
} = require('./../controllers/users.controlls')

// Import Middleware
const { isLogged } = require('./../middlewares/isLogged')
router.use(isLogged)
// Methods
// GET
router.get('/',getUsers)

router.get('/create', getPostUser)

router.get('/update', getPutUser)

router.get('/delete', getDeleteUser)

// POST
router.post('/create', postUser)

router.put('/update/:id', putUser)

router.delete('/delete/:id', deleteUser)

// PUT 

// DELETE

module.exports = router