app.controller('dataVineHealthCtrl', function ($scope, $uibModal, $state) {
    var vm = this;
    $scope.nodeServerData = [
        {
            "Name" : "Host-1",
            "# Meters" : "1",
            "Load" : "0.09%",
            "Status" : ""
        },
        {
            "Name" : "Host-2",
            "# Meters" : "1",
            "Load" : "0.09%",
            "Status" : ""
        },
        {
            "Name" : "Host-3",
            "# Meters" : "1",
            "Load" : "0.09%",
            "Status" : ""
        }
    ];
    $scope.nodeServerOptions = {
        columnDefs: [
            { field: 'Name' },
            { field: '# Meters' },
            { field: 'Load' },
            { field: 'Status' },
            { field: 'Server info', cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-default" ng-click="grid.appScope.vm.openServerDetails(row)"><span class="glyphicon glyphicon-info-sign"></span></button></div>' },
            { field: 'Detail View', cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.vm.meterDetail(row.entity)"><i class="fa fa-list"></i></button></div>' }
        ],
        data : $scope.nodeServerData,
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
    vm.meterDetail = function (row) {
        console.log('row.entity', row);
        $state.go('system.cellRelays');
    
    };

    vm.openServerDetails = function open(size) {
        console.log('details link working');
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/dataVINEServerHealthDetails.html',
            controller: 'dataVINEServerHealthDetailsCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
    };
});