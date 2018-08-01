"use strict";

let createtypes = require("./types.js");
let database = require("./typesCollection.js");

//1. get contacts from LS (which is in our other module)
//2. iterate over them
//2.5 where should we put it?
//3. render them to the DOM

let outputEl = document.querySelector("#attractionType");


function listTypes(typeData){
    typeData.forEach(type => {
        let typeComponent = createtypes(type.name.charAt(0).toUpperCase()+type.name.slice(1));
        writeContactsToDOM(typeComponent);
    });
}

//this is actually writing it to the DOM. and keeps adding a new component each time it goes through the for-loop up top.  
function writeContactsToDOM(attractionType){
    outputEl.innerHTML += attractionType;
}


module.exports = listTypes;
