"use strict";

let db = require('./db-calls.js');
let attractionList = require("./attractionList.js");


db.fetchAttractions()
    .then((result) => {
        console.log(result);
        attractionList(result);
    });

module.exports = attractionList;

