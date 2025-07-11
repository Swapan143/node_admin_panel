const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: 
  {
    type:String,
    required:true
  },
  email: 
  {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone:
  {
    type:String,
    required:true
  },
  password: 
  {
    type:String,
    required:true
  },
  image: 
  {
    type:String,
    required:true
  },
  token: 
  {
    type:String,
    required:false
  },
  createdAt: 
  {
    type:Date,
    default:Date.now
  }
})

module.exports = mongoose.model('User', userSchema)