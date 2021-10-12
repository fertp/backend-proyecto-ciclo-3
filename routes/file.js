const express = require("express")
const router = express.Router()
// const fileController = require('../controllers/fileController')
const model = require("../models/file")

const multer = require("multer")

const storage = multer.diskStorage({
  destination: __dirname + '/public/images/products',
  filename: (req, file, callback) => {
    const filename = file.originalname.toLowerCase().replaceAll(' ', '-')
    cb(null, Date.now() + '-' + fileName)
  }
})

let upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(new Error('File type not accepted (.png, .jpg, .jpeg)'));
    }
  }
})


router.post('/images/store', upload.single('image'), (req, res, next) => {

  reqFile = '/public/images/products/' + req.files[0].filename

  try {
    const reg = model.create({ name: reqFile })
    res.status(201).json({
      message: 'OK',
      fileCreated: {
        _id: reg._id,
        name: reg.name
      }
    })
  } catch (e) {
    console.error(e)
    res.status(500).send({
      message: 'Ha ocurrido un error'
    })
    next()
  }

})

// // Index (Lista)
// router.get('/', fileController.index)

// // Create (post)
// router.post('/store', fileController.store)

// // Show (get)
// router.get("/show/:id", fileController.show)
 
// Update (put)
router.put('/update/:id', fileController.update)

// Delete 
router.delete('/delete/:id', fileController.destroy)
 
module.exports = router; 