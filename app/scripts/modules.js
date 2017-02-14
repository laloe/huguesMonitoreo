'use strict';
angular.module('huguesApp')
	.config(function($stateProvider) {
		var states = [{
			name: 'home',
			data: {
				pageTitle: 'BIENVENIDO | MONITOREO SOFTV',
			},
			url: '/',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			controllerAs: '$ctrl'
		}];
		states.forEach(function(state) {
			$stateProvider.state(state);
		});
	});
