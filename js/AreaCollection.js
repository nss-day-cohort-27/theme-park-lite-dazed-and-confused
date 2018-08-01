"use strict";

let db = require("./db-calls");
let areaList = require("./AreaList");


db.fetchAreas()
   .then((result) => {
       console.log(result)
    areaList(result);
});

module.exports = areaList;

