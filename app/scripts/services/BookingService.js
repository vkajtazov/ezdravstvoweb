var contextPath = "https://ezdravstvo.herokuapp.com";

FirstApp.factory('BookingService', function($resource) {

	return $resource(contextPath + "/rest/bookings/:action", {}, {
		find : {
			method : 'POST',
			isArray : true,
			params : {
				'action' : 'find'
			},
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}
	});
});
