// external imports
const mongoose = require('mongoose')
const multer = require('multer')

// internal imports
const Article = require('../models/article')


// render admin dashboard page
const renderAdminPage = (req, res) => {
    res.render('admin/pages/dashboard.ejs')
};

// add new article controller
const addArticle = async (req, res) => {
    try {
        const { title, description } = req.body
        const newArticleData = {
            title,
            description,
            picture: req.file.filename
        }
        const addNewArticle = new Article(newArticleData)
        await addNewArticle.save()
        console.log('article added successfully')
        res.redirect('/admin/newArticle')
    } catch {
        console.log('article not added')
    }

};

// all article controller
const getAllArticleAndManageData = async (req, res) => {
    try {

        const allData = await Article.find()
        res.render('admin/pages/dashboard.ejs', { Articles: allData })
    } catch (err) {
        console.log(err.massage)
    }
}


// delete article
const deleteArticle = async (req, res) => {
    try {
        const id = req.params.id
        await Article.deleteOne({ _id: id })
        console.log('Article Delete Successfully')
        res.redirect('/admin/manageArticle')
    } catch (error) {
        console.log('Article Delete not Successfully')

    }
}




const chek = async (req, res) => {
    const id = req.params.id
    const allData = await Article.find()
    const singleArticle = await Article.find({ _id: id })


    console.log(id)
    res.render('admin/pages/dashboard.ejs', {
        Articles: allData,
        singleArticle: singleArticle[0]
    })
}




module.exports = {
    renderAdminPage,
    addArticle,
    getAllArticleAndManageData,
    deleteArticle,
    chek,
};

















