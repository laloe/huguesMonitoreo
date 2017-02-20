'use strict';
angular
  .module('huguesApp')
  .factory('displayFactory', function($http, $q, globalService) {
    var paths = {
        speedTest: '/HuguesRequest/TestMethod',
    };
    var factory = {};

    factory.speed = function() {
		var deferred = $q.defer();
		var Parametros = {
            'loginuuid':'58ab6821b8a23',
            'san':'SAN123',
            'command':'TDD_STR',
            'operator_id':'televera'
        };
		$http.post(globalService.servidor() + paths.speedTest, Parametros).then(function(response) {
			deferred.resolve(response.data);
		}).catch(function(response) {
			deferred.reject(response.data);
		});

		return deferred.promise;
	};

    return factory;
  });
