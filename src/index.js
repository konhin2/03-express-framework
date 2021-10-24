// Imports
const express = require('express')
const app = express()

// Middlewares
require('dotenv').config()
const port = process.env.PORT

// Routes
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/users', (req, res) => {
    res.send('Show Users')
})

// Server
app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})