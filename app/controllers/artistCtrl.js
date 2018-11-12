const request = require("request-promise");
const apiUrl = require("../constants/apiUrl");
const dataHelper = require('../helpers/dataHelper');

const add = (req, res, next) => {
    res.render('new_artist');
};

const create = async (req, res, next) => {
    const data = {
        name: req.body.name,
        country: req.body.country,
        playlist: req.body.playlist
    };

    try {
        let response = await request({ url: apiUrl.url + '/api/bands', method: 'POST', json: data, qs: {} });
        res.redirect('/');
    } catch (e) {
        res.render('error', { message: 'Error accessing API: ' + e.statusMessage + '(' + e.statusCode + ')', error: {status: e.statusCode }})
    }
};

module.exports = {
    add,
    create
};