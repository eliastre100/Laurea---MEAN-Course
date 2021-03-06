var express = require('express');
var router = express.Router();
const mainCtrl = require('../controllers/main');
const FranceCtrl = require('../controllers/franceCtrl');
const FinlandCtrl = require('../controllers/finlandCtrl');
const GermanyCtrl = require('../controllers/germanyCtrl');
const ArtistCtrl = require('../controllers/artistCtrl');

/* GET home page. */
router.get('/', mainCtrl.index);
router.get('/artists', ArtistCtrl.index);
router.get('/france', FranceCtrl.index);
router.get('/finland', FinlandCtrl.index);
router.get('/germany', GermanyCtrl.index);

router
    .route('/artist/new')
    .get(ArtistCtrl.add)
    .post(ArtistCtrl.create);

router
    .route('/artist/:id')
    .get(ArtistCtrl.edit)
    .post(ArtistCtrl.update);

router.get('/artist/:id/delete', ArtistCtrl.destroy);

module.exports = router;
