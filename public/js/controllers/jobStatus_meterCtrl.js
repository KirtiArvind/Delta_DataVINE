app.controller('jobStatus_meterCtrl', function ($scope, $uibModal) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.statusData = [
        {
            "Job ID" : "1",
            "Description" : "this is Job ID 1",
            "Status" : "In-Progress",
            "Group" : "Group A",
            "Submit Time" : "12:30 pm",
            "% Complete" : "30",
            "Action" : ""
        },
        {
            "Job ID" : "2",
            "Description" : "this is Job ID 2",
            "Status" : "In-Progress",
            "Group" : "Group B",
            "Submit Time" : "12:30 pm",
            "% Complete" : "10",
            "Action" : ""
        }
    ];
    
    
    $scope.statusOptions = {
        columnDefs: [
            { field: 'Job ID' },
            { field: 'Description' },
            { field: 'Status' },
            { field: 'Group' },
            { field: 'Submit Time' },
            { field: '% Complete' },
            { field: 'Action' },
        ],
        data : $scope.statusData,
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
    
    
    $scope.dynamicPopover = {
        templateUrl: '/templates/jobStatusSettings_meter.html',
        
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
    
    $scope.ListOfItems = [{
            isSelected: false,
            desc: "Server Jobs"
        }, {
            isSelected: false,
            desc: "Configuration Jobs"
        }, {
            isSelected: false,
            desc: "Firmware Jobs"
        }, {
            isSelected: false,
            desc: "Interrogation Jobs"
        }, {
            isSelected: false,
            desc: "Other Jobs"
        }
    ];
    
    $scope.AllSelectedItems = false;
    $scope.NoSelectedItems = false;

});

//app.directive('selectAllCheckbox', function () {
//    return {
//        replace: true,
//        restrict: 'E',
//        scope: {
//            checkboxes: '=',
//            allselected: '=allSelected',
//            allclear: '=allClear'
//        },
//        template: '<input type="checkbox" ng-model="master" ng-change="masterChange()">',
//        controller: function ($scope, $element) {
            
//            $scope.masterChange = function () {
//                if ($scope.master) {
//                    angular.forEach($scope.checkboxes, function (cb, index) {
//                        cb.isSelected = true;
//                    });
//                } else {
//                    angular.forEach($scope.checkboxes, function (cb, index) {
//                        cb.isSelected = false;
//                    });
//                }
//            };
            
//            $scope.$watch('checkboxes', function () {
//                var allSet = true,
//                    allClear = true;
//                angular.forEach($scope.checkboxes, function (cb, index) {
//                    if (cb.isSelected) {
//                        allClear = false;
//                    } else {
//                        allSet = false;
//                    }
//                });
                
//                if ($scope.allselected !== undefined) {
//                    $scope.allselected = allSet;
//                }
//                if ($scope.allclear !== undefined) {
//                    $scope.allclear = allClear;
//                }
                
//                $element.prop('indeterminate', false);
//                if (allSet) {
//                    $scope.master = true;
//                } else if (allClear) {
//                    $scope.master = false;
//                } else {
//                    $scope.master = false;
//                    $element.prop('indeterminate', true);
//                }

//            }, true);
//        }
//    };
//});