const express = require("express"); 
const productRoute = express.Router(); 
 
// Product model 
let productModel = require("../models/product"); 

// Index (Lista)
productRoute.route("/").get((req, res) => { 
  productModel.find((error, data, next) => { 
    if (error) { 
      return next(error); 
    } else { 
      console.log(error); 
      res.json(data); 
    } 
  }); 
}); 

// Prueba
// productRoute.route("/").get((req, res) => { 
//    res.send('Hola'); 
// }); 

// Create (post)
productRoute.route("/create-product").post((req, res, next) => { 
  productModel.create(req.body, (error, data) => { 
    if (error) { 
      return next(error); 
    } else { 
      console.log(data); 
      res.json(data); 
    } 
  }); 
});

// Edit (get)
productRoute.route("/edit-product/:id").get((req, res) => { 
  productModel.findById(req.params.id, (error, data, next) => { 
    if (error) { 
      console.log(error); 
      return next(error); 
    } else { 
      res.json(data); 
    } 
  }); 
}); 
 
// Update (put)
productRoute.route("/update-product/:id").put((req, res, next) => { 
  productModel.findByIdAndUpdate( 
    req.params.id, 
    { 
      $set: req.body, 
    }, 
    (error, data) => { 
      if (error) { 
        console.log(error); 
        return next(error); 
      } else { 
        res.json(data); 
        console.log("Student successfully updated!"); 
      } 
    } 
  ); 
});

// Delete 
productRoute.route("/delete-product/:id").delete((req, res, next) => { 
  productModel.findByIdAndRemove(req.params.id, (error, data) => { 
    if (error) { 
      return next(error); 
    } else { 
      res.status(200).json({ 
        msg: data, 
      }); 
    } 
  }); 
}); 
 
module.exports = productRoute; 