const express = require('express'),
	app = express(),
	autoloader = require('autoloader'),
	options = {
		debug: process.env.NODE_ENV && process.env.NODE_ENV !== 'production'
	},
  port = 3000,
  bc = require('better-console')

autoloader.autoload(app, [
  './src/lib/middleware*.js',
  './src/controllers/*.js',
  './src/lib/oauth.js',
])

bc.log('app config options: ', options)

app.listen(port, options)

bc.log(`Server is listening on ${port}`)
