const mongoose = require('./../daos/connection');

var Schema = mongoose.Schema;

const schema = new Schema({
    heroid: "string",
    name: "string",
    group: "string",
    weapon: "string",
    comicbook: "string",
    companyid: "string",
    releaseyear: "number",    
    profilepic: "string",
    backgroundimage: "string"
});

const Hero = mongoose.model('Heroes', schema);

module.exports = Hero;