const request = require("request-promise-native");
const apiUrl = require("../constants/apiUrl");
const dataHelper = require('../helpers/dataHelper');

const country = 'France';

const index = async (req, res, next) => {
    try {
        let data = await request({ url: apiUrl.url + '/api/bands', method: 'GET', json: {}, qs: {} });
        if (dataHelper.validateDatas(res, data)) {
            data = data.filter((element) => element.country.toLowerCase() === country.toLowerCase());
            res.render(country + '/index', {
                bands: data,
                title: 'Band\'s corner - ' + country
            })
        }
    } catch (e) {
        res.render('error', { message: 'Error accessing API: ' + e.statusMessage + '(' + e.statusCode + ')', error: {status: e.statusCode }})
    }
};

module.exports = {
    index
};