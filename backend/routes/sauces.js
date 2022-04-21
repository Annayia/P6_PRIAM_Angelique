const express = require('express');
const router = express.Router();
const SauceCtrl = require('../controllers/sauces');
const auth= require('../middleware/auth');
const multer = require('../middleware/multer-config');
const like = require('../controllers/like');

router.post('/', auth, multer, SauceCtrl.CreateSauce);

router.get('/:id', auth, SauceCtrl.getOneSauce);

router.get('/', auth, SauceCtrl.GetAllSauce);

router.put('/:id', auth, multer, SauceCtrl.ModifySauce);

router.delete('/:id', auth, SauceCtrl.DeleteSauce);

router.post('/:id/like', auth, like.likeSauce);

module.exports = router;