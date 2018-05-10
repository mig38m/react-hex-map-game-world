Дано — гугло-карта с каким-то количеством маркеров.

Задача — автоматически смасштабировать и отцентрировать карту таким образом, чтобы было видно все маркеры.

Решение — использовать класс LatLngBounds, позволяющий определять область на карте:

// Создаём карту
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: new google.maps.LatLng(0, 0),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
 
// Маркеры
var markers = [
    ['Маркер 1', 45.21465, 65.14896],
    ['Маркер 2', 65.14896, 45.21465],
    // ...
];
 
// Область показа маркеров
var markersBounds = new google.maps.LatLngBounds();
 
for (var i = 0; i < markers.length; i++) {
    var markerPosition = new google.maps.LatLng(markers[i][1], markers[i][2]);
 
    // Добавляем координаты маркера в область
    markersBounds.extend(markerPosition);
 
    // Создаём маркер
    var marker = new google.maps.Marker({
        position: markerPosition,
        map: map,   
        title: markers[i][0],
    }); 
}
 
// Центрируем и масштабируем карту
map.setCenter(markersBounds.getCenter(), map.fitBounds(markersBounds));  
