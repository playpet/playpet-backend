const express = require('express'),
	app = express(),
	autoloader = require('autoloader')(app),
	options = {
		debug: process.env.NODE_ENV && process.env.NODE_ENV !== 'production'
	},
  port = 3000

bc.log('app config options: ', options)

app.listen(port, options)

bc.log(`Server is listening on ${port}`)
