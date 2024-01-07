var express = require('express');
var router = express.Router();
const Company = require('../models/companySchema');
const mongoose = require('mongoose');
const students = require('../models/studentSchema');

router.get('/CompanyRegister', (req, res) => {
    res.render('CompanyRegister');
  });
  
  router.post('/CompanyRegister', async(req, res) => {
    const { name, Id, email, password } = req.body;
  
    // Create a new user
    const newCompany = new Company({ name, Id, email, password });
  
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
      const newCompany = await Company.findOne({ email, password }).exec();
  
      if (newCompany) {
        // res.render('AdminDashBoard');
        res.render('CompanyDashBoard');
      } else {
        res.send('Invalid username or password.');
      }
    } catch (err) {
      console.error(err);
      res.send('Error during login.');
    }  
  });
  
module.exports = router;