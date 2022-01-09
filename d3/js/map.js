
    var map = L.map('map',{
        center: [38.636975, -90.239971],
        zoom: 13
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW1sb3JyYWluZSIsImEiOiJja25xcjFsanYwY3hjMm9uMHRkMmt1bzk3In0.AK4bzeFyxjafUrisldluWQ'
    }).addTo(map);

    // var promise = $.getJSON("../data/map/library_locations.json");
    // promise.then(function(data) {
    //     console.log(data)
    //     var libraries = L.geoJson(data);
    //     libraries.addTo(map);
    //     console.log("added data to map")
    // });

    function onEachFeature(feature, layer) {
        layer.bindPopup(feature.properties['Branch Name']);
      }

    fetch("../data/map/library_locations.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        // use geoJSON
        L.geoJSON(data, {
        onEachFeature: onEachFeature,
        }).addTo(map);
    });
    
    // var marker = L.marker([38.624682, -90.185166]).addTo(map);



