let createAttraction = require("./attraction.js");
let database = require("./attractionCollection.js");


let outputEl = document.querySelector("#pleaseWork");


function listAttraction(attractionData){
    attractionData.forEach(attraction => {
        let attractionComponent = createAttraction(attraction.name, attraction.description);
        writeAttractionToDOM(attractionComponent);
    });
}


function writeAttractionToDOM(attraction){
    outputEl.innerHTML += attraction;
}


module.exports = listAttraction;