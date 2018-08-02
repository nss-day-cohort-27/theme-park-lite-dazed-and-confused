"use strict";

function createArea(name, description, colorTheme){
    return `<div class="card area-boxes" style="width: 18rem;">
    <div class="card-body" style="background-color: #${colorTheme};">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${description}</p> 
    </div>
  </div>`
}


module.exports = createArea;


// this page houses a function that creates the area using two arguments, in a form that cna be printed to the DOM