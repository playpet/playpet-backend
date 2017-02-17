let secrets = require('secrets'),
	passport = require('passport'),
	GitHubStrategy = require('passport-github2')

passport.use(new GitHubStrategy({
	clientID: secrets.github_oauth_key,
	clientSecret: secrets.github_oauth_key,
	callbackURL: 'http://localhost:3000/auth/github/callback'
}, function (accessToken, refreshToken, profile, done) {
  console.log({profile})
  done(null, profile)
}))

module.exports = function () {}
