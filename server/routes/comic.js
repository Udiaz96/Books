var express = require('express');
var router = express.Router();

var comicController = require('../controllers/comic.controller');

router.post('/comic-list', comicController.comicList);
router.get('/comic/:id', comicController.comic);
router.post('/comic-update', comicController.comicUpdate);
router.post('/comic', comicController.comictSave);
router.post('/comic-delete', comicController.comicDelete);
module.exports = router;
