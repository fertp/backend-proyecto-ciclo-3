const express = require("express"); 
const router = express.Router(); 

const productRouter = require('./product');
const categoryRouter = require('./category');
// const userRouter = require('./user');


router.use('/products', productRouter);
router.use('/categories', categoryRouter);
// router.use('/users', usertRouter);


module.exports = router;