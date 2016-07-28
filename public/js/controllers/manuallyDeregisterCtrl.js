app.controller('manuallyDeregisterCtrl', function ($scope, $modalInstance) {
    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
    $scope.manually_deregister = [
        {
            "key": 'File Name',
            "value": 'N/A'
        },
        {
            "key": 'Deregistration Results',
            "value": 'Deregistration Not Performed Yet'
        },
        {
            "key": '# Endpoint to Deregister',
            "value": '0'
        },
        {
            "key": '# Endpoint Deregistered Successfully',
            "value": '0'
        },
        {
            "key": '# Endpoint Aready Registered',
            "value": '0'
        },
        {
            "key": '# Invalid Device Types',
            "value": '0'
        },
        {
            "key": '# Electronic Serial Number Not Found',
            "value": '0'
        },
        {
            "key": '# Invalid Electronic Serial Number',
            "value": '0'
        },
        {
            "key": '# Duplicate endpoints to Deregister',
            "value": '0'
        }
    ];
});