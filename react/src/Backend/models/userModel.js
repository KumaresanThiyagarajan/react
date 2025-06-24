const mongoose = require('mongoose');
const userData = new mongoose.Schema({
    user:String,
    password:String 
})
module.exports = mongoose.model('users',userData)