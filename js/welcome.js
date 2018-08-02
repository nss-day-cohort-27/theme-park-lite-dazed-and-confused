"use strict"

//this is how you want it to look like on the Dom. 
function createWelcome(name, location, description, operating_hours){
    let welcomeStatement = `<h1>${name}</h1><br><h3>${description}</h3><br><h4>${location}</h4>`;
    for (const value of operating_hours) {
        console.log(value.opening);
        let hours = `<h3>Operating Hours: ${value.opening}a.m. - ${value.closing} p.m.</h3>`
        welcomeStatement += hours;
    }
    return welcomeStatement;
}

module.exports = createWelcome;