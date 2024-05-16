const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
   name: {
        type: String,
        required: true
    },
    city: Number,
})

module.exports = mongoose.model('restaurantData', restaurantSchema, 'restaurant');