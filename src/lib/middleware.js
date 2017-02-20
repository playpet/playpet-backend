const passport = require('passport'),
  morgan = require('morgan'),
  bc = require('better-console')

module.exports = function(app) {
  bc.log('middleware')
  app.use(morgan('[:date[clf]] :method :url (:response-time)'))
	app.use(passport.initialize())
}
