"use strict";

function createAttraction(name, description){
    return `
    <div class="card" style="width: 18rem;">
    <div class="container card-body attractionBoxes">
      <h2 class="card-title">${name}</h2>
      <p class="card-text">${description}</p> 
    </div>
  </div>`

}

module.exports = createAttraction;




