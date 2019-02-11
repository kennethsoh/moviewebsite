//This function is to display all the comments of that movie
//whenever the user click on the "comment" button
function showMovieComments(element) {
    document.getElementById("emptyComment").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("review").textContent = "Review for " + movie_array[item].title;
    document.getElementById("commentBody").textContent = "";

    for (var i = 0; i < comment_array.length; i++) {
        if (comment_array[i].movie.trim() === movie_array[item].title.trim()) {
            document.getElementById("emptyComment").innerHTML = "";
            selectedMovieId = movie_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + comment_array[i].review + "</p>               \
                                    <small>by " + comment_array[i].username + " @ " + comment_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < comment_array[i].rating; j++) {
                console.log(i);
                star += "<img src='images/popcorn.png' style='width:50px' />";
            }
            star += "<img src='images/delete.png' class='edit' data-dismiss='modal' item='" + i + "' onClick='deleteComment(this)' />";
            star += "<img src='images/edit.png' class='edit’ data-toggle='modal' data-target='#editCommentModal' data-dismiss='modal' item=‘"
		 + i + "' onClick='editComment(this)' />";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}
