const morgan = require('morgan')

module.exports = function(app) {
	app.use(morgan('[:date[clf]] :method :url (:response-time)'))
}
