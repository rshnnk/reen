$(document).ready(function() {
    $("#owl-example").owlCarousel({
        autoPlay: true,
      	items: 1,
      	itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        navigation: true,
        navigationText: [
        "<i class='glyphicon glyphicon-menu-left'></i>",
        "<i class='glyphicon glyphicon-menu-right'></i>"]
    });

    $(".product-carousel").owlCarousel({
        autoPlay: true,
      	items: 4,
      	itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,3],
      	navigation: true,
      	navigationText: [
      	"<i class='glyphicon glyphicon-menu-left'></i>",
      	"<i class='glyphicon glyphicon-menu-right'></i>"]
    });

    $('input, textarea').placeholder();

    $('.back-to-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});