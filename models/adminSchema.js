const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    staffId: Number,
    email: String,
    password: String
  });
  
  const admin = mongoose.model('Admin', AdminSchema);

  module.exports = admin;