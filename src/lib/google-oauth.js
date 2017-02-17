let secrets = require('secrets'),
	passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

// TODO: remove
const User = {
	findOrCreate: function (profile) {
		console.log(profile);
	}
}

module.exports = function (app) {
  console.log('google strategy init');
	passport.use(new GoogleStrategy({
		clientID: secrets.google_oauth_key,
		clientSecret: secrets.google_oauth_key,
		callbackURL: 'http://localhost:3000/auth/google/callback'
	}, function (accessToken, refreshToken, profile, done) {
		console.log('google strategy callback');
		User.findOrCreate(profile, function (err, user) {
			return done(err, user);
		})
	}))
}
