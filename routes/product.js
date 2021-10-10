const express = require("express")
const router = express.Router()
const productController = require('../controllers/ProductController')


// Product model 
let productModel = require("../models/product"); 

// Index (Lista)
router.get('/', productController.index)

// Create (post)
router.post('/store', productController.store)

// Show (get)
router.get("/show/:id", productController.show)

// Show by slug (get)
router.get("/show/slug/:slug", productController.showSlug)
 
// Update (put)
router.put('/update/:id', productController.update)

// Delete 
router.delete('/delete/:id', productController.destroy)
 
module.exports = router; 