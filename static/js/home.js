$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    initHeader();
});

function initHeader() {
    var sidepadding = ($("#header-container").width() - $("#header").width()) / 2;

    $("#header").css('margin-left', sidepadding);
    $("#header").css('margin-right', sidepadding);
}