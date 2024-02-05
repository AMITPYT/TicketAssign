const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    id:{
        type: string,
        unique: true    
    },
    name:{
        type: String,
        required: true
    },

  });

  const User = mongoose.model('User',UserSchema);
  module.exports = User