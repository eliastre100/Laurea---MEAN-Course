const Bands = require('../../app_api/models/Bands');

const index = (req, res, next) => {
    res.render('france/index', {
        bands: Bands.from('france'),
        title: 'Band\'s corner - France'
    })
};

module.exports = {
    index
};