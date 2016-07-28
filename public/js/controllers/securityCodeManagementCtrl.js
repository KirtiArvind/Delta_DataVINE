app.controller('securityCodeManagementCtrl', function ($scope, $uibModal) {
    $scope.openAssignSecurityCodes = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/assignSecurityCodes.html',
            controller: 'assignSecurityCodesCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
    };
});