var express = require('express');
var router = express.Router();
const company = require('../models/companySchema');
const mongoose = require('mongoose');
const students = require('../models/studentSchema');

router.get('/CompanyRegister', (req, res) => {
    res.render('CompanyRegister');
  });
  
  router.post('/CompanyRegister', async(req, res) => {
    const { name, Id, email, password } = req.body;
  
    // Create a new user
    const newCompany = new company({ name, Id, email, password });
  
    try {
      await newCompany.save();
      res.render('CompanyLogin');
    } catch (err) {
      console.error(err);
      res.send('Error registering user.');
    }
  });
  
  router.get('/CompanyLogin', (req, res) => {
    res.render('CompanyLogin');
  });
  
  router.post('/CompanyLogin', async(req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists in the database
      const newadmin = await admin.findOne({ email, password }).exec();
  
      if (newadmin) {
        // res.render('AdminDashBoard');
        res.redirect('/company/CompanyDashBoard');
      } else {
        res.send('Invalid username or password.');
      }
    } catch (err) {
      console.error(err);
      res.send('Error during login.');
    }  
  });
  
module.exports = router;