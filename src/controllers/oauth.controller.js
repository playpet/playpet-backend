let passport = require('passport')

module.exports = function (app) {
	app.get('/login', function (req, res) {
		res.send('<a href="/auth/google">/auth/google</a>')
	})

	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}))

	app.get('/auth/google/callback', passport.authenticate('google', {
		failureRedirect: '/login'
	}), function (req, res) {
		res.json({
			status: 'ok'
		})
	})
}
