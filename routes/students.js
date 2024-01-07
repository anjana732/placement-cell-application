var express = require('express');
var router = express.Router();
const Student = require('../models/studentSchema')
const Profile = require('../models/studentDetailSchema');
const Jobs = require("../models/jobSchema");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname,"scientist_job.json");

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
        res.redirect('/student/StudentDashboard');
      } else {
        console.log('Invalid username or password.');
        res.send('Invalid username or password.');
      }
    } catch (err) {
      console.error(err);
      res.send('Error during login.');
    }
  });

  router.get('/StudentDashboard', async (req, res) => {
  
    try {
      // Fetch data from MongoDB
      const jobs = await Jobs.find();
      res.render('StudentDashboard', { jobs });
      
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/StudentProfile', (req, res) => {
    res.render('StudentProfile');
  });
  
  router.get('/ResumeFrontPage', async(req,res)=>{
    res.render('ResumeFrontPage');
  })
  
  router.get('/Resume', async(req,res)=>{
    res.render('Resume');
  })

  router.get('/jobs', (req, res) => {
    const jobListings = require('./scientist_job.json');
    res.render('jobs', { jobListings });
});

router.post('/StudentDetail', async (req, res) => {
  try {
    const userData = req.body; 
    const newUser = new User(userData);

    const savedUser = await newUser.save();

    res.status(201).json(savedUser); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/StudentDetails', async (req, res) => {
  try {
  
    const users = await Student.find();
    res.status(200).send(users);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/StudentUpdate', async (req, res) => {
  try {
    let regNo = req.body.regNo;
    console.log("Reg No is ", regNo);

    // Find the user by registration number
    let existingUser = await Profile.findOne({ regNo });

    if (existingUser) {
      // Update existing user
      existingUser.set(req.body); // Use set to update fields

      // Update other fields as needed
      await existingUser.save();

      res.status(200).json({ message: 'User updated successfully.' });
    } else {
      // Create a new user
      const newUser = new Profile(req.body);
      // Set other fields as needed
      await newUser.save();

      res.status(201).json({ message: 'New user created successfully.' });
    }
  } catch (error) {
    console.error('Error updating or creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;