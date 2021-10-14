const express = require("express")
const router = express.Router()
const fileController = require('../controllers/fileController')
const fileUpload = require('../middlewares/fileUpload')

// Index (Lista)
router.get('/', fileController.index)

router.post('/store', fileUpload.upload.single('image'), fileController.store)

// // Create (post)
// router.post('/store', fileController.store)

// // Show (get)
router.get("/show/:id", fileController.show)
 
// Update (put)
// router.put('/update/:id', fileController.update)

// Delete 
router.delete('/delete/:id', fileController.destroy)
 
module.exports = router; 