// external imports
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// internal imports
const Admin = require('../models/login')


// render  login page
const renderLoginPage = (req, res) => {
    res.render('admin/pages/login.ejs')
};

// create new admin controller
const newAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdminData = {
            name,
            email,
            password: hashedPassword
        };
        const newAdmin = await new Admin(newAdminData);
        await newAdmin.save()
        console.log("admin create successfully")
        res.redirect('/admin/userSetting')
    } catch {

    }
}

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const admin = await Admin.find({ email: email })

        if (admin && admin.length > 0) {

            const matchedPassword = await bcrypt.compare(password, admin[0].password)

            if (matchedPassword) {
                const adminData = {
                    name: admin[0].name,
                    email: admin[0].email,
                    id: admin[0]._id
                }

                const token = jwt.sign(adminData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY });

                // document.cookie="username=John Doe";
                res.cookie("refreshToken", token, {
                    httpOnly: true,
                    sameSite: "strict",
                });

                res.redirect('/admin')
                console.log(adminData)

            }
        } else {
            console.log('admin not find')
        }
    } catch {

    }
}











module.exports = {
    renderLoginPage,
    newAdmin,
    adminLogin,
};
















