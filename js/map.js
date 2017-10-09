// This example creates a simple polygon representing the Bermuda Triangle.
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
		center: {lat: 54.099693, lng: 11.618042},
		mapTypeId: 'satellite'
    });

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(54.099594, 11.617912),
        icon: './image/marker.png',
        map: map
    });

    // Big House
	var house_1 = [
		new google.maps.LatLng(54.099896,11.618478),
		new google.maps.LatLng(54.099844,11.618675),
		new google.maps.LatLng(54.099843,11.618699),
		new google.maps.LatLng(54.099591,11.618519),
		new google.maps.LatLng(54.099552,11.618493),
		new google.maps.LatLng(54.099549,11.618442),
		new google.maps.LatLng(54.099561,11.618404),
		new google.maps.LatLng(54.099321,11.618224),
		new google.maps.LatLng(54.099329,11.618179),
		new google.maps.LatLng(54.099304,11.618160),
		new google.maps.LatLng(54.099334,11.618011),
		new google.maps.LatLng(54.099357,11.618025),
		new google.maps.LatLng(54.099377,11.617960),
		new google.maps.LatLng(54.099627,11.618149),
		new google.maps.LatLng(54.099616,11.618200),
		new google.maps.LatLng(54.099650,11.618227),
		new google.maps.LatLng(54.099655,11.618291),
		new google.maps.LatLng(54.099895,11.618477)
	];
	var house_1_options = {
		path: house_1,
		// strokeColor: '#003364',
		// strokeOpacity: 0.9,
		// strokeWeight: 2,
		// fillColor: '#003364',
		// fillOpacity: 0.7,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
		name: 'Main House'
	}
    var house_1_import = new google.maps.Polygon(house_1_options);
	house_1_import.setMap(map)


    // HOUSE #1 left side - bottom one
    var house_2 = [
        new google.maps.LatLng(54.099523,11.617652),
        new google.maps.LatLng(54.099481,11.617693),
        new google.maps.LatLng(54.099491,11.617754),
        new google.maps.LatLng(54.099480,11.617760),
        new google.maps.LatLng(54.099454,11.617677),
        new google.maps.LatLng(54.099395,11.617732),
        new google.maps.LatLng(54.099407,11.617775),
        new google.maps.LatLng(54.099372,11.617809),
        new google.maps.LatLng(54.099337,11.617711),
        new google.maps.LatLng(54.099276,11.617518),
        new google.maps.LatLng(54.099317,11.617468),
        new google.maps.LatLng(54.099322,11.617493),
        new google.maps.LatLng(54.099396,11.617430),
        new google.maps.LatLng(54.099407,11.617448),
        new google.maps.LatLng(54.099453,11.617418),
        new google.maps.LatLng(54.099462,11.617438),
        new google.maps.LatLng(54.099476,11.617461),
        new google.maps.LatLng(54.099521,11.617620),
        new google.maps.LatLng(54.099521,11.617650)
    ];
    var house_2_options = {
        path: house_2,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
		name: 'House #1'
    }
    var house_2_import = new google.maps.Polygon(house_2_options);
    house_2_import.setMap(map)

    // HOUSE #2 left side - middle one
    var house_3 = [
        new google.maps.LatLng(54.099680,11.617662),
        new google.maps.LatLng(54.099622,11.617636),
        new google.maps.LatLng(54.099622,11.617621),
        new google.maps.LatLng(54.099579,11.617598),
        new google.maps.LatLng(54.099583,11.617515),
        new google.maps.LatLng(54.099573,11.617510),
        new google.maps.LatLng(54.099586,11.617414),
        new google.maps.LatLng(54.099599,11.617422),
        new google.maps.LatLng(54.099605,11.617393),
        new google.maps.LatLng(54.099635,11.617398),
        new google.maps.LatLng(54.099661,11.617421),
        new google.maps.LatLng(54.099662,11.617408),
        new google.maps.LatLng(54.099700,11.617424),
        new google.maps.LatLng(54.099702,11.617420),
        new google.maps.LatLng(54.099729,11.617429),
        new google.maps.LatLng(54.099727,11.617447),
        new google.maps.LatLng(54.099725,11.617465),
        new google.maps.LatLng(54.099776,11.617495),
        new google.maps.LatLng(54.099787,11.617483),
        new google.maps.LatLng(54.099808,11.617508),
        new google.maps.LatLng(54.099826,11.617547),
        new google.maps.LatLng(54.099828,11.617559),
        new google.maps.LatLng(54.099841,11.617582),
        new google.maps.LatLng(54.099859,11.617633),
        new google.maps.LatLng(54.099867,11.617675),
        new google.maps.LatLng(54.099810,11.617772),
        new google.maps.LatLng(54.099764,11.617838),
        new google.maps.LatLng(54.099736,11.617787),
        new google.maps.LatLng(54.099745,11.617764),
        new google.maps.LatLng(54.099731,11.617730),
        new google.maps.LatLng(54.099726,11.617711),
        new google.maps.LatLng(54.099736,11.617692),
        new google.maps.LatLng(54.099716,11.617653),
        new google.maps.LatLng(54.099706,11.617633),
        new google.maps.LatLng(54.099710,11.617605),
        new google.maps.LatLng(54.099694,11.617594),
        new google.maps.LatLng(54.099683,11.617660)
    ];
    var house_3_options = {
        path: house_3,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
		name: 'House #2'
    }
    var house_3_import = new google.maps.Polygon(house_3_options);
    house_3_import.setMap(map);

    // House #3 left side - top one
    var house_4 = [
        new google.maps.LatLng(54.099838,11.618027),
        new google.maps.LatLng(54.099819,11.618051),
        new google.maps.LatLng(54.099795,11.617999),
        new google.maps.LatLng(54.099826,11.617948),
        new google.maps.LatLng(54.099833,11.617931),
        new google.maps.LatLng(54.099831,11.617904),
        new google.maps.LatLng(54.099856,11.617850),
        new google.maps.LatLng(54.099865,11.617858),
        new google.maps.LatLng(54.099881,11.617838),
        new google.maps.LatLng(54.099887,11.617848),
        new google.maps.LatLng(54.099907,11.617821),
        new google.maps.LatLng(54.099928,11.617790),
        new google.maps.LatLng(54.099954,11.617841),
        new google.maps.LatLng(54.099948,11.617853),
        new google.maps.LatLng(54.099960,11.617882),
        new google.maps.LatLng(54.099954,11.617896),
        new google.maps.LatLng(54.099988,11.617962),
        new google.maps.LatLng(54.099976,11.617986),
        new google.maps.LatLng(54.100009,11.618054),
        new google.maps.LatLng(54.099996,11.618069),
        new google.maps.LatLng(54.099996,11.618093),
        new google.maps.LatLng(54.099917,11.618218),
        new google.maps.LatLng(54.099877,11.618164),
        new google.maps.LatLng(54.099876,11.618129),
        new google.maps.LatLng(54.099842,11.618204),
        new google.maps.LatLng(54.099827,11.618177),
        new google.maps.LatLng(54.099834,11.618163),
        new google.maps.LatLng(54.099838,11.618168),
        new google.maps.LatLng(54.099872,11.618098),
        new google.maps.LatLng(54.099838,11.618030)
    ];
    var house_4_options = {
        path: house_4,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
		name: 'House #3'
    }
    var house_4_import = new google.maps.Polygon(house_4_options);
    house_4_import.setMap(map);


    // watch for click events
    house_1_import.addListener('click', function() {
      $('.sidebar').css('transform', 'translateX(0)')
    });
    house_2_import.addListener('click', function() {
      $('.sidebar').css('transform', 'translateX(0)')
    });
    house_3_import.addListener('click', function() {
      $('.sidebar').css('transform', 'translateX(0)')
    });
    house_4_import.addListener('click', function() {
      $('.sidebar').css('transform', 'translateX(0)')
    });

  }
