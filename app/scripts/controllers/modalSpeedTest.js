'use strict';
angular
	.module('huguesApp')
	.controller('SpeedTestCtrl', function($state, ngNotify, $location, displayFactory, $uibModalInstance) {
		function initialData() {
            displayFactory.speed().then(function(data) {
				vm.datos = data;
                console.log(vm.datos);
			});
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }

        var vm = this;
        vm.cancel = cancel;
        initialData();
	});
