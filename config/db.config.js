'user strict';

const mysql = require('mysql2');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : '*******',
  port: 3306,
  user     : '********',
  password : '********',
  database : '********'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;