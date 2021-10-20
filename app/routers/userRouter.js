// external imports
const express = require('express')



// internal imports
const router = express.Router()
const { renderHomePage, renderArticleSinglePage,renderArticlePage,renderContactPage,renderAboutPage } = require('../controllers/userController')
const {decorateHtmlResponse} = require('../middlewares/decorateResponse')


// routers
// home page render router
router.get('/', renderHomePage)

// single article page render router
router.get('/singleArticle', decorateHtmlResponse('Welcome to Mamzz Blog'), renderArticleSinglePage)

// article page render router
router.get('/article', decorateHtmlResponse('Welcome to Mamzz Blog Page'), renderArticlePage)

// contact page render router
router.get('/contact', decorateHtmlResponse('Contact Us'), renderContactPage)

// about page render router
router.get('/about', decorateHtmlResponse('About Me'), renderAboutPage)












module.exports = router