const { v4: uuidv4 } = require('uuid');

const CompanyModel = require('./../models/companyModel');

async function getCompanies(res){
    try{
        let companies = await CompanyModel.find();
        res.status(200).send(JSON.stringify(companies));
        return companies;
    }
    catch(e){
        console.log(e);
    }
}

async function getCompanyDetail(req, res){
    try{
        let company = await CompanyModel.find({companyid: req.query.COMPANY});
        res.status(200).send(JSON.stringify(company[0]));
        return company;
    }
    catch(e){
        console.log(e);
    }
}

async function addCompany(req, res){
    try{
        let object = {
            companyid: uuidv4(),
            companyname: "",
            creationyear: "",
            owner: "",
            profilepic: "",
            backgroundimage: ""
        }

        object.companyname = req.body.companyname;
        object.creationyear = req.body.creationyear;
        object.owner = req.body.owner;
        object.profilepic = req.body.profilepic;
        object.backgroundimage = req.body.backgroundimage;
        
        const company = new CompanyModel(object);
        await company.save();
        res.status(200).send(company);
    }
    catch(e){
        console.log(e);
        res.status(400).send("error");
    }
}


async function updateCompanyService(req, res){
    try{
        let object = {
            companyid: "",
            companyname: "",
            creationyear: "",
            owner: "",
            profilepic: "",
            backgroundimage: ""
        }
        object.companyid = req.body.companyid;
        object.companyname = req.body.companyname;
        object.creationyear = req.body.creationyear;
        object.owner = req.body.owner;
        object.profilepic = req.body.profilepic;
        object.backgroundimage = req.body.backgroundimage;

        let companies = await CompanyModel.updateOne({companyid: object.companyid}, {
            companyname: object.companyname,
            creationyear: object.creationyear,
            owner: object.owner,
            profilepic: object.profilepic,
            backgroundimage: object.backgroundimage
        });

        res.status(200).send(object);

        return;
    }
    catch(e){
        console.log(e);
    }
}

async function deleteCompanyService(req, res){
    try{
        let object = {
            companyid: "",
            companyname: "",
            creationyear: "",
            owner: "",
            profilepic: "",
            backgroundimage: ""
        }
        object.companyid = req.body.companyid;
        object.companyname = req.body.companyname;
        object.creationyear = req.body.creationyear;
        object.owner = req.body.owner;
        object.profilepic = req.body.profilepic;
        object.backgroundimage = req.body.backgroundimage;

        let company = await CompanyModel.deleteOne({companyid: object.companyid});

        res.status(200).send();

        return;
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    getCompanies: getCompanies,
    addCompany: addCompany,
    deleteCompanyService: deleteCompanyService,
    updateCompanyService: updateCompanyService,
    getCompanyDetail: getCompanyDetail
}