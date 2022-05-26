;(function() {
    if (typeof ymaps === 'undefined') {
        return;
    }

    ymaps.ready(function () {
        var myMap = new ymaps.Map('yamap', {
                center: [54.869707, 69.139602],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
   
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: 'г. Петропавловск, ул. Астана, 83'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/common/marker.svg',
                iconImageSize: [40, 63],
                iconImageOffset: [-10, -38]
            });
    
  
        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');
    }); 
})();