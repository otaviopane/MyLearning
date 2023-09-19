'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = (req, res, next) => {
    Order
        .find({}, 'id description costInDollars complete')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    Order
        .findOne({
            id: req.params.id,
        }, 'description costInDollars complete')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send({
                message: 'Failed to find, resource does not exist',
                e
            });
        });
};

exports.post = (req, res, next) => {
    var order = new Order(req.body);
    order
        .save()
        .then(x => {
            res.status(201).send({ message: 'Registered successfully!', order });
        }).catch(e => {
            res.status(400).send({
                message: 'Failed to register',
                data: e
            });
        });
};

exports.put = (req, res, next) => {
    var order = new Order(req.body);
    Order
        .findOneAndUpdate({
            id: req.params.id,
        }, {
            $set: {
                description: req.body.description,
                costInDollars: req.body.costInDollars,
                complete: req.body.complete
            }
        }).then(x => {
            res.status(200).send({ message: 'Updated successfully!', order });
        }).catch(e => {
            res.status(404).send({
                message: 'Failed to update, resource does not exist',
                data: e
            });
        });
};

exports.delete = (req, res, next) => {
    var order = new Order(req.body);
    Order
        .findOneAndRemove(
            req.params.id
        ).then(data => {
            res.status(204).send({ message: 'Removed successfully!', data });
        }).catch(e => {
            res.status(404).send({
                message: 'Failed to remove',
                data: e
            });
        });
};