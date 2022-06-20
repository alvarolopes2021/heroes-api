const express = require('express');
const router = express.Router();

const companiesService = require('./../services/companiesService');


router.get('/all-companies', async (req, res) => {
    try{
        companiesService.getCompanies(res);
    }
    catch(e){
        console.log(e);
    }
});

router.get('/company-detail', async (req, res) => {
    try{
        companiesService.getCompanyDetail(req, res);
    }
    catch(e){
        console.log(e);
    }
});

router.post('/add-company', async (req, res) => {
    try{
        companiesService.addCompany(req, res);
    }
    catch(e){
        console.log(e);
    }
});

router.put('/update-company', async (req, res) => {
    try{
        companiesService.updateCompanyService(req, res);
    }
    catch(e){
        console.log(e);
    }
});

router.post('/delete-company', async (req, res) => {
    try{
        companiesService.deleteCompanyService(req, res);
    }
    catch(e){
        console.log(e);
    }
});

module.exports = app => app.use('/companies', router);
