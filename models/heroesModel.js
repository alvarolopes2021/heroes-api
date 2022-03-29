const mongoose = require('./../daos/connection');

var Schema = mongoose.Schema;

const schema = new Schema({
    name: "string",
    group: "string",
    comicBook: "string",
    releaseYear: "number"
});

const Hero = mongoose.model('Heroes', schema);

module.exports = Hero;