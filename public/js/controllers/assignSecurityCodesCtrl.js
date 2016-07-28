app.controller('assignSecurityCodesCtrl', function ($scope, $modalInstance) {
    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
    $scope.assignSecurityCodes = [
        {
            "key": 'File Name',
            "value": 'Valid Endpoint List.txt'
        },
        {
            "key": 'Result',
            "value": 'No Endpoints Assigned'
        },
        {
            "key": '# Endpoint entries',
            "value": '6'
        },
        {
            "key": '# Endpoints Assigned Successfully',
            "value": '0'
        },
        {
            "key": '# Unknown Endpoint entries',
            "value": '0'
        },
        {
            "key": '# Duplicate Endpoint entries in System',
            "value": '0'
        },
        {
            "key": '# Endpoint with Invalid Device Class',
            "value": '0'
        },
        {
            "key": '# Endpoints in Transmit Group State',
            "value": '0'
        },
        {
            "key": '# Endpoints not found',
            "value": '5'
        }
    ];

});