const mongoose = require('mongoose'),
  autoloader = require('autoloader'),
  modelFiles = require('config/autoloader').modelFiles,
  bc = require('better-console')

bc.log('Starting connection')
mongoose.connect('mongodb://localhost:27017/playpet')

let db = mongoose.connection

db.on('error', function() {
  db.error(...arguments)
})

db.once('open', function () {
  bc.log('MongoDB connected at mongodb://localhost/playpet')
})

autoloader.autoload(modelFiles)

module.exports = db
