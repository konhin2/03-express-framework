// Import modules
const express = require('express')
const app = express()

// Variables de entorno
require('dotenv').config()

// Otra forma para llamar a la carpeta en lugar de concatenar __dirname + "/public"
const path = require('path')

// Import Routes
const usersRouter = require('./routes/users.routes')

// Settings
app.set('title', 'Aplicación echa en Node.js')
app.set('port', process.env.PORT)

// Motor de plantilla - añadir funcionalidad en el html
// Incrustar JS en html
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Middlewares
// Para trabajar con archivos estáticos que puedan ser visualizados por el navegador:
// HTLM, CSS, JS(CLIENTE)

// Modulo path en vez de concatenar dentro del parentesis de static
app.use(express.static(path.join(__dirname, 'public')))

// Middleware que me permite obtener correctamente los datos y no un undefined al utilizar los metos y revisar el req.body
app.use(express.urlencoded({extended:false}))

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

app.use('/users', usersRouter)



// Server
app.listen(app.get('port'), () => {
    console.log(`Listen on port ${app.get('port')} ` + app.get('title'))
})