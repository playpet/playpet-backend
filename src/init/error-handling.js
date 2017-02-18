const pe = require('pretty-error').start(),
	bc = require('better-console')

global.bc = bc

module.exports = function (app) {
	app.use(function (err, req, res, next) {
    // console.error(err)
		console.error(err.stack)
		res.status(500).send('Something broke!')
	})
}
