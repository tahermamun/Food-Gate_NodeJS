// external imports
const multer = require('multer')
const path = require('path')
// internal imports
const upload_folder = "./public/uploads"


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, upload_folder)
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname)
        const fileName = file.originalname
            .replace(fileExt, '')
            .toLowerCase()
            .split(' ')
            .join('_')
        cb(null, fileName + fileExt)
    }

});
const upload = multer({ storage: storage });



module.exports = upload;