const mongoose = require('./../daos/connection');

var Schema = mongoose.Schema;

const schema = new Schema({
    companyid: "string",
    companyname: "string",
    creationyear: "number",
    owner: "string",   
    profilepic: "string",
    backgroundimage: "string"
});

const Company = mongoose.model('Company', schema);

module.exports = Company;