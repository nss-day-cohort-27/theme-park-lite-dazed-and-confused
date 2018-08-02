
let createArea = require("./Area.js");


let outputEl = document.querySelector("#areas");


function listArea(areaData){
    areaData.forEach(area => {
        let areaComponent = createArea(area.name, area.description, area.colorTheme);
        writeAreaToDOM(areaComponent);
    });
}


function writeAreaToDOM(area){
    outputEl.innerHTML += area;
}


module.exports = listArea;
