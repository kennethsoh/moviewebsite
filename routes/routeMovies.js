"use strict";

const moviesControler = require ('../controllers/movieController');

function routeMovies(app)
{
    //When the URL is http://localhost:8080/movies, and when HTTP
    //GET method is requested from the client,the get() function 
    //will be used to call the getAllMovies() function in the controller.
    //The HTTP GET method is called in the getMoiveData() function in 
    //movies.j.s THe codes that called it is (open the movies.js file to see):
    //      var request = new XMLHttpRequest();
    //      request.open('GET', movie_url, true);
    app.route('/movies')
        .get(moviesControler.getAllMovies);
}
module.exports = { routeMovies };