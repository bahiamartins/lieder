var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: -23.5580577,
				lng: -46.6622568,
			  });
			   var marker = map.addMarker({
		            lat: -23.5580577,
					lng: -46.6622568,
		            title: 'LIEDER'
		        });
			});
        }

    };
}();