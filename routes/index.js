var express = require('express');
var router = express.Router();

//const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mid', function(req, res, next) {
  res.render('mid');
});

router.get('/StudentRegister', function(req, res, next) {
  res.render('StudentRegister');
});

router.get('/StudentLogin', function(req, res, next) {
  res.render('StudentLogin');
});

router.get('/StudentDashboard', function(req, res, next) {
  res.render('StudentDashboard');
});


module.exports = router;
