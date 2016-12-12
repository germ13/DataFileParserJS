"use strict";

var sql = require('mssql');
var table00 = require('./table00');
console.log(table00);

var dbConfig = {
  server:  "localhost\\MSSQLSERVER",
  database: "TestEntity",
  user: "noder",
  password: "noderpwd",
  port: 1433
};

function getStuff(){
  var conn = new sql.Connection(dbConfig);
  var req = new sql.Request(conn);

  conn.connect(function(err){
    if(err){
      console.log('Error');
      return;
    }
    req.query("select * from mtab1", function(err, recordset){
      if(err){
        console.log(err + "\nnew error");
      }
      else{
        console.log(recordset);
      }
      conn.close();
    });
  });
}
// sql.connect("mssql://noder:noderpwd@MSSQLSERVER/TestEntity").then(function() {
//   new sql.Request()
//     .query('select * from mtab1')
//     .then(function(recordset) {
//       console.log("Got something for you...");
//       console.dir(recordset);
//     })
//     .catch(function(err) {
//       console.log('error');
//     })
// });

getStuff();
console.log('shoulda seen something');