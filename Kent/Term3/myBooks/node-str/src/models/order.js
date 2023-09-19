'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: Number,
        required: true
    },
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

module.exports = mongoose.model('Order', schema);
