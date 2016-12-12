"use strict"

var entity = require('./table00');

console.log("createTable for: ");

entity.forEach(function(element, index) {
    console.log('CREATE TABLE', entity[index].name, '(');

}, this); {


}


