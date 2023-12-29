var express = require('express');
var router = express.Router();
const Student = require('../models/studentSchema')
const postJob = require("../models/jobSchema");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"scientist_job.json");

fs.readFile(filePath,{encoding:"utf-8"},function(data,err){
  if(err){
    console.log(err);
  }else{
 
  }
})


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

 /*router.get('/StudentDashboard', async (req, res) => {
    try {
      // Fetch data from the database
      const j = await jobs.find();
  
      // Render your EJS template and pass the data
      res.render('StudentDashboard', { j });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
  });*/
  router.get('/student-details', async (req, res) => {
  
    try {
      // Fetch data from MongoDB
      const job = await jobs.find();
  
      
      res.render('StudentDashboard', { job });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/StudentProfile', (req, res) => {
    res.render('StudentProfile');
  });
  
  router.get('/StudentDashboard', async (req, res) => {
  
    try {
      // Fetch data from MongoDB
      const job = await postJob.find();
      console.log("--------------------------------------------------------------------------");
      console.log(job);
      
      // Render the EJS template and pass the data to it
      res.render('StudentDashboard', { job });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/ResumeFrontPage', async(req,res)=>{
    res.render('ResumeFrontPage');
  })
  
  router.get('/Resume', async(req,res)=>{
    res.render('Resume');
  })

  router.get('/jobs', (req, res) => {
    const jobListings = require('./scientist_job.json'); // Update the path accordingly
    res.render('jobs', { jobListings });
});
  

module.exports = router;