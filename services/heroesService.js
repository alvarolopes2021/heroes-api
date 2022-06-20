const { v4: uuidv4 } = require('uuid');

const HeroModel = require('./../models/heroesModel');

async function getHeroes(res){
    try{
        let heroes = await HeroModel.find();
        res.status(200).send(JSON.stringify(heroes));
        return heroes;
    }
    catch(e){
        console.log(e);
    }
}

async function insertHero(req, res){
    try{
        let object = {
            heroid: uuidv4(),
            name: "",
            group: "",
            weapon: "",
            profilepic: "",
            backgroundimage: ""
        }

        object.name = req.body.name;
        object.group = req.body.group;
        object.weapon = req.body.weapon;
        object.profilepic = req.body.profilepic;
        object.backgroundimage = req.body.backgroundimage;
        
        const hero = new HeroModel(object);
        await hero.save();
        res.status(200).send(hero);
    }
    catch(e){
        console.log(e);
        res.status(400).send("error");
    }
}


async function updateHeroService(req, res){
    try{
        let object = {
            heroid: "",
            name: "",
            group: "",
            weapon: "",
            profilepic: "",
            backgroundimage: ""
        }
        object.heroid = req.body.heroid;
        object.name = req.body.name;
        object.group = req.body.group;
        object.weapon = req.body.weapon;
        object.profilepic = req.body.profilepic;
        object.backgroundimage = req.body.backgroundimage;

        let heroes = await HeroModel.updateOne({heroid: object.heroid}, {
            name: object.name,
            group: object.group,
            weapon: object.weapon
        });

        res.status(200).send();

        return;
    }
    catch(e){
        console.log(e);
    }
}

async function deleteHeroService(req, res){
    try{
        let object = {
            heroid: "",
            name: "",
            group: "",
            weapon: "",
            profilepic: "",
            backgroundimage: ""
        }
        object.heroid = req.body.heroid;
        object.name = req.body.name;
        object.group = req.body.group;
        object.weapon = req.body.weapon;
        object.profilepic = req.body.profilepic;
        object.backgroundimage = req.body.backgroundimage;

        let heroes = await HeroModel.deleteOne({heroid: object.heroid});

        res.status(200).send();

        return;
    }
    catch(e){
        console.log(e);
    }
}

function findsHeroReleaseAge(releaseYear){
    try{
        return (new Date().getFullYear() - parseInt(releaseYear));
    }
    catch(e){
        console.log(e);
        res.status(400).send("error");
    }
}

module.exports = {
    getHeroes: getHeroes,
    insertHero: insertHero,
    findsHeroReleaseAge: findsHeroReleaseAge,
    deleteHeroService: deleteHeroService,
    updateHeroService: updateHeroService
}