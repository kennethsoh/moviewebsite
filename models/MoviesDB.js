"use strict";

//THis is to get the connectiont o the database
var db = require('../db-connection'); //reference of db-connection.js

class MoviesDB
{
    getAllMovies(callback)
    {
        var sql = "SELECT * FROM movie_review.movie";

        //THis is to call the built-in query function in the database connection
        db.query(sql, callback);
    }
}

module.exports = MoviesDB;