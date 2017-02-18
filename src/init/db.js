const mongoose = require('mongoose')

bc.log('Starting connection')
mongoose.connect('mongodb://localhost/playpet')

let db = mongoose.connection
db.on('connect', function () {
  bc.log('MongoDB connected at mongodb://localhost/playpet')
})

global.db = db
