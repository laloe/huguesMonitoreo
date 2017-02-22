'use strict';
angular
  .module('huguesApp')
  .factory('displayFactory', function($http, $q, globalService) {
    var factory = {};
    var paths = {
        speedTest: '/HuguesRequest/TestMethod',
    };

    factory.speed = function() {
		var deferred = $q.defer();
		var Parametros = {
            'loginuuid':'58adde6e1f500',
            'san':'SAN123',
            'command':'TDD_STR',
            'operator_id':'televera'
        };
		$http.post(globalService.getUrl() + paths.speedTest,  JSON.stringify(Parametros)).then(function(response) {
			deferred.resolve(response.data);
		}).catch(function(data) {
			deferred.reject(data);
		});

		return deferred.promise;
	};

    factory.displaySpeed = function() {
		var deferred = $q.defer();
		var Parametros = {
            'loginuuid':'58adde6e1f500',
            'san':'SAN123',
            'command':'TDD',
            'operator_id':'televera'
        };
		$http.post(globalService.getUrl() + paths.speedTest,  JSON.stringify(Parametros)).then(function(response) {
			deferred.resolve(response.data);
		}).catch(function(data) {
			deferred.reject(data);
		});

		return deferred.promise;
	};

    return factory;
  });
