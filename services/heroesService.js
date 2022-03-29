const mongoose = require('mongoose');

const heroes = require('./../models/heroesModel');

async function getHeroes(res){
    try{
        
    }
    catch(e){
        console.log(e);
    }
}


async function insertHero(req, res){
    try{
        let hero = new heroes({name: "Captain America", group: "Avengers", comicBook: "Marvel", releaseYear: "1942"});
        await hero.save();
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    getHeroes: getHeroes,
    insertHero: insertHero
}