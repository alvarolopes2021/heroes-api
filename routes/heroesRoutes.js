const express = require('express');
const router = express.Router();

const heroesService = require('./../services/heroesService');


router.get('/all-heroes', async (req, res) => {
    try{
        heroesService.getHeroes(res);
    }
    catch(e){
        console.log(e);
    }
});

router.get('/hero-detail', async (req, res) => {
    try{
        heroesService.getHeroDetail(req, res);
    }
    catch(e){
        console.log(e);
    }
});

router.post('/insert-hero', async (req, res) => {
    try{
        heroesService.insertHero(req, res);
    }
    catch(e){
        console.log(e);
    }
});

router.put('/update-hero', async (req, res) => {
    try{
        heroesService.updateHeroService(req, res);
    }
    catch(e){
        console.log(e);
    }
});

router.post('/delete-hero', async (req, res) => {
    try{
        heroesService.deleteHeroService(req, res);
    }
    catch(e){
        console.log(e);
    }
});

module.exports = app => app.use('/heroes', router);
