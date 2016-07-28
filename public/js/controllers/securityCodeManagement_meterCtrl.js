app.controller('securityCodeManagement_meterCtrl', function ($scope, $uibModal, $window) {
    $scope.openAssignSecurityCodes = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/assignSecurityCodes_meter.html',
            controller: 'assignSecurityCodes_meterCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
    };
    $scope.device_class = {
        "type": "select", 
        "name": "device_class",
        "value": "ANSI", 
        "values": ["ANSI", "IEC"]
    };
    
    $scope.encryption_Type = {
        "type": "select", 
        "name": "device_class",
        "value": "DES (8 byte/16 HEX)", 
        "values": ["DES (8 byte/16 HEX)", "DESede (24 byte/48 HEX)", "None"]
    };

    $scope.encryption_Type_2 = {
        "type": "select", 
        "name": "device_class",
        "value": "DES (8 byte/16 HEX)", 
        "values": ["DES (8 byte/16 HEX)", "DESede (24 byte/48 HEX)", "None"]
    };

    $scope.encryption_Type_3 = {
        "type": "select", 
        "name": "encryption_Type_3",
        "value": "DES (8 byte/16 HEX)", 
        "values": ["DES (8 byte/16 HEX)", "DESede (24 byte/48 HEX)", "None"]
    };
});