var express = require('express');
var app = express();
const DataBase = require('./db.js');

var mysql = require('mysql')

var con = mysql.createPool({
    host: "localhost",  // local host / ip address of your machine
    user: "root",
    password: "root",
    database: "test"
});

// logger instance with Node & MYSQL
var log4js = require('log4js')
var logger = log4js.getLogger();
logger.level = 'debug';


app.get('/', function (req, res) {
    logger.debug("Got a GET request");

    DataBase.query("SELECT * FROM CUSTDEMO", function (err, result, fields) {
        if (err) throw err;
        res.json(result)
        logger.debug(result);
    });

})

app.post('/', function (req, res) {
    logger.debug("Got a POST request");
    var sql = "INSERT INTO CUSTDEMO (name, location) VALUES ('bachi', 'US')";
    DataBase.query(sql, function (err, result) {
        if (err) throw err;
        logger.debug("1 record inserted");
    });
    res.send('added')
})
app.put('/update', function(req, res){
    logger.debug("Got an UPDATE request");
    var sql = "UPDATE CUSTDEMO SET location='tokyo' WHERE name='Ketuta'";
    DataBase.query(sql, function(err){
        if (err) throw err;
        logger.debug("records updated")
    })
    res.json("updated");
})
app.delete('/', function(req, res){
    logger.debug("Got a DELETE request");
    var sql = "DELETE FROM CUSTDEMO WHERE name='bachi'";
    DataBase.query(sql, function(err, result){
        if (err) throw err;
        logger.debug("records deleted: " + result);
    })
    res.send();
})



var server = app.listen(3001, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

})