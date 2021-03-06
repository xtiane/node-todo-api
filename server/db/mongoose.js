let mongoose = require('mongoose');

// Tell mongoose to use built in Promise library
mongoose.Promise = global.Promise;
// Connect to the database
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};