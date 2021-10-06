const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
 
let productSchema = new Schema( 
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