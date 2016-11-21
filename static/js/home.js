var navTopOffset;
var navWrapper;

$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    navWrapper = $(".nav-wrapper");
    initHeader();
    initStickyNavigation();
});

function initHeader() {
    var sidepadding = ($("#header-container").width() - $("#header").width()) / 2;

    $("#header").css('margin-left', sidepadding);
    $("#header").css('margin-right', sidepadding);
}

function initStickyNavigation() {
    navTopOffset = $('nav').offset().top;
    syncStickiness();
    $(window).scroll(function () {
        syncStickiness();
    });
}

function syncStickiness() {
    var scrollTopOffset = $(window).scrollTop();
    if (scrollTopOffset > navTopOffset) {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}

// Типо что-то красивое сделать хотел, но не получилось))00)
function makeNavTransparent() {
    if (navWrapper !== undefined) {
        navWrapper.addClass('white');
        navWrapper.addClass('black-text');
        navWrapper.removeClass('red');
    }
}

function makeNavRed() {
    if (navWrapper !== undefined) {
        navWrapper.removeClass('white');
        navWrapper.removeClass('black-text');
        navWrapper.addClass('red');
    }
}
