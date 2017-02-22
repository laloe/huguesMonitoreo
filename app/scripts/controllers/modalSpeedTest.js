'use strict';
angular
	.module('huguesApp')
	.controller('SpeedTestCtrl', function($state, ngNotify, $location, displayFactory, $uibModalInstance) {
		function initialData() {
            displayFactory.speed().then(function(data) {
				vm.datos = JSON.parse(data);
				vm.test = vm.datos.TDD_STR;
			});
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.cancel = cancel;
        initialData();
	});
