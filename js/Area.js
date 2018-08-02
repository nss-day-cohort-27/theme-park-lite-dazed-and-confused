"use strict";

function createArea(name, description, colorTheme){
    return `<div class="card area-boxes2" style="width: 18rem;">
    <div class="card-body2" style="background-color: #${colorTheme};">
      <h4 class="card-title2">${name}</h4>
      <p class="card-text2">${description}</p> 
    </div>
  </div>`
}


module.exports = createArea;


// this page houses a function that creates the area using two arguments, in a form that cna be printed to the DOM