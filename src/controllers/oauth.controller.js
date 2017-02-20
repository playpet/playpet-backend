const passport = require('passport')

function signup(req, res) {
	res.json({
		status: 'ok'
	})
}

module.exports =  (app) => {
	app.get('/login',  (req, res) => {
    let auths = ['google', 'github'],
      links = []

    auths.forEach((auth) => {
      links.push(`<a href="/auth/${auth}" target="_blank">${auth}</a>`)
    })
		res.send(links.join('<br />'))
	})

	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}))

	app.get('/auth/github', passport.authenticate('github', {
		scope: ['user:email']
	}))

	app.get('/auth/google/callback', passport.authenticate('google', {
		failureRedirect: '/login'
	}), signup)

	app.get('/auth/github/callback', passport.authenticate('github', {
		failureRedirect: '/login'
	}), signup)

  app.get('/dologin', (req, res) => {
    req.login(function(err, user) {
      req.json(user)
    })
  })
}
