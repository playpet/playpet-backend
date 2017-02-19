const morgan = require('morgan'),
  bc = require('better-console')

global.bc = bc

module.exports = function(app) {
	app.use(morgan('[:date[clf]] :method :url (:response-time)'))
}
