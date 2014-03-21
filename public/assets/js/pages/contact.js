var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: -19.4618623,
				lng: -44.2600615,
			  });
			   var marker = map.addMarker({
		            lat: -19.4618623,
					lng: -44.2600615,
		            title: 'LIEDER'
		        });
			});
        }

    };
}();