const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {type: String, default: null, required: [true, "Must enter name"], unique: true},
    quantity: {type: Number, default: null, required: true, default: 0}
});

module.exports = mongoose.model('item', itemSchema);