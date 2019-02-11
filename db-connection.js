var mysql= require('mysql');
var connection = mysql.createPool({
    host:'localhost',
    port:'3304', //change port number if needed. Please check your SQL Workbench
    user:'root',
    password:'',//there should not be any space between the inverted commas as it is also recognise as a code
    database:"movie_review"
});
module.exports = connection;