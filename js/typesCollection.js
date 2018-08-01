
//This is where we are pulling our database to and invoking a function so no need to export.
"use strict";
console.log("hey girl")


let db = require('./db-calls.js');
let typeList = require('./typesList.js');


db.fetchTypes()
   .then((result) => {
       console.log(result);
    typeList(result);
    
});




