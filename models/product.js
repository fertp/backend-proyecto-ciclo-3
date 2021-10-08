const mongoose = require("mongoose");

const productSchema = new mongoose.Schema( 
  { 
    title: { 
      type: String, 
    }, 
    slug: {
      type: String,
    },
    image: { 
      type: String, 
    }, 
    price: { 
      type: Number, 
    }, 
    description: { 
      type: String, 
    }, 
    features: { 
      type: String, 
    }, 
    category_id: { 
      type: Number, 
    }, 
    status: { 
      type: String,
    },
  }, 
  { 
    collection: "products", 
  } 
); 
 
module.exports = mongoose.model("product", productSchema);