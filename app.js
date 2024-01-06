var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require('./database/connetDB')
const studentRouter = require('./routes/students');
const adminRouter = require('./routes/admin');
const companyRouter = require('./routes/company');
const session = require('express-session');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/student', studentRouter);
app.use('/admin', adminRouter);
app.use('/company', companyRouter);

app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/mid', function(req, res, next) {
  res.render('mid');
});

connectDB();

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
