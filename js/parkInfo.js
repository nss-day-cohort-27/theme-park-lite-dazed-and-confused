let db = require('./db-calls');

let parkInfo = {};

db.fetchParkInfo()
   .then((result) => {
   parkInfo = result;
});

module.exports = parkInfo;
