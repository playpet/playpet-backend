const secrets = require('secrets'),
	passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	GitHubStrategy = require('passport-github2'),
	User = require('src/models/user')

function authURL(name) {
	return `http://localhost:3000/auth/${name}/callback`
}

passport.use(new GoogleStrategy({
	clientID: secrets.google_oauth_key,
	clientSecret: secrets.google_oauth_secret,
	callbackURL: authURL('google'),
}, function (accessToken, refreshToken, profile, done) {
	User.findOne({
		'profiles.google.id': profile.id
	}, (err, profile) => {
		if (err) {
			let user = new User({
				name: profile.displayName,
				// TODO: make fallbacks for these, check their specs
				email: profile.emails.find(e => e.type == 'account').value,
				profileImage: profile.photos[0].value,
				profiles: {
					google: {
						data: profile,
						accessToken,
						refreshToken,
					}
				},
			})
			user.save((err) => {
				if (err) {
					return done(err)
				}
				done(null, user)
			})
		} else {
			console.error(err)
			done(err)
		}
	})
}))

passport.use(new GitHubStrategy({
	clientID: secrets.github_oauth_key,
	clientSecret: secrets.github_oauth_secret,
	callbackURL: authURL('github'),
}, function (accessToken, refreshToken, profile, done) {
	User.findOne({
		'profiles.github.id': profile.id
	}, (err, profile) => {
		if (err) {
			let user = new User({
				name: profile.displayName,
				// TODO: make fallbacks for these, check their specs
				email: profile.emails[0].value,
				profileImage: profile._json.avatar_url,
				profiles: {
					github: {
						data: profile,
						accessToken,
						refreshToken,
					}
				},
			})
			user.save((err) => {
				if (err) {
					return done(err)
				}
				done(null, user)
			})
		} else {
			console.error(err)
			done(err)
		}
	})
}))

passport.serializeUser(function (user, done) {
	done(null, user)
})

passport.deserializeUser(function (user, done) {
	done(null, user)
})

module.exports = function (app) {
	app.use(passport.initialize())
  return passport
}
