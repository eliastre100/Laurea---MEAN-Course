const Bands = require('../models/Bands');

const index = (req, res, next) => {
    res.render('germany/index', {
        bands: Bands.from('germany')
    })
};

module.exports = {
    index
};