app.controller('editConfiguration_meterCtrl', function ($scope, $modalInstance) {
    $scope.model = {
        name: 'Tabs'
    };
    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
    
    //voltage monitor parameters
    
    $scope.phase = {
        "type": "select", 
        "name": "Phase",
        "value": "Phase A", 
        "values": ["Phase A", "Phase B", "Phase C"]
    };
    
    $scope.interval = {
        "type": "select", 
        "name": "Interval",
        "value": "15 minutes", 
        "values": ["1 minute", "5 minutes", "15 minutes", "30 minutes", "60 minutes"]
    };
    $scope.low_Voltage = '80';
    
    $scope.high_Voltage = '120';
    
    //load profile parameters
    
    $scope.quantity1 = {
        "type": "select", 
        "name": "quantity1",
        "value": "None", 
        "values": ["None", "Wh delivered", "Wh received", "VAh delivered Arith", "VAh received Arith", "Wh Net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.quantity2 = {
        "type": "select", 
        "name": "quantity1",
        "value": "None", 
        "values": ["None", "Wh delivered", "Wh received", "VAh delivered Arith", "VAh received Arith", "Wh Net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.quantity3 = {
        "type": "select", 
        "name": "quantity1",
        "value": "None", 
        "values": ["None", "Wh delivered", "Wh received", "VAh delivered Arith", "VAh received Arith", "Wh Net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.quantity4 = {
        "type": "select", 
        "name": "quantity1",
        "value": "None", 
        "values": ["None", "Wh delivered", "Wh received", "VAh delivered Arith", "VAh received Arith", "Wh Net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.interval_Length = {
        "type": "select", 
        "name": "interval_Length",
        "value": "15", 
        "values": ["15", "30", "45", "60"]
    };
    
    $scope.outage_Length = '30';
    
    //register oprations parameters
    
    $scope.demand_Interval = {
        "type": "select", 
        "name": "demand_Interval",
        "value": "15", 
        "values": ["1", "5", "15", "30", "60"]
    };
    
    $scope.subIntervals = {
        "type": "select", 
        "name": "subIntervals",
        "value": "15", 
        "values": ["1", "5", "15", "30", "60"]
    };
    
    $scope.loadPickup = '15';
    
    $scope.power_Outage = '15';
    
    //quantities parameters
    $scope.energy1 = {
        "type": "select", 
        "name": "energy1",
        "value": "None", 
        "values": ["None", "Wh delivered", "Wh received", "VAh delivered Arith", "VAh received Arith", "Wh Net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.energy2 = {
        "type": "select", 
        "name": "energy2",
        "value": "None", 
        "values": ["None", "Wh delivered", "Wh received", "VAh delivered Arith", "VAh received Arith", "Wh Net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.energy3 = {
        "type": "select", 
        "name": "energy3",
        "value": "None", 
        "values": ["None", "Wh delivered", "Wh received", "VAh delivered Arith", "VAh received Arith", "Wh Net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.energy4 = {
        "type": "select", 
        "name": "energy4",
        "value": "None", 
        "values": ["None", "Wh delivered", "Wh received", "VAh delivered Arith", "VAh received Arith", "Wh Net", "Wh Uni-Directional", "Vh"]
    };
    
    $scope.demand = {
        "type": "select", 
        "name": "Max VA delivered Arithv",
        "value": "None", 
        "values": ["Max VA delivered Arith", "Max VA received Arith", "Max W delivered", "Max W received"]
    };
    
    //communication parameters
    $scope.login_attempts_optical = '3';
    
    $scope.login_minutes_optical = '3';
    
    $scope.login_attempts = '3';
    
    $scope.logout_minutes = '3';



});

