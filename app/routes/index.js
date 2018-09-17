var express = require('express');
var router = express.Router();
const mainCtrl = require('../controllers/main');
const FranceCtrl = require('../controllers/franceCtrl');
const FinlandCtrl = require('../controllers/finlandCtrl');
const GermanyCtrl = require('../controllers/germanyCtrl');

/* GET home page. */
router.get('/', mainCtrl.index);
router.get('/france', FranceCtrl.index);
router.get('/finland', FinlandCtrl.index);
router.get('/germany', GermanyCtrl.index);

module.exports = router;
