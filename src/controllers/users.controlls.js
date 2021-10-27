const { use } = require("../routes/users.routes")

const users = [
    {
        id: 1,
        nombre: "K'onhin",
        edad: 25
    },
    {
        id: 2,
        nombre: "Mike",
        edad: 33
    },
    {
        id: 3,
        nombre: "Sam",
        edad: 26
    }
]
exports.getUsers = async (req, res) => {
    res.render('users', {
        users
    })
}

exports.getPostUser = async (req, res) => {
    res.render('create-user')
}

exports.postUser = async (req, res) => {
    users.push(req.body)
    res.render('users', {users})
}

exports.getPutUser = async (req, res) => {
    res.render('update-user')
}

exports.putUser = async (req, res) => {
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id) {
            users[i].nombre = req.body.nombre
            users[i].edad = req.body.edad
            break // Finaliza el ciclo
        }
    }
    res.render('users', {users})
}

exports.getDeleteUser = async (req, res) => {
    res.render('delete-user')
}

exports.deleteUser = async (req, res) => {
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id) {
            users.splice(i, 1)
            break // Finaliza el ciclo
        }
    }
    res.render('users', {users})
}