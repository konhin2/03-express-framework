exports.isLogged = (req, res, next) => {
    const logged = false
    if (logged) {
        next()
    } else {
        res.send('You have to logged in')
    }
}
