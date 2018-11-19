const mongoose = require('mongoose');

const Bands = mongoose.model('Bands');

const index = async (req, res, next) => {
    res
        .status(200)
        .json(await Bands.find({}))
};

const get = async (req, res, next) => {
    res
        .status(200)
        .json(await Bands.findById(req.params.id));
};

const add = async (req, res, next) => {
    res
        .status(201)
        .json(await Bands.create(req.body))
};

const update = async (req, res, next) => {
    let band = await Bands.findById(req.params.id);
    band = Object.assign(band, req.body);
    band.save();
    res.status(200).json(band);
};

const destroy = async (req, res, next) => {
    let band = await Bands.findById(req.params.id);
    band = Object.assign(band, req.body);
    band.remove();
    res.status(204).json();
};

module.exports = {
    index,
    get,
    add,
    update,
    destroy
};