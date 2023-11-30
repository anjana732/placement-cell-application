const mongoose = require('mongoose');

const postJobSchema = new mongoose.Schema({
  companyName: String,
    location: String,
    jobRole: String,
    salary: Number,
    eligibility: String,
    jobDesc: String,
    applyLink: String,
    lastDate: Date
  });

//const admin = mongoose.model('Admin', AdminSchema);
const postJob = mongoose.model('jobs', postJobSchema);

module.exports = postJob;