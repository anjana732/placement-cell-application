const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: String,
    Id: Number,
    email: String,
    password: String
  });
  
  const company = mongoose.model('Comapny', CompanySchema);

  module.exports = company;