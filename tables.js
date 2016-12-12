"use strict";
var _ = require('underscore');

var entity = [];

var nullability = {};
nullability[true] = 'NULL';
nullability[false] = 'NOT NULL';

var table00 = {
  name: 'table00',
  data: {
    Key: {
      type: "int",
      field: 1,
      is_primary_key: true,
      sbType: 'VARCHAR(42)',
      nullability: nullability[false]
    },
    JobNumber: {
      type: "string",
      field: 2,
      start: 1,
      length: 10,
      sbType: 'VARCHAR(31)',
      default: 'DEFAULT NULL'
    },
    StepNumber: {
      type: "int",
      field: 2,
      start: 11,
      length: 3,
      sbType: 'INT'
    },
    Description1: {
      type: "string",
      field: 4,
      sbType: 'VARCHAR(117)'
    },
    Description2: {
      type: 'varchar(64)',
      field: 3,
      sbType: 'VARCHAR(111)'
    }
  }
}

var table01 = {
  name: 'table01',
  data: {
    key: {
      type: "int",
      field: 1,
      is_primary_key: true
    },
    jobNumber: {
      type: "string",
      field: 2,
      start: 1,
      length: 10
    },
    description1: {
      type: "varchar(50)",
      field: 4
    },
    description2: {
      type: 'varchar(64)',
      field: 3
    }
  }
}


entity.push(table00);
entity.push(table01);

// for(var e in entity){
//   var temp = _.sortBy(entity[e], 'field');
//   entity[e] = temp;
// }

// console.log('entity', entity['table00']);
// console.log('entity', entity['table01']);
console.log(entity);
module.exports = entity;


