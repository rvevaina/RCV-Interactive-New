$( document ).ready(function() {

//Full screen Height fix

    var fullHeight = function(){
        var winHeight = $(window).height();
        $(".full-height").css("height",winHeight);
        console.log(winHeight);
    };

    $(window).on("resize", fullHeight);


//Fade out div on scroll + Nav changes color

    var stickyTop = $('.about-section').offset().top-100;

    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $('.main-landing').css({'opacity':( 1000-scrollTop )/1000});


        if (($(window).scrollTop() >= stickyTop)){
            $('.navbar').css({'background':'#f6f6f6'});
            $('.about-page').css({'opacity':'1'});
        } else if ($(window).width() > 667) {
            $('.navbar').css({'background':'#A6A5A1'});
            $('.about-page').css({'opacity':'0'});
        }
    });

    //Landing page scroll down
    $('img.about-block').click(function(){
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top-95
        }, 1800);
    });

    // Wall Image and video centered on screen

    $('.wall-image').css('margin-top', ($(window).outerHeight()/12) + 'px');

    $('.wall-image-after').css('margin-top', ($(window).outerHeight()/17) + 'px');

    $('.video-main').css('margin-top', ($(window).outerHeight()/12) + 'px');

    //image after video is done

    var video = document.getElementsByTagName('video')[0];

    video.onended = function(e) {
        $('.wall-image-after').animate({'opacity':'1'},1600);
        $('.video-main').css({'opacity':'0'});
        $('.wall-image').animate({'opacity':'0'}, 1600);
    };

    $(".video-main")[0].playbackRate = 1.2;

    slideToAbout = function(){
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top-75
        }, 1800);
    };

    stopVideo = function(){
        $(".video-main")[0].playbackRate = 10000;
    };

    if ($(window).width() > 1340 && $(window).width() < 1500) {
        $("#after").replaceWith("<map name='after'><area shape='poly' coords='917,84,1378,84,1378,287,917,286' href='#about-section' onclick='slideToAbout();return false;'>" +
            "<area shape='poly' coords='912,295,1380,298,1379,439,911,440' href='work.html'>" +
            "<area shape='poly' coords='907,440,1378,444,1376,647,924,646' href='contact.html'>")
    } else if ($(window).width() > 1500){
        $("#after").replaceWith("<map name='after'><area shape='poly' coords='1065,90,1635,92,1635,336,1071,335' href='#about-section' onclick='slideToAbout();return false;'>" +
            "<area shape='poly' coords='1076,351,1613,355,1612,508,1084,510' href='work.html'>" +
            "<area shape='poly' coords='1080,516,1642,524,1632,766,1077,746' href='contact.html'>")
    }

    var eventFired = 0;

    if ($(window).width() < 1340) {
        console.log('Less than 960');
    }
    else {
        eventFired = 1;
    }

    $(window).resize(function() {
        if(!eventFired){
            if ($(window).width() > 1340 && $(window).width() < 1500) {
                $("#after").replaceWith("<map name='after'><area shape='poly' coords='917,84,1378,84,1378,287,917,286' href='#about-section' onclick='slideToAbout();return false;'>" +
                    "<area shape='poly' coords='912,295,1380,298,1379,439,911,440' href='work.html'>" +
                    "<area shape='poly' coords='907,440,1378,444,1376,647,924,646' href='contact.html'>")
            } else if ($(window).width() > 1500) {
                $("#after").replaceWith("<map name='after'><area shape='poly' coords='1065,90,1635,92,1635,336,1071,335' href='#about-section' onclick='slideToAbout();return false;'>" +
                    "<area shape='poly' coords='1076,351,1613,355,1612,508,1084,510' href='work.html'>" +
                    "<area shape='poly' coords='1080,516,1642,524,1632,766,1077,746' href='contact.html'>")
            }
        }
    });

//Chrome Transitions

//Sections
    var $designSectionChrome = $(".chrome .design");
    var $developSectionChrome = $(".chrome .develop");
//Headers
    var $developHeaderChrome = $(".chrome .develop h3");
    var $designHeaderChrome = $(".chrome .design h3");

//Design Content
    var $designContentChrome = $(".chrome .design-content");
    var $designImageChrome = $(".chrome .design-content img.vector");
    var $designTextChrome = $(".chrome .design-content .text p");

//Develop Content
    var $developContentChrome = $(".chrome .develop-content");
    var $developImageChrome = $(".chrome .develop-content img.vector");
    var $developTextChrome = $(".chrome .develop-content .text p");


    var toggle = 0;
    $designContentChrome.click(function() {
        $designSectionChrome.toggleClass("active");
        $developHeaderChrome.stop().fadeToggle("slow");
        if(toggle === 0){
            $designContentChrome.stop().animate({
                margin: "-5% -7%"
            }, 1000);
            $designHeaderChrome.animate({
                opacity: 0
            },800);
            $designImageChrome.delay(800).animate({
                opacity: 1,
                width: "27%"
            }, 2400);
            $designTextChrome.delay(1200).animate({
                opacity: 1,
                fontSize: "1.4rem"
            }, 2400);
            $developContentChrome.css("pointer-events", "none");
            toggle = 1;
        }
        else if (toggle === 1){
            console.log(toggle);
            $designContentChrome.stop().animate({
                margin: "12% -12%"
            }, 800);
            $designHeaderChrome.animate({
                opacity: 1
            },800);
            $designImageChrome.stop().animate({
                opacity: 0
            },0);
            $designTextChrome.stop().animate({
                opacity: 0
            },0);
            $developContentChrome.css("pointer-events", "visible");
            toggle = 0;
        }
    });

    $developContentChrome.click(function() {
        $designSectionChrome.toggleClass("develop-active");
        $developSectionChrome.toggleClass("active");
        $designHeaderChrome.fadeToggle("slow");
        if(toggle === 0){
            $developContentChrome.stop().animate({
                margin: "-5% 38%"
            }, 1000);
            $developHeaderChrome.animate({
                opacity: 0
            },800);
            $developImageChrome.delay(800).animate({
                opacity: 1
            }, 2400);
            $developTextChrome.delay(1200).animate({
                opacity: 1
            }, 2400);
            $designContentChrome.css("pointer-events", "none");
            toggle = 1;
        }
        else if (toggle === 1){
            console.log(toggle);
            $developContentChrome.stop().animate({
                margin: "12% 54%"
            }, 800);
            $developHeaderChrome.animate({
                opacity: 1
            },800);
            $developImageChrome.stop().animate({
                opacity: 0
            },0);
            $developTextChrome.stop().animate({
                opacity: 0
            },0);
            $designContentChrome.css("pointer-events", "visible");
            toggle = 0;
        }
    });

// Transitions


// Sections
        var $designSection = $(".ie .design, .gecko .design, .opera .design, .safari .design");
        var $developSection = $(".ie .develop, .gecko .develop, .opera .develop, .safari .develop");
//Headers
        var $developHeader = $(".ie .develop h3, .gecko .develop h3, .opera .develop h3, .safari .develop h3");
        var $designHeader = $(".ie .design h3, .gecko .design h3, .opera .design h3, .safari .design h3");

//Design Content
        var $designContent = $(".ie .design-content, .gecko .design-content, .opera .design-content, .safari .design-content");
        var $designImage = $(".ie .design-content img.vector, .gecko .design-content img.vector, .opera .design-content img.vector, .safari .design-content img.vector");
        var $designText = $(".ie .design-content .text p, .gecko .design-content .text p, .opera .design-content .text p, .safari .design-content .text p");

//Develop Content
        var $developContent = $(".ie .develop-content, .gecko .develop-content, .opera .develop-content, .safari .develop-content");
        var $developImage = $(".ie .develop-content img.vector, .gecko .develop-content img.vector, .opera .develop-content img.vector, .safari .develop-content img.vector");
        var $developText = $(".ie .develop-content .text p, .gecko .develop-content .text p, .opera .develop-content .text p, .safari .develop-content .text p");
        var $plusSign = $(".ie .plus-sign, .gecko .plus-sign, .opera .plus-sign, .safari .plus-sign");

        $designContent.click(function () {
            $designSection.toggleClass("active");
            $developHeader.stop().fadeToggle("slow");
            if (toggle === 0) {
                $designContent.stop().animate({
                    top: "10%",
                    left: "23%"
                }, 1000);
                $designHeader.animate({
                    opacity: 0
                }, 100);
                $designImage.delay(800).animate({
                    opacity: 1
                }, 2400);
                $designText.delay(1200).animate({
                    opacity: 1
                }, 2400);
                $developSection.css("pointer-events", "none");
                $developSection.css("opacity", "0");
                $plusSign.css("opacity", "0");
                toggle = 1;
            }
            else if (toggle === 1) {
                console.log(toggle);
                $designContent.stop().animate({
                    top: "42%",
                    left: "0"
                }, 800);
                $designHeader.animate({
                    opacity: 1
                }, 2200);
                $designImage.stop().animate({
                    opacity: 0
                }, 0);
                $designText.stop().animate({
                    opacity: 0
                }, 0);
                $developSection.css("pointer-events", "visible");
                $developSection.css("opacity", "1");
                $plusSign.css("opacity", "1");
                toggle = 0;
            }
        });

        $developContent.click(function () {
            $designSection.toggleClass("develop-active");
            $developSection.toggleClass("active");
            $designHeader.fadeToggle("slow");
            if (toggle === 0) {
                $developContent.stop().animate({
                    top: "4%",
                    left: "21%"
                }, 1000);
                $developHeader.animate({
                    opacity: 0
                }, 100);
                $developImage.delay(800).animate({
                    opacity: 1
                }, 2400);
                $developText.delay(1200).animate({
                    opacity: 1
                }, 2400);
                $designContent.css("pointer-events", "none");
                $designSection.css("opacity", "0");
                $plusSign.css("opacity", "0");
                toggle = 1;
            }
            else if (toggle === 1) {
                console.log(toggle);
                $developContent.stop().animate({
                    top: "37%",
                    left: "4%"
                }, 800);
                $developHeader.animate({
                    opacity: 1
                }, 2200);
                $developImage.stop().animate({
                    opacity: 0
                }, 0);
                $developText.stop().animate({
                    opacity: 0
                }, 0);
                $designContent.css("pointer-events", "visible");
                $designSection.css("opacity", "1");
                $plusSign.css("opacity", "1");
                toggle = 0;
            }
        });

//Activate carousal

$('.carousel').carousel({
    interval: false
});

//Parallax

    $(".contact-landing").each(function(){
        $(this).parallax('50%', 0.2, true)
    });


    $('iframe').load( function() {
        $('iframe').contents().find("head")
            .append($("<style type='text/css'>  body{display:none !important;}  </style>"));
    });



}); //Document ready
