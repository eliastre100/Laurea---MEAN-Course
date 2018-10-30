const mongoose = require('mongoose');

const Bands = mongoose.model('Bands');

const index = async (req, res, next) => {
    res
        .status(200)
        .json(await Bands.find({}))
};

const add = async (req, res, next) => {
    res
        .status(201)
        .json(await Bands.create(req.body))
};

module.exports = {
    index,
    add
};