'use strict';
angular
	.module('huguesApp')
	.controller('DisplayForSan', function($uibModal, $state, ngNotify, $location, displayFactory) {
		function boton() {
            vm.animationsEnabled = true;
			var modalInstance = $uibModal.open({
				animation: vm.animationsEnabled,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: 'views/displaySan/modalSpeedTest.html',
				controller: 'SpeedTestCtrl',
				controllerAs: '$ctrl',
				backdrop: 'static',
				keyboard: false,
				size: 'sm'
			});
        }

        var vm = this;
        vm.boton = boton;
	});
