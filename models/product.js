const mongoose = require("mongoose");

const productSchema = new mongoose.Schema( 
  { 
    name: { 
      type: String, 
    }, 
    slug: {
      type: String,
      unique: true
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
    created_at: {
      type: Timestamp,
    },
    last_modified: {
      type: Timestamp,
    }
  }, 
  { 
    collection: "products", 
  } 
); 
 
module.exports = mongoose.model("product", productSchema);