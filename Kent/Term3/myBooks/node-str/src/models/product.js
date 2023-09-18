'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    description: {
        type: String,
        required: true
    },
    costInDollars: {
        type: Number,
        required: true
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },

});

module.exports = mongoose.model('Product', schema);
