function onEachFeature(feature, layer) {
    layer.bindPopup("Library: " +feature.properties['Branch Name']);
}

    var map = L.map("map",{
        center: [38.636975, -90.239971],
        zoom: 11.5
    });


    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZW1sb3JyYWluZSIsImEiOiJja25xcjFsanYwY3hjMm9uMHRkMmt1bzk3In0.AK4bzeFyxjafUrisldluWQ'
    }).addTo(map);

    
    fetch("../data/map/library_locations.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        L.geoJSON(data, {
            onEachFeature: onEachFeature,
        }).addTo(map);
    });

    var communityCenterMarker = {
        radius: 6,
        fillColor: "green",
        color: "green",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };


    fetch("../data/map/community_centers.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        L.geoJSON(data, {
            onEachFeature: 
                function (feature, layer) {
                    layer.bindPopup(feature.properties.Center)},
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, communityCenterMarker);
            }
        }).addTo(map);
    })

    var elementarySchoolMarker = {
        radius: 6,
        fillColor: "blue",
        color: "blue",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var middleSchoolMarker = {
        radius: 6,
        fillColor: "purple",
        color: "purple",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var highSchoolMarker = {
        radius: 6,
        fillColor: "red",
        color: "red",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var otherSchoolMarker = {
        radius: 6,
        fillColor: "orange",
        color: "orange",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };


    fetch("../data/map/schools.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // use geoJSON
        L.geoJSON(data, {
            onEachFeature: 
                function (feature, layer) {
                    layer.bindPopup("School: " + feature.properties.School)},
            pointToLayer: function (feature, latlng) {
                if(feature.properties.Level == "P"){
                    return L.circleMarker(latlng, elementarySchoolMarker);
                } else if(feature.properties.Level == "M"){
                    return L.circleMarker(latlng, middleSchoolMarker);
                } else if(feature.properties.Level == "H"){
                    return L.circleMarker(latlng, highSchoolMarker);
                } else{
                    return L.circleMarker(latlng, otherSchoolMarker);
                }
            }
        }).addTo(map);
    })
