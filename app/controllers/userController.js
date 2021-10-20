
// internal imports
const Article = require('../models/article')



// render home page
const renderHomePage = async (req, res) => {
    try {
        const allData = await Article.find().limit(8)
        const recentArticle = await Article.find().sort({ date: -1 }).limit(3)

        res.render('clients/pages/home.ejs', {
            Articles: allData,
            recent: recentArticle
        })
    } catch {

    }

}

// render article single page
const renderArticleSinglePage = (req, res) => {
    res.render('clients/pages/articleSinglePage.ejs')
}

// render article page
const renderArticlePage = async(req, res) => {

    const allData = await Article.find()
    res.render('clients/pages/article.ejs', { Articles: allData })
}

// render contact page
const renderContactPage = (req, res) => {
    res.render('clients/pages/contact.ejs')
}

// render about page
const renderAboutPage = (req, res) => {
    res.render('clients/pages/about.ejs')
}


















module.exports = {
    renderHomePage,
    renderArticleSinglePage,
    renderArticlePage,
    renderContactPage,
    renderAboutPage,
}

















