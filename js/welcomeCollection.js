//This is where we are pulling our database to and invoking a function so no need to export.
"use strict";
console.log("hey friend")


let db = require('./db-calls.js');
let welcomeList = require('./welcomeList.js');


db.fetchParkInfo()
   .then((result) => {
       console.log(result);
    welcomeList(result);
    
});

module.exports = welcomeList;
