const mongoose = require('mongoose');

const postJob = mongoose.model('PostedJob', {
    companyName: String,
    location: String,
    jobRole: String,
    salary: Number,
    eligibility: String,
    jobDesc: String,
    applyLink: String,
    lastDate: Date
  });

  module.exports = postJob;