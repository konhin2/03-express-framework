// Imports modules
const express = require('express')
const app = express()

// Import Routes
const usersRouter = require('./routes/users.routes')

// Middlewares
require('dotenv').config()
const port = process.env.PORT

// Routes
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/users', usersRouter)



// Server
app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})