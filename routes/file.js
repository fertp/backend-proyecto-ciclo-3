const express = require("express")
const router = express.Router()
// const fileController = require('../controllers/fileController')
const model = require("../models/file")

const multer = require("multer")

const storage = multer.diskStorage({
  destination: './public/images/products',
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-')
    cb(null, fileName)
  }
})

let upload = multer({ storage: storage })

// let upload = multer({
//   storage: storage,
//   fileFilter: (req, file, callback) => {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//       callback(null, true);
//     } else {
//       callback(null, false);
//       return callback(new Error('File type not accepted (.png, .jpg, .jpeg)'));
//     }
//   }
// })

router.post('/store', upload.single('image'), async (req, res, next) => {

  try {
    let name = req.file.path
    let x = name.split("\\") 
    x.splice(0, 1)
    name = x.join('/')
    const reg = await model.create({ name: name })
    res.status(201).json({
      message: 'OK',
      fileCreated: {
        _id: reg._id,
        name: reg.name
      }
    })
  } catch (e) {
    console.error(e)
    res.status(500).json({
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
// router.put('/update/:id', fileController.update)

// Delete 
// router.delete('/delete/:id', fileController.destroy)
 
module.exports = router; 