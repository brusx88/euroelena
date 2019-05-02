ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [48.748341, 44.505899],
        zoom: 14,
        controls: [],

    });

    var placemark = new ymaps.Placemark([48.748341, 44.505899], {
        iconLayout: 'default#image',
        iconImageHref: '../img/marker.png',
        iconImageSize: [46, 57]
    });

    map.geoObjects.add(placemark)
}


//scroll

$(document).ready(function(){
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});