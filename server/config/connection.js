const mongoose = require ('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/todos_db'
);

module.exports = mongoose.connection;