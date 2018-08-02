"use strict";

let db = require("./db-calls");
let writeToDom = require("./AreaList");

let areaList = {}
db.fetchAreas()
   .then((result) => {
       areaList= result;
    writeToDom(areaList);
});

module.exports = areaList;

