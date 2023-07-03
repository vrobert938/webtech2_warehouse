const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    // name: {type: String, default: null, required: [true, "Must enter name"], unique: true},
    // quantity: {type: Number, default: null, required: true, default: 0}
    name: {type: String},
    quantity: {type: Number}
});

module.exports = mongoose.model('Item', itemSchema);