var express = require('express');
var router = express.Router();

var comicController = require('../controllers/comic.controller');

router.post('/comic-list', comicController.comicList);
router.get('/comic/:id', comicController.comic);
router.put('/comic', comicController.comicUpdate);
router.post('/comic', comicController.comictSave);
router.delete('/comic/:id', comicController.comicDelete);
module.exports = router;
