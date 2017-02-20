const //pe = require('pretty-error').start(),
  bc = require('better-console')

module.exports = (app) => {
	app.use((err, req, res, next) => {
    // console.error(err)
		bc.error(err.stack)
		res.status(500).send('Something broke!')
	})
}
