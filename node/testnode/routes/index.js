var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/image_push', function(req, res, next) {
  res.render('image_push', { title: 'Express' });
});

module.exports = router;
