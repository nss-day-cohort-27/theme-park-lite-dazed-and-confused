"use strict";

let createtypes = require("./welcome.js");
let database = require("./welcomeCollection.js");

//1. get contacts from LS (which is in our other module)
//2. iterate over them
//2.5 where should we put it?
//3. render them to the DOM

let outputEl = document.querySelector("#welcome");


function listWelcome(welcomeData){
    welcomeData.forEach(welcome => {
        let typeComponent = createtypes(welcome.name, welcome.description, welcome.location, welcome.operating_hours);
        writeContactsToDOM(typeComponent);
    });
}

//this is actually writing it to the DOM. and keeps adding a new component each time it goes through the for-loop up top.  
function writeContactsToDOM(welcome){
    outputEl.innerHTML += welcome;
}


module.exports = listWelcome;
