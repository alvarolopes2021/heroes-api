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
        let object = {
            name: "",
            group: "",
            comicBook: "",
            releaseYear: 0
        }

        object.name = req.body.name;
        object.group = req.body.group;
        object.comicBook = req.body.comicBook;
        object.releaseYear = req.body.releaseYear;
        
        const hero = new HeroModel(object);
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