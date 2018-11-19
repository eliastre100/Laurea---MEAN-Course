const request = require("request-promise-native");
const apiUrl = require("../constants/apiUrl");
const dataHelper = require('../helpers/dataHelper');

const index = async (req, res, next) => {
    try {
        let data = await request({ url: apiUrl.url + '/api/bands', method: 'GET', json: {}, qs: {} });
        if (dataHelper.validateDatas(res, data)) {
            res.render('bands/index', {
                bands: data,
                title: 'Band\'s corner - All bands'
            })
        }
    } catch (e) {
        res.render('error', { message: 'Error accessing API: ' + e.statusMessage + '(' + e.statusCode + ')', error: {status: e.statusCode }})
    }};

const add = (req, res, next) => {
    res.render('new_artist', { artist: { name: '', playlist: '', country: '' } });
};

const edit = async (req, res, next) => {
    try {
        const band = await request({ url: apiUrl.url + '/api/bands/' + req.params.id, method: 'GET', json: {}, qs: {} });
        res.render('new_artist', { artist: band });
    } catch (e) {
        res.render('error', { message: 'Error accessing API: ' + e.statusMessage + '(' + e.statusCode + ')', error: {status: e.statusCode }})
    }
};

const update = async(req, res, next) => {
    const data = {
        name: req.body.name,
        country: req.body.country,
        playlist: req.body.playlist
    };

    try {
        await request({ url: apiUrl.url + '/api/bands/' + req.params.id, method: 'PATCH', json: data, qs: {} });
        res.redirect('/artists');
    } catch (e) {
        res.render('error', { message: 'Error accessing API: ' + e.statusMessage + '(' + e.statusCode + ')', error: {status: e.statusCode }})
    }
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
    index,
    edit,
    add,
    create,
    update
};