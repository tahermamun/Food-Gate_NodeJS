const jwt = require('jsonwebtoken')


// login authentication checking
const authChecked = (req, res, next) => {

    const reqToken = req.headers.cookie
    
    if (reqToken) {
        const token = reqToken.split('=')[1]
        jwt.verify(token, process.env.JWT_SECRET)
        next()
    } else {
        res.redirect('/admin/login')
    }
}
module.exports = authChecked