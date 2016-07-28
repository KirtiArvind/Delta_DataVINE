app.controller('relaysCtrl', function ($scope, $uibModal) {
    
    $scope.isCollapsed = false;
    $scope.boolEdit = true;
    $scope.dynamicPopover = {
        templateUrl: '/templates/relaySettings.html',
        content: '',
        open: function open() {
            $scope.dynamicPopover.isOpen = true;
        },
        close: function close() {
            $scope.dynamicPopover.isOpen = false;
        }
    };
    
    $scope.relaysData = [
        {
            "SerialNumber" : "TestRelay1",
            "Hardware Version" : "7.777",
            "Load" : "0.005%",
            "Registered" : "Yes"
        },
        {
            "SerialNumber" : "TestRelay2",
            "Hardware Version" : "8.777",
            "Load" : "0.005%",
            "Registered" : "Yes"
        },
        {
            "SerialNumber" : "TestRelay3",
            "Hardware Version" : "7.777",
            "Load" : "0.005%",
            "Registered" : "No"
        }
    ];
    $scope.relaysOptions = {
        columnDefs: [
            { field: 'SerialNumber', cellTemplate: '<div class="ui-grid-cell-contents"><a class="anchorUIGrid" ng-click="grid.appScope.nameDetails(row)">{{row.entity.SerialNumber}} </a> </div>' },
            { field: 'Hardware Version' },
            { field: 'Load' },
            { field: 'Registered' },
            { field: 'Action' }
        ],
        data : $scope.relaysData,
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
    
    
    $scope.nameDetails = function (row) {
        //console.log('details link working');
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/relayDetails.html',
            controller: 'relayDetailsCtrl',
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
    
        $scope.openAddRelays = function open(size) {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/addRelaysToSystem.html',
                controller: 'addRelaytoSystemCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
        $scope.dynamicPopover.isOpen = false;

        };
});
