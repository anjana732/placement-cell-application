var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost:27017/placement-cell', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  regNo: Number,
  email: String,
  password: String
});

const User = mongoose.model('Student', userSchema);

//.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Registration and login functionality for Students

app.post('/StudentRegister', async(req, res) => {
  const { name, regNo, email, password } = req.body;

  // Create a new user
  const newUser = new User({ name, regNo, email, password });

  try {
    await newUser.save();
    res.render('StudentLogin');
  } catch (err) {
    console.error(err);
    res.send('Error registering user.');
  }
});

app.get('/StudentLogin', (req, res) => {
  res.render('StudentLogin');
});

app.post('/StudentLogin', async(req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email, password }).exec();

    if (user) {
      res.render('StudentDashboard');
    } else {
      res.send('Invalid username or password.');
    }
  } catch (err) {
    console.error(err);
    res.send('Error during login.');
  }
  

});

// Registration and login functionality for Admin

const AdminSchema = new mongoose.Schema({
  name: String,
  staffId: Number,
  email: String,
  password: String
});

const admin = mongoose.model('Admin', AdminSchema);

app.get('/AdminRegister', (req, res) => {
  res.render('AdminRegister');
});

app.post('/AdminRegister', async(req, res) => {
  const { name, staffId, email, password } = req.body;

  // Create a new user
  const newAdmin = new admin({ name, staffId, email, password });

  try {
    await newAdmin.save();
    res.render('AdminLogin');
  } catch (err) {
    console.error(err);
    res.send('Error registering user.');
  }
});

app.get('/AdminLogin', (req, res) => {
  res.render('AdminLogin');
});

app.post('/AdminLogin', async(req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const newadmin = await admin.findOne({ email, password }).exec();

    if (newadmin) {
      res.render('AdminDashBoard');
    } else {
      res.send('Invalid username or password.');
    }
  } catch (err) {
    console.error(err);
    res.send('Error during login.');
  }  
});

//posted job
const postJob = mongoose.model('PostedJob', {
  companyName: String,
  location: String,
  jobRole: String,
  salary: Number,
  eligibility: String,
  jobDesc: String,
  applyLink: String,
  lastDate: Date
});

app.get('/AdminDashBoard', (req, res) => {
  res.render('AdminDashBoard');
});
app.post('/AdminDashBoard', async (req, res) => {
  try {
    const { companyName, location, jobRole, salary, eligibility, jobDesc, applyLink, lastDate} = req.body;
    const PostJob = new postJob({ companyName, location, jobRole, salary, eligibility, jobDesc, applyLink, lastDate });
    await PostJob.save();
    res.redirect('/AdminDashBoard');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Connecting on port with server
const PORT = 4500;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
