var express = require('express');
var router = express.Router();

//mod
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
//mod finish

//const userModel = require('./users')

/* GET home page. */
/*mongoose.connect('mongodb://localhost:27017/placement-cell', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  regNo: Number,
  email: String,
  password: String
});

const User = mongoose.model('Student', userSchema);

router.set('view engine', 'ejs');

router.use(bodyParser.urlencoded({ extended: true }));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/StudentRegister', (req, res) => {
  const { name, regNo, email, password } = req.body;

  // Create a new user
  const newUser = new User({ name, regNo, email, password });

  // Save the user to the database
  newUser.save((err) => {
    if (err) {
      console.error(err);
      res.send('Error registering user.');
    } else {
      res.send('User registered successfully.');
    }
  });
});

router.get('/StudentLogin', (req, res) => {
  res.render('StudentLogin');
});

router.post('/StudentLogin', (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists in the database
  User.findOne({ email, password }, (err, user) => {
    if (err) {
      console.error(err);
      res.send('Error during login.');
    } else if (user) {
      res.send('Login successful.');
    } else {
      res.send('Invalid username or password.');
    }
  });
});

*/
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
