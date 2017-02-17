'use strict';
angular.module('huguesApp')
	.service('globalService', function() {
		var svc = {};

		svc.getUrl = function() {
			//return 'http://localhost:64481/SoftvWCFService.svc';
			return 'http://192.168.50.6:64481/SoftvWCFService.svc';
		};

		svc.getUrlReportes = function() {
			return 'http://192.168.50.6:64481';
			//return 'http://localhost:64481';
		};

		svc.getUrlToken = function() {
		   return 'http://localhost:50914/api';
		};

		return svc;
	});
