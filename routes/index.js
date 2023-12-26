var express = require('express');
var router = express.Router();

//mod
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

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
