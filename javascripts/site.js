$(function() {


	//Adds submenu based on active class - API Submenu
	$("li.active").append("<ul class='submenu'></ul>");

	//Look for h3 tags and create anchors
	$("h3").each(function(idx, obj) {

		var that = $(this);
		$("li.active ul").append("<li><a href='#" + that.attr('id') + "'>" + that.text() + "</a></li>");

		console.log(idx, obj);
	});

});