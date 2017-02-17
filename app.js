let express = require('express'),
	app = express(),
	autoloader = require('autoloader')(app),
	options = {
		debug: process.env.NODE_ENV && process.env.NODE_ENV !== 'production'
	},
  port = 3000

console.log('app config options: ', options)

app.listen(port, options)

console.log(`Server is listening on ${port}`)
