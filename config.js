module.exports = {
	User: require('./logic/user'),
	Email: require('./logic/email'),
    Sms: require('./logic/sms'),
	Logger: require('./logic/logger'),
	signup: require('./workflows/signup')
}