TweenMax.to('.arrow', 2, {
    startAt: {y: -10},
    y: 10,
    repeat:-1,
    yoyo: true,
    ease: Power3.easeInOut
});

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $(window).height();
    if (window_top > div_top) {
        $('#header').css('visibility', 'visible');
        $('#header').fadeIn(100);
    } else {
        $('#header').fadeOut(100);

    }

}

$(function () {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});


$('#toggle').click(function() {

    // Open full screen menu
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');

    // Prevent scroll: non-touch devices
    $('body').toggleClass('stop-scrolling');

    // Prevent scroll: touch devices
    if($('body').hasClass('stop-scrolling')){
        $('body').bind('touchmove', function(e){e.preventDefault()});
    } else {
        $('body').unbind('touchmove');
    }
    console.log($('body'));
});

var slidesToShow = $(window).width() > 400 ? 3 : 2;

$('.autoplay').slick({
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
});