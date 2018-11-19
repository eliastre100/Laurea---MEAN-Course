const express = require('express');
const router = express.Router();

const BandsCtrl = require('../controllers/BandsCtrl');

router
    .route('/bands')
    .get(BandsCtrl.index)
    .post(BandsCtrl.add);

router
    .route('/bands/:id')
    .patch(BandsCtrl.update)
    .delete(BandsCtrl.destroy);

module.exports = router;