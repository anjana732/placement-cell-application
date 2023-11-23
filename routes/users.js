var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/*const { default: mongoose } = require("mongoose");

const mongoos = require('mongoose');

mongoose.connect = ("mongodb://127.0.0.1:27017/placement-cell");

const userschema = mongoos.Schema({
  name: String,
  regNo: Number,
  password: String
})

module.exports = mongoos.model("Student", schema);*/
