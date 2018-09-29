const Bands = require('../models/Bands');

const index = (req, res, next) => {
    res.render('finland/index', {
        bands: Bands.from('finland'),
        title: 'Band\'s corner - Finland'
    })
};

module.exports = {
    index
};