"use strict";

var db = require('../db-connection');
class CommentsDB{
    getAllComments(callback){
    var sql = "SELECT * from movie_review.comment";
    db.query(sql, callback);
    }

    addComment(comment, callback)
    {
        var sql = "INSERT INTO comment (movieId, movie, review, username, rating, datePosted) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [comment.getMovieId(), comment.getMovie().trim(), comment.getReview(), comment.getUsername(), comment.getRating(), comment.getDatePosted()], callback);
    }

    updateComment(comment, callback)
    {
        var sql = "UPDATE comment SET review = ?, username = ?, rating = ?, datePosted = ? WHERE _id = ?";

        return db.query(sql, [comment.getReview(), comment.getUsername(), comment.getRating(), comment.getDatePosted(), comment.getId()], callback);
    } 

    deleteComment(commentID, callback){
        var sql = "DELETE from comment WHERE _id = ?";
        return db.query(sql, [commentID], callback);
    }

}
module.exports = CommentsDB;


