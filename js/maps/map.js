    var map = L.map("race-map",{
        center: [38.769164, -90.698974],
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

    var boundary = [{
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
              [-90.2504061672504, 38.542620160444], 
              [-90.2577840472612, 38.5320072933694], 
              [-90.2577916876478, 38.5319963033383], 
              [-90.2606347577976, 38.53315274012], 
              [-90.2631078310646, 38.5340550416386], 
              [-90.2637535947315, 38.5338240925085], 
              [-90.2644411682501, 38.5337060776543], 
              [-90.2654405333576, 38.5336957846977], 
              [-90.2670614336488, 38.5342821841684], 
              [-90.268178292699, 38.5358122617124], 
              [-90.2685257409316, 38.5369636404203], 
              [-90.2690839845782, 38.5375387317728], 
              [-90.2703395530956, 38.5381985028386], 
              [-90.2710491464446, 38.5386591001848], 
              [-90.2713987628035, 38.5392889002094], 
              [-90.2713901042496, 38.5401146056578], 
              [-90.2705278585411, 38.5416314366889], 
              [-90.2717231723498, 38.5445482197165], 
              [-90.2715892817575, 38.5448376932391], 
              [-90.2718023567954, 38.545744440744], 
              [-90.2721954555678, 38.5467642461031], 
              [-90.272264748842, 38.5481485234291], 
              [-90.272314207043, 38.5483199510528], 
              [-90.2723520476307, 38.5483943797412], 
              [-90.2741074413843, 38.5493611668668], 
              [-90.277923860975, 38.5505278123462], 
              [-90.2790429481899, 38.5513004596009], 
              [-90.2793420005538, 38.5515117402705], 
              [-90.2838615505694, 38.553944767496], 
              [-90.2871989419401, 38.555540823823], 
              [-90.2897804564452, 38.5570505962641], 
              [-90.2924050569354, 38.5589672232474], 
              [-90.2946124624669, 38.5605656190477], 
              [-90.2969509663876, 38.5622868209474], 
              [-90.2971097313905, 38.5624326043425], 
              [-90.313606249516, 38.5787543477339], 
              [-90.316237367742, 38.5846262212202], 
              [-90.3163260861889, 38.584823340812], 
              [-90.3205185596592, 38.5941527809318], 
              [-90.3109126291234, 38.6182858024063], 
              [-90.3110374004182, 38.6183681758777], 
              [-90.3087133690215, 38.6302233801532], 
              [-90.3078275696436, 38.6324470318822], 
              [-90.3064608620223, 38.6334737747444], 
              [-90.3048185802094, 38.6424514955074], 
              [-90.3036151556267, 38.6449576840092], 
              [-90.3018306519017, 38.6556676905343], 
              [-90.2517567220971, 38.7188637148811], 
              [-90.2280587210901, 38.7281642638376], 
              [-90.2243117760738, 38.7291358336783], 
              [-90.2217766047631, 38.7301304157377], 
              [-90.2197851310888, 38.7323097092863], 
              [-90.218358576997, 38.7333966528816], 
              [-90.2179880616612, 38.7335662507894], 
              [-90.2126551840317, 38.7362413420929], 
              [-90.2079604040548, 38.7397212331055], 
              [-90.2041428933573, 38.7431843170244], 
              [-90.2020009244623, 38.7450920959466], 
              [-90.1973325586433, 38.7492983185304], 
              [-90.1954675481065, 38.7515392541967], 
              [-90.1919947910832, 38.7547824503989], 
              [-90.189264719745, 38.7578010340983], 
              [-90.1883239067695, 38.7587424176208], 
              [-90.1880641718673, 38.7590757307751], 
              [-90.186290954528, 38.7613769825168], 
              [-90.1850686043237, 38.7648365092414], 
              [-90.184435221354, 38.7681842830754], 
              [-90.1838771083468, 38.7706302924938], 
              [-90.1842001984931, 38.7743467186935], 
              [-90.17512646373, 38.7734064123935], 
              [-90.166453995445, 38.7727490214315], 
              [-90.1663089206048, 38.7727122879642], 
              [-90.1664151884461, 38.77265616962], 
              [-90.1713151949271, 38.7665561632144], 
              [-90.1751151898186, 38.7602561700268], 
              [-90.1763151934593, 38.754456160989], 
              [-90.1834151905582, 38.7468561593637], 
              [-90.1913151953039, 38.7429561614653], 
              [-90.2052162040619, 38.7321571604648], 
              [-90.2099162050169, 38.7260571631283], 
              [-90.2114162029518, 38.7213571534779], 
              [-90.2119161973491, 38.717957151545], 
              [-90.2120162073831, 38.7117571567727], 
              [-90.2092161960885, 38.7027571522886], 
              [-90.2022161974692, 38.6934571527305], 
              [-90.195216189695, 38.6875571489368], 
              [-90.1900579364032, 38.6800542397564], 
              [-90.1864161871279, 38.6747571492871], 
              [-90.1855949393003, 38.6727256500136], 
              [-90.1826161927407, 38.6653571492951], 
              [-90.1811161862219, 38.6595571465112], 
              [-90.1777161886, 38.6427571490551], 
              [-90.1777665046433, 38.6412474511672], 
              [-90.1780161791695, 38.6337571499359], 
              [-90.1788161840354, 38.6291571467221], 
              [-90.1822898254259, 38.6184321266861], 
              [-90.1845161812207, 38.6115581440478], 
              [-90.1850005281101, 38.6107222599409], 
              [-90.1918171785006, 38.5989581358912], 
              [-90.1960171887372, 38.5944581396804], 
              [-90.2010931770453, 38.5899287879784], 
              [-90.202517189032, 38.5886581364755], 
              [-90.2101171884316, 38.5839581375323], 
              [-90.2167181845779, 38.5787581310571], 
              [-90.2198772316189, 38.5774126126555], 
              [-90.2221181888695, 38.5764581341817], 
              [-90.2231467587158, 38.5757724130897], 
              [-90.224218191322, 38.5750581271638], 
              [-90.23806537649, 38.5580727491675], 
              [-90.2435373382496, 38.5513606672343], 
              [-90.2489191997166, 38.5447591273224], 
              [-90.249996580869, 38.543209344278], 
              [-90.2504061672504, 38.542620160444]
            ]]
        }
    }]

  
    var poly = L.geoJson(boundary);
    map.addLayer(poly);

    coordinateArray = (boundary[0].geometry.coordinates)

    var coordinanteBounds = poly.getBounds();
    console.log(coordinateArray,coordinanteBounds ) 

    var x_max = coordinanteBounds.getEast();
    var x_min = coordinanteBounds.getWest();
    var y_max = coordinanteBounds.getSouth();
    var y_min = coordinanteBounds.getNorth();


    //Event listeners for checkboxes:
    var checkboxRace = document.querySelector("input[name=race]");
    checkboxRace.addEventListener('change', function() {
    if (this.checked) {
        //Load race data points here:
        var race = {
            'White':143401,
            'Black_or_African_American':143018,
            'American_Indian_or_Alaskan_Native':787,
            'Asian':10365,
            'Native_Hawaiian_and_Other_Pacific_Islander':10365,
            'Other':2979,
            'Two_Or_More_Races':7412,
        }
        var race_round = {
            'White':Math.round(143401/1000),
            'Black_or_African_American':Math.round(143018/1000),
            'American_Indian_or_Alaskan_Native':Math.round(787/1000),
            'Asian':Math.round(10365/1000),
            'Native_Hawaiian_and_Other_Pacific_Islander':Math.round(10365/1000),
            'Other':Math.round(2979/1000),
            'Two_Or_More_Races':Math.round(7412/1000),
        }
        var polyGeoJson = poly.toGeoJSON();

        randomPointInPoly = function(polygon) {
            var bounds = poly.getBounds(); 
            var x_min  = bounds.getEast();
            var x_max  = bounds.getWest();
            var y_min  = bounds.getSouth();
            var y_max  = bounds.getNorth();
        
            var lat = y_min + (Math.random() * (y_max - y_min));
            var lng = x_min + (Math.random() * (x_max - x_min));
        
            var point  = turf.point([lng, lat]);
            var turfPolygon = turf.polygon(coordinateArray)
            var inside = turf.booleanPointInPolygon(point, turfPolygon);

        
            if (inside) {
                return point
            } else {
                return randomPointInPoly(polygon)
            }
        } 
        for (var key of Object.keys(race_round)) {
            console.log(key + " -> " + race_round[key])
            L.geoJson(randomPointInPoly(poly)).addTo(map);



        }

    }
    });

    var checkboxEducation = document.querySelector("input[name=education]");
    checkboxEducation.addEventListener('change', function() {
    if (this.checked) {
        //Load education data points here:
        console.log("education Checkbox is checked..");
    }
    });

    var checkboxAge = document.querySelector("input[name=age]");
    checkboxAge.addEventListener('change', function() {
    if (this.checked) {
        //Load age data points here:
        console.log("age Checkbox is checked..");
    }
    });

    var checkboxIncome = document.querySelector("input[name=income]");
    checkboxIncome.addEventListener('change', function() {
    if (this.checked) {
        //Load income data points here:
        console.log("income Checkbox is checked..");
    }
    });




    
    
