var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "retailshop"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    connection.query("CREATE DATABASE IF NOT EXISTS retailshop", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });

});


module.exports = connection;