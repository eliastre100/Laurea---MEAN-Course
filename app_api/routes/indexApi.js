const express = require('express');
const router = express.Router();

const BandsCtrl = require('../controllers/BandsCtrl');

router
    .route('/bands')
    .get(BandsCtrl.index)
    .post(BandsCtrl.add);

module.exports = router;