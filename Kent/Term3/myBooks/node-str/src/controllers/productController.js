'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = (req, res, next) => {
    Product
        .find({}, 'id description costInDollars complete')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    Product
        .findOne({
            id: req.params.id,
        }, 'description costInDollars complete')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product
        .save()
        .then(x => {
            res.status(201).send({ message: 'Registered successfully!' });
        }).catch(e => {
            res.status(400).send({
                message: 'Failed to register',
                data: e
            });
        });
};

exports.put = (req, res, next) => {
    Product
        .findOneAndUpdate({
            id: req.params.id,
        }, {
            $set: {
                description: req.body.description,
                costInDollars: req.body.costInDollars,
                complete: req.body.complete
            }
        }).then(x => {
            res.status(200).send({ message: 'Updated successfully!' });
        }).catch(e => {
            res.status(400).send({
                message: 'Failed to update',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
    Product
        .findOneAndRemove(
            req.params.id,
        ).then(x => {
            res.status(200).send({ message: 'Removed successfully!' });
        }).catch(e => {
            res.status(400).send({
                message: 'Failed to remove',
                data: e
            });
        });
};