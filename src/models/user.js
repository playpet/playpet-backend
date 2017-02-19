const mongoose = require('mongoose'),
  Schema = mongoose.Schema

let User = new Schema({
  name: String,
  email: String,
  profileImage: String,
  profiles: Schema.Types.Mixed,
})

module.exports = mongoose.model('User', User)
