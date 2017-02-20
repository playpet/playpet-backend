const secrets = require('secrets'),
	passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	GitHubStrategy = require('passport-github2'),
	User = require('src/models/user'),
	bc = require('better-console'),
	mongoose = require('mongoose'),
	db = require('src/lib/db')

function authURL(name) {
	return `http://localhost:3000/auth/${name}/callback`
}

passport.use(new GoogleStrategy({
	clientID: secrets.google_oauth_key,
	clientSecret: secrets.google_oauth_secret,
	callbackURL: authURL('google'),
}, (accessToken, refreshToken, profile, done) => {
	bc.log('authenticated, saving')

	User.findOne({
		'profiles.google.data.id': profile.id
	}, (err, user) => {
		if (err) {
			bc.error(err)
			return done(err)
		}

		if (user) {
			bc.log('user found,', user)
		} else {
			user = new User({
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
				return done(null, user)
			})
		}
	})
}))

passport.use(new GitHubStrategy({
	clientID: secrets.github_oauth_key,
	clientSecret: secrets.github_oauth_secret,
	callbackURL: authURL('github'),
}, (accessToken, refreshToken, profile, done) => {
	User.findOne({
			'profiles.google.data.id': profile.id
		}, (err, user) =>
		if (err) {
			bc.error(err)
			return done(err)
		}

		if (user) {
			bc.log('user found,', user)
		} else {
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
				return done(null, user)
			})
		}
	}
}))

passport.serializeUser(function (user, done) {
	return done(null, user)
})

passport.deserializeUser(function (user, done) {
	return done(null, user)
})
