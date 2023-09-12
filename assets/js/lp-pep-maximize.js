// fixed header with calc of header

    var theWindow = $(window),
        body = $("body"),
        header = $("header"),
        headerBottom = header.outerHeight();

    if(window.location.hash && theWindow.width() > 1025) {

		body.addClass("fix-nav").css('padding-top', headerBottom);;
	}


    theWindow.on("scroll", function () {
            if (theWindow.scrollTop() >= headerBottom) {

                body.addClass("fix-nav").css('padding-top', headerBottom);

            } else if (theWindow.scrollTop() <= headerBottom) {

                body.removeClass("fix-nav").css('padding-top','0');

            }
    });



// Copyright Year Auto Update
date = document.getElementById("copyDate");
date.innerHTML = new Date().getFullYear();

// Countdown Timer
var countDownDate = new Date("January 1, 2024 0:0:0").getTime();
	var x = setInterval(function () {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		document.getElementById("count").innerHTML =
			"<div><span>" + days + "<br><h4>Days</h4> </span>" + " </div>" +
			"<div><span>" + hours + "<br><h4>Hours</h4> </span>" + " </div>" +
			"<div><span>" + minutes + "<br><h4>Minutes</h4> </span>" + " </div>"
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("").innerHTML = "EXPIRED";
		}
	}, 1200);