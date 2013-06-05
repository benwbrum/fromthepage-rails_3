// That took forever
alert("hello")
/* 
// Append the function to the "document ready" chain
jQuery(function($) {
  // when the #search field changes
    $("#search").change(function() {
    // make a POST call and replace the content
	$.post(<%= live_search_path %>, function(data) {
	    $("#results").html(data);
	});
    });
})
/*
sert a notice between the last comment and the comment form *
$("#comment-notice").html('<div class="flash notice"><%= escape_javascript(flash.delete(:notice)) %></div>');
 
/* Replace the count of comments *
$("#comments_count").html("<%= pluralize(Comment.count, 'Comment') %>");
 
/* Add the new comment to the bottom of the comments list *
$("#comments").append("<%= escape_javascript(render(@comment)) %>");
 
/* Highlight the new comment *
$("#comment_<%= @comment.id %>").effect("highlight", {}, 3000);
 
/* Reset the comment form *
$("#new_comment")[0].reset();

jQuery(function($) {
$(document).ready(function(){
    $("p").click(function(){
	$(this).hide();
    });
});
})

$(document).ready(function(){
    $("li").click(function(){
	$(this).hide();
    });
});

*/