global.__base = __dirname;

let express = require('express'),
    app = express(),
    autoloader = require('autoloader')(app)

console.log(process.env.NODE_ENV);

app.listen(3000, {debug: process.env.NODE_ENV && process.env.NODE_ENV !== 'production' || false})

console.log('Server is listening...')
