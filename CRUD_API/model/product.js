const mongoose = require('mongoose');
const { stringify } = require('querystring');

//making the schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});
//making the model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;