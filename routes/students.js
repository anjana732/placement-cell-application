var express = require('express');
var router = express.Router();
const Student = require('../models/studentSchema')
const postJob = require("../models/jobSchema");

router.get('/StudentRegister', async(req,res)=>{
  res.render('StudentRegister');
})

router.post('/StudentRegister', async(req, res) => {
    const { name, regNo, email, password } = req.body;
    const newStudent = new Student({ name, regNo, email, password });
  
    try {
      await newStudent.save();
      res.render('StudentLogin');
    } catch (err) {
      console.error(err);
      res.send('Error registering user.');
    }
  });
  
  router.get('/StudentLogin', (req, res) => {
    res.render('StudentLogin');
  });
  
  router.post('/StudentLogin', async(req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the Studentexists in the database
      const student = await Student.findOne({ email, password }).exec();
  
      if (student) {
        res.render('StudentDashboard');
      } else {
        res.send('Invalid username or password.');
      }
    } catch (err) {
      console.error(err);
      res.send('Error during login.');
    }
  });

  router.get('/StudentProfile', (req, res) => {
    res.render('StudentProfile');
  });
  
  router.get('/StudentDetails', async (req, res) => {
  
    try {
      // Fetch data from MongoDB
      const jobs = await postJob.find();
  
      // Render the EJS template and pass the data to it
      res.render('StudentDashBoard', { jobs });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

module.exports = router;