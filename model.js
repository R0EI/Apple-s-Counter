const mongoose = require("mongoose");

const mySchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
});

const fruits = mongoose.model("fruits",mySchema);
module.exports = {fruits};