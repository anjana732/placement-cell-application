var express = require('express');
var router = express.Router();
const postJob = require("../models/jobSchema");
const admin = require('../models/adminSchema');
const mongoose = require('mongoose');

router.get('/AdminRegister', (req, res) => {
    res.render('AdminRegister');
  });
  
  router.post('/AdminRegister', async(req, res) => {
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
  
  router.get('/AdminLogin', (req, res) => {
    res.render('AdminLogin');
  });
  
  router.post('/AdminLogin', async(req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists in the database
      const newadmin = await admin.findOne({ email, password }).exec();
  
      if (newadmin) {
        // res.render('AdminDashBoard');
        res.redirect('/admin/AdminDashBoard');
      } else {
        res.send('Invalid username or password.');
      }
    } catch (err) {
      console.error(err);
      res.send('Error during login.');
    }  
  });
  
 /* router.post('/AdminDashBoard', async (req, res) => {
    try {
      const { companyName, location, jobRole, salary, eligibility, jobDesc, applyLink, lastDate} = req.body;
      const PostJob = new postJob({ companyName, location, jobRole, salary, eligibility, jobDesc, applyLink, lastDate });
      console.log('ravi');
      await jobs.create();
      console.log('ravi1');
      res.redirect('/admin/AdminDashBoard');
      console.log('ravi2');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  */
  router.post('/AdminDashBoard', async (req, res) => {
   
     try {
      const { companyName, location, jobRole, salary, eligibility, jobDesc, applyLink, lastDate } = req.body;
      const PostJob = new postJob({ companyName, location, jobRole, salary, eligibility, jobDesc, applyLink, lastDate });
      await PostJob.save(); // Fix here: Change 'jobs' to 'PostJob'
      res.redirect('/admin/AdminDashBoard');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  router.get('/AdminDashBoard', async (req, res) => {
   /* postJob.find()
    .then(postedjobs => res.json(postedjobs))
    .catch(err => res.json(err))*/
     try {
      const jobs = await postJob.find().exec();
      res.render('AdminDashBoard', { jobs });
    } catch (exp) {
      console.log("catch:", exp);
      res.status(500).json({"message": "An error occurred", "error": exp});
    }
  });
  
  //getting student details
  router.get('/student-details', async (req, res) => {
    try {
      // Fetch all student details from the database
      const students = await Student.find();
  
      // Render the student details page
      res.render('student-details', { students });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
module.exports = router;