app.controller('configurations_meterCtrl', function ($scope, $uibModal) {
    var vm = this;
    // create a message to display in our view
    $scope.isCollapsed = false;
    $scope.boolEdit = true;
    $scope.dynamicPopover = {
        templateUrl: '/templates/settings_MeterConfigurations.html',
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
    
    $scope.today = function () {
        $scope.dt1 = new Date();
    };
    $scope.today();
    
    $scope.clear = function () {
        $scope.dt1 = null;
    };
    
    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };
    
    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };
    
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };
    
    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };
    
    $scope.setDate = function (year, month, day) {
        $scope.dt1 = new Date(year, month, day);
    };
    
    $scope.popup1 = {
        opened: false
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
    $scope.meterconfigurationData = [
        {
            "Name" : "Group1",
            "Description" : "Negative Comparison Group",
            "Device Class" : "2",
            "[M/E/L/T/N]" : "2/4/6/7/8",
            "Version": "1",
            "Edit Time" : "12:30 pm"
        },
        {
            "Name" : "Group2",
            "Description" : "Negative Comparison Group",
            "Device Class" : "2",
            "[M/E/L/T/N]" : "2/4/6/7/8",
            "Version": "5",
            "Edit Time" : "12:30 pm"


        },
        {
            "Name" : "Group3",
            "Description" : "Negative Comparison Group",
            "Device Class" : "2",
            "[M/E/L/T/N]" : "2/4/6/7/8",
            "Version": "1",
            "Edit Time" : "12:30 pm"
        },
        {
            "Name" : "Group4",
            "Description" : "Negative Comparison Group",
            "Device Class" : "2",
            "[M/E/L/T/N]" : "2/4/6/7/8",
            "Version": "5",
            "Edit Time" : "12:30 pm"
        }
    ];
    $scope.meterconfigOptions = {
        columnDefs: [
            { field: 'Name', cellTemplate: '<div class="ui-grid-cell-contents"><a class="anchorUIGrid" ng-click="grid.appScope.nameDetails(row)">{{row.entity.Name}} </a> </div>' },
            { field: 'Description' },
            { field: 'Device Class' },
            { field: '[M/E/L/T/N]' },
            { field: 'Version' },
            { field: 'Edit Time' },
            { field: 'Edit', cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.editConfiguration_meter(row)">  <i class="fa fa-edit"></i></button> </div>', enableColumnMenu: false },
            { field: 'Download', cellTemplate: '<div class="ui-grid-cell-contents"> <button class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.Download(row)"><i class="fa fa-download"></i></button></div>',enableColumnMenu: false }
        ],
        data : $scope.meterconfigurationData,
        enableGridMenu: true,
        //enableColumnMenus:false,
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
    $scope.editConfiguration_meter = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/editConfiguration_meter.html',
            controller: 'editConfiguration_meterCtrl',
            size: 'lg',
            backdrop  : 'static',
            keyboard  : false
        });
    }
    $scope.nameDetails = function (row) {
        //console.log('details link working');
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/groupConfigurationDetails_meter.html',
            controller: 'groupConfigurationDetails_meterCtrl',
            size: 'md',
            backdrop  : 'static',
            keyboard  : false
        });
    }
    $scope.status = {
        isopen: false
    };
    
    $scope.toggled = function (open) {
        $log.log('Dropdown is now: ', open);
    };
    
    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
    
    $scope.openImportConfiguration_Meter = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/importConfiguration_meter.html',
            controller: 'importConfiguration_meterCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
        $scope.dynamicPopover.isOpen = false;
    };
    
    $scope.openNewConfiguration_Meter = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/newConfiguration_meter.html',
            controller: 'newConfiguration_meterCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
        $scope.dynamicPopover.isOpen = false;
    };


});
