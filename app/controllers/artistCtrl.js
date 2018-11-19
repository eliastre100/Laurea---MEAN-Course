const request = require("request-promise-native");
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
        // If code is not 2XX an error is raised and as we use a REST api, a 2XX response on a post request is always 201
        await request({ url: apiUrl.url + '/api/bands', method: 'POST', json: data, qs: {} });
        res.redirect('/');
    } catch (e) {
        res.render('error', { message: 'Error accessing API: ' + e.statusMessage + '(' + e.statusCode + ')', error: {status: e.statusCode }})
    }
};

module.exports = {
    add,
    create
};