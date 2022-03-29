const mongoose = require('mongoose');

async function onStartUp(){
    try{
        
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    onStartUp: onStartUp
}