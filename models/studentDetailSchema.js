const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    gender: String,
    location: String,
    dob: Date,
    summary: String,
    website: String,
    github: String,
    linkedIn:String,
    twitter: String,
    workExp: String,
    education: String,
    skills: String,
    cgpa: Number,
    Arrear: String,
    regNo: Number
  });
  
  const User = mongoose.model('StudentDetail', userSchema);

  module.exports = User;