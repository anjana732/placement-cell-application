const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    regNo: Number,
    email: String,
    password: String
  });
  
  const User = mongoose.model('Student', userSchema);

  module.exports = User;