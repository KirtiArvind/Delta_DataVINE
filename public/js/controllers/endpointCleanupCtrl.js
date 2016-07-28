app.controller('endpointCleanupCtrl', function ($scope, $uibModal) {
    $scope.cleanupData = [
        {
            "Serial Number" : "1",
            "Status" : "Tag-Unknown",
            "Last Deregistered Time " : "12:30 pm",
            "Relay" : "12:30 pm",
            "Server Name" : "Config2",

        },
        {
            "Serial Number" : "1",
            "Status" : "Tag-Unknown",
            "Last Deregistered Time " : "12:30 pm",
            "Relay" : "12:30 pm",
            "Server Name" : "Config2",
        }
    ];
    
    
    $scope.cleanupOptions = {
        columnDefs: [
            { field: 'Serial Number' },
            { field: 'Status' },
            { field: 'Last Deregistered Time' },
            { field: 'Relay' },
            { field: 'Server Name' },
            { field: 'Action' }
        ],
        //, cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.editConfiguration_meter(row)">  <i class="fa fa-edit"></i></button> <button class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.Download(row)"> <i class="fa fa-download"></i></button></div>' 
        data : $scope.cleanupData,
        enableGridMenu: true,
        enableSelectAll: true,
        exporterCsvFilename: 'myFile.csv',
        exporterPdfDefaultStyle: { fontSize: 9 },
        exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
        exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
        exporterPdfFooter: function (currentPage, pageCount) {
            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
        },
        exporterPdfCustomFormatter: function (docDefinition) {
            docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
            docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
            return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth: 500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
        }
    };
    
    $scope.isCollapsed = false;
    $scope.boolEdit = true;
    $scope.dynamicPopover = {
        templateUrl: '/templates/cleanup_settings.html',
        content: '',
        open: function open() {
            $scope.dynamicPopover.isOpen = true;
        },
        close: function close() {
            $scope.dynamicPopover.isOpen = false;
        }
    };
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();
    
    $scope.clear = function () {
        $scope.dt = null;
    };
    
    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };
      
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };
    
    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };
    
    
    $scope.popup2 = {
        opened: false
    };
    
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];
    
    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);
            
            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);
                
                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
        
        return '';
    }
    $scope.status = {
        isopen: false
    };
    
    $scope.mytime = new Date();
    
    $scope.hstep = 1;
    $scope.mstep = 1;
    
    $scope.ismeridian = true;
    $scope.toggleMode = function () {
        $scope.ismeridian = !$scope.ismeridian;
    };
    
    $scope.ListOfItems = [{
            isSelected: false,
            desc: "Failed Authentication"
        }, {
            isSelected: false,
            desc: "Not Yet Registered"
        }, {
            isSelected: false,
            desc: "Deregistered"
        }
    ];
    
    $scope.AllSelectedItems = false;
    $scope.NoSelectedItems = false;
    
    //$scope.cleanupSelected = function open(size) {
    //    var modalInstance = $uibModal.open({
    //        templateUrl: '/templates/downloadConfiguration.html',
    //        controller: 'downloadConfigurationCtrl',
    //        size: size
    //    });
    //};
    
    $scope.manuallyDeregister = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/manuallyDeregister.html',
            controller: 'manuallyDeregisterCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
        $scope.dynamicPopover.isOpen = false;

    };

    $scope.status = {
        isopen: false
    };
});
