const pe = require('pretty-error').start()

module.exports = function (app) {
	app.use(function (err, req, res, next) {
    // console.error(err)
		bc.error(err.stack)
		res.status(500).send('Something broke!')
	})
}
