$(function() {
    var photos = 9,
    	graphics = 4,
    	photoHTML = ""
        videosHTML = "",
        graphicsHTML = "",
        videos = ['87533088', '67005081', '76580368', '87533083'];

    for (var i = 0; i < videos.length; i++) {
        videosHTML += "<iframe src='//player.vimeo.com/video/"+videos[i]+"' width='500' height='281' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
    }
    $(".videos").html(videosHTML);

    for (var i = 1; i <= photos; i++) {
        photoHTML += "<li class='item'><a href='images/photography/" + i + ".jpg' style='background-image:url(images/photography/" + i + ".jpg)' rel='photos'></a></li>";
    }
    $(".photos").html(photoHTML);

        for (var i = 1; i <= graphics; i++) {
        graphicsHTML += "<li class='item'><a href='images/graphics/" + i + ".jpg' style='background-image:url(images/graphics/" + i + ".jpg)' rel='graphics'></a></li>";
    }
    $(".graphics").html(graphicsHTML);

	$('.item a').fancybox({
		padding:0,
	});

});