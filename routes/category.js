const express = require("express")
const router = express.Router()
const categoryController = require('../controllers/categoryController')


// category model 
let categoryModel = require("../models/category"); 

// Index (Lista)
router.get('/', categoryController.index)

// Create (post)
router.post('/store', categoryController.store)

// Show (get)
router.get("/show/:id", categoryController.show)

// Show by slug (get)
router.get("/show/slug/:slug", categoryController.showSlug)
 
// Update (put)
router.put('/update/:id', categoryController.update)

// Delete 
router.delete('/delete/:id', categoryController.destroy)
 
module.exports = router; 