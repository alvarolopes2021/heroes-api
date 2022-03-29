const mongoose = require("mongoose");

const heroSchema = mongoose.Schema({
    name: "string",
    group: "string",
    comicBook: "string",
    releaseYear: "int"
});

const Heroes = mongoose.model('Heroes', heroSchema);

module.exports = Heroes