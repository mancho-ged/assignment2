const mysql = require('mysql');
const database = require('./dbConfig.js');
const db = new database();


var con = mysql.createPool({
    host: db.getHostName(),
    user: db.getUserName(),
    password: db.getPassword(),
    database: db.getDataBaseName()
})


//return con;


module.exports = con;