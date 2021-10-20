// external imports
const express = require('express')


// internal imports
const router = express.Router()
const { renderAdminPage, addArticle,chek, getAllArticleAndManageData, deleteArticle, } = require('../controllers/adminController')
const { renderLoginPage, newAdmin, adminLogin } = require('../controllers/loginController')
const { decorateHtmlResponse, decorateRouterResponse } = require('../middlewares/decorateResponse')
const upload = require('../middlewares/imageUploader')
const authChecked = require('../middlewares/authChecked')


// request parser

// routers
// render routers
router.get('/', authChecked, decorateRouterResponse(''), decorateHtmlResponse('dashboard'), renderAdminPage)
router.get('/newArticle', authChecked, decorateRouterResponse('/'), decorateHtmlResponse('addArticle'), renderAdminPage)
router.get('/manageArticle', authChecked, decorateRouterResponse('/'), decorateHtmlResponse('manageArticle'), getAllArticleAndManageData)
router.get('/userSetting', authChecked, decorateRouterResponse('/'), decorateHtmlResponse('userSetting'), renderAdminPage)

// add new article router
router.post('/addArticle', authChecked, upload.single('picture'), addArticle)

router.get('/deleteArticle/:id', deleteArticle)


// authentication Routers
router.get('/login', decorateRouterResponse('/'), renderLoginPage)
router.post('/newAdmin', authChecked, newAdmin)
router.post('/loginData', adminLogin)



router.get('/manageArticle/edit/:id', decorateRouterResponse('/'), decorateHtmlResponse('manageArticle','editForm'),chek)




module.exports = router