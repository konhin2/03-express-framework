exports.isLogged = (req, res, next) => {
    const logged = true
    if (logged) {
        next()
    } else {
        res.send('You have to logged in')
    }
}
