app.controller('nodeRelaysCtrl', function ($scope, $state, $uibModal) {
    var vm = this;
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
    $scope.nodeRelaysData = [
        {
            "SerialNumber" : "M-001",
            "Meters" : "1",
            "Load" : "0.005%",
            "Status" : ""
        },
        {
            "SerialNumber" : "M-002",
            "Meters" : "2",
            "Load" : "0.005%",
            "Status" : ""
        },
        {
            "SerialNumber" : "M-003",
            "Meters" : "3",
            "Load" : "0.005%",
            "Status" : ""
        }
    ];
    $scope.nodeRelaysOptions = {
        columnDefs: [
            { field: 'SerialNumber' },
            { field: 'Meters' },
            { field: 'Load' },
            { field: 'Status' },
            { field: 'HyperSprout Info', cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-default" ng-click="grid.appScope.vm.openHyperSproutDetails(row)"><span class="glyphicon glyphicon-info-sign"></span></button></div>' },
            { field: 'Endpoints List' ,cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-default" ng-click="grid.appScope.vm.endpointsDetails(row.entity)"><i class="fa fa-list"></i></button></div>' }
        ],
        data : $scope.nodeRelaysData,
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
  
    vm.endpointsDetails = function (row) {
        console.log('row.entity', row);
        $state.go('system.nodeStatusOverview.nodeEndpoints');
    
    }

    vm.openHyperSproutDetails = function open(size) {
        console.log('details link working');
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/nodeHyperSproutDetails.html',
            controller: 'nodeHyperSproutDetailCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
    };
  
});