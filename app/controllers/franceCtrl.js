const Bands = require('../models/Bands');

const index = (req, res, next) => {
    res.render('france/index', {
        bands: Bands.from('france')
    })
};

module.exports = {
    index
};