'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();


const Order = require('./models/order')

const indexRoute = require('./routes/indexRoute')
const orderRoute = require('./routes/orderRoute')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', indexRoute);
app.use('/orders', orderRoute);

module.exports = app;