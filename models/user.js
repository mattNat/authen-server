const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define our model
// mongodb does not enforce case
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// create the model class - rep all users
const ModelClass = mongoose.model('user', userSchema);

// export the model
module.exports = ModelClass;