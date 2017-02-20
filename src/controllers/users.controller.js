const User = require('src/models/user')

module.exports = (app) => {
	app.get('/users', (req, res) => {
		User.find((err, users) => {
			res.json(users.map(user => {
				return {
					name: user.name,
					email: user.email,
					id: user._id,
					profiles: Object.keys(user.profiles).filter((k) => user.profiles[k] != null)
				}
			}))
		})
	})
}
