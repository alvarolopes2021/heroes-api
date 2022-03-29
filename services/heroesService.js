const HeroModel = require('./../models/heroesModel');

async function getHeroes(res){
    try{
        let heroes = await HeroModel.find();
        res.status(200).send(JSON.stringify(heroes));
    }
    catch(e){
        console.log(e);
    }
}

async function insertHero(req, res){
    try{
        const hero = new HeroModel({name: "Spider Man", group: "Avengers", comicBook: "Marvel", releaseYear: "1956"});
        await hero.save();
        res.status(201).send("OK");
    }
    catch(e){
        console.log(e);
        res.status(400).send("error");
    }
}

module.exports = {
    getHeroes: getHeroes,
    insertHero: insertHero
}