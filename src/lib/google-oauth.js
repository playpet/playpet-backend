let secrets = require('secrets'),
	passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

passport.use(new GoogleStrategy({
	clientID: secrets.google_oauth_key,
	clientSecret: secrets.google_oauth_key,
	callbackURL: 'http://localhost:3000/auth/google/callback'
}, function (accessToken, refreshToken, profile, done) {
  console.log({profile})
  done(null, profile)
}))

module.exports = function () {}
