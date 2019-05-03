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

$(document).ready(function () {
    $("#nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});

//yandex metrica

// (function (m, e, t, r, i, k, a) { 
//     m[i] = m[i] || function () { 
//         (m[i].a = m[i].a || []).push(arguments) }; 
//         m[i].l = 1 * new Date(); 
//         k = e.createElement(t), a = e.getElementsByTagName(t)[0],
//          k.async = 1, k.src = r, a.parentNode.insertBefore(k, a) })
//          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); 
// ym(53530384, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true });