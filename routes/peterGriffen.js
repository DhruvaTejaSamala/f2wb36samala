var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('peterGriffen', { title: 'Search Results Peter Griffen' });
});

module.exports = router;
