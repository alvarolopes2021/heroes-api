const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/heroes');
mongoose.Promise = global.Promise;

module.exports = mongoose;