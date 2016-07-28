app.controller('configurationsCtrl', function ($scope, $uibModal) {
    var vm = this;
    $scope.isCollapsed = false;
    $scope.boolEdit = true;
    $scope.dynamicPopover = {
        templateUrl: '/templates/settings.html',
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
    $scope.configurationData = [
        {
            "Name" : "TestConfigurations_1",
            "Description" : "abc",
            "Device Class" : "2",
            "[M/E/L/T/N]" : "2/4/6/7/8",
            "Version" : "1",
            "Edit Time" : "12:30 pm"

        },
        {
            "Name" : "TestConfigurations_2",
            "Description" : "abc",
            "Device Class" : "2",
            "[M/E/L/T/N]" : "2/4/6/7/8",
            "Version" : "2",
            "Edit Time" : "12:30 pm"

        },
        {
            "Name" : "TestConfigurations_3",
            "Description" : "test123",
            "Device Class" : "2",
            "[M/E/L/T/N]" : "1/4/5/7/8",
            "Version" : "3",
            "Edit Time" : "2:30 pm"

        }
    ];
    
    $scope.configOptions = {
        columnDefs: [
            { field: 'Name', cellTemplate: '<div class="ui-grid-cell-contents"><a class="anchorUIGrid" ng-click="grid.appScope.vm.nameDetails(row)">{{row.entity.Name}} </a> </div>'},
            { field: 'Description'},
            { field: 'Device Class' },
            { field: '[M/E/L/T/N]' },
            { field: 'Version' },
            { field: 'Edit Time' },
            { field: 'Edit', cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.vm.editConfiguration(row)">  <i class="fa fa-edit"></i></button> </div>' , enableColumnMenu: false},
            { field: 'Download', cellTemplate: '<div class="ui-grid-cell-contents"> <button class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.Download(row)"> <i class="fa fa-download"></i></button></div>', enableColumnMenu: false }
        ],
        data : $scope.configurationData,
        width:"*",
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
    vm.editConfiguration = function (row) {
        //console.log('coming');
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/editConfiguration.html',
            controller: 'editConfigurationCtrl',
            size: 'lg',
            backdrop  : 'static',
            keyboard  : false
        });
    }
    
    vm.nameDetails = function (row) {
        //console.log('details link working');
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/groupConfigurationDetails.html',
            controller: 'groupConfigurationDetailsCtrl',
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
    
    $scope.openImportConfiguration = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/importConfiguration.html',
            controller: 'importConfigurationCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
        $scope.dynamicPopover.isOpen = false;  
    };
    
    $scope.openNewConfiguration = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/newConfiguration.html',
            controller: 'newConfigurationCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
        $scope.dynamicPopover.isOpen = false;

    };

  
});
