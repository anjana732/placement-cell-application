const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    regNo:String,
    gender: String,
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
  });
  
  const Profile = mongoose.model('StudentDetail', userSchema);

  module.exports = Profile;