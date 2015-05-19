var contextPath = "https://ezdravstvo.herokuapp.com";


FirstApp.factory('UserService', function($resource) {

	return $resource(contextPath + "/rest/user/:action", {}, {
		authenticate : {
			method : 'POST',
			params : {
				'action' : 'authenticate'
			},
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}
	});
});
