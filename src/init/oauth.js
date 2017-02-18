const secrets = require('secrets'),
	passport = require('passport'),
	GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
	GitHubStrategy = require('passport-github2')

function authURL(name) {
	return `http://localhost:3000/auth/${name}/callback`
}

passport.use(new GoogleStrategy({
	clientID: secrets.google_oauth_key,
	clientSecret: secrets.google_oauth_secret,
	callbackURL: authURL('google'),
}, function (accessToken, refreshToken, profile, done) {
	console.log(profile)
	done(null, profile)
}))

passport.use(new GitHubStrategy({
	clientID: secrets.github_oauth_key,
	clientSecret: secrets.github_oauth_secret,
	callbackURL: authURL('github'),
}, function (accessToken, refreshToken, profile, done) {
	console.log(profile)
	done(null, profile)
}))
