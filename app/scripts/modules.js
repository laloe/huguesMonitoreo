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
			},
			{
				name: 'diagnostic',
				data: {
					pageTitle: 'BIENVENIDO | MONITOREO SOFTV',
				},
				url: '/diagnostic',
				templateUrl: 'views/diagnostic/diagnostic.html',
				controller: 'DiagnosticCtrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'onsiteOne',
				data: {
					pageTitle: 'BIENVENIDO | MONITOREO SOFTV',
				},
				url: '/onsite/one',
				templateUrl: 'views/onsite/one.html',
				controller: 'OnsiteOneticCtrl',
				controllerAs: '$ctrl'
			},
			{
				name: 'onsiteTwo',
				data: {
					pageTitle: 'BIENVENIDO | MONITOREO SOFTV',
				},
				url: '/onsite/two',
				templateUrl: 'views/onsite/two.html',
				controller: 'OnsiteTwoticCtrl',
				controllerAs: '$ctrl'
			}
		];
		states.forEach(function(state) {
			$stateProvider.state(state);
		});
	});
