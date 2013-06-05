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



$(document).ready(function(){
    $("p").click(function(){
	$(this).hide();
    });
});

$(document).ready(function(){
    $("li").click(function(){
	$(this).hide();
    });
});


*/