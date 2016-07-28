app.controller('editConfigurationCtrl', function ($scope, $modalInstance) {
    $scope.subInterval = {
        "type": "select", 
        "name": "Interval",
        "value": "15", 
        "values": ["1", "5", "15", "30", "60"]
    };
    
    $scope.demandIntervalLength = {
        "type": "select", 
        "name": "demandInterval",
        "value": "15", 
        "values": ["1", "5", "15", "30", "60"]
    };
    
    $scope.quantity1 = {
        "type": "select", 
        "name": "quantity1",
        "value": "None", 
        "values": ["None", "Wh Delivered", "Wh Received", "VAh delivered Arith", "VAh received Arith", "Wh net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.quantity2 = {
        "type": "select", 
        "name": "quantity2",
        "value": "None", 
        "values": ["None", "Wh Delivered", "Wh Received", "VAh delivered Arith", "VAh received Arith", "Wh net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.quantity3 = {
        "type": "select", 
        "name": "quantity3",
        "value": "None", 
        "values": ["None", "Wh Delivered", "Wh Received", "VAh delivered Arith", "VAh received Arith", "Wh net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.quantity4 = {
        "type": "select", 
        "name": "quantity4",
        "value": "None", 
        "values": ["None", "Wh Delivered", "Wh Received", "VAh delivered Arith", "VAh received Arith", "Wh net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.phaseSelection = {
        "type": "select", 
        "name": "phaseSelection",
        "value": "Phase A", 
        "values": ["Phase A", "Phase B", "Phase C"]
    };
    
    $scope.voltageIntervalLength = {
        "type": "select", 
        "name": "voltageIntervalLength",
        "value": "15", 
        "values": ["1 minute", "5 minutes", "15 minutes", "30 minutes", "60 minutes"]
    };
    
    $scope.loadPickup = '15';
    $scope.powerOutageRecognition = '15';
    $scope.interval_length = '15';
    $scope.outage_length = '15';
    $scope.lowVoltageDeviation = '80';
    $scope.highVoltageDeviation = '120';

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
});

