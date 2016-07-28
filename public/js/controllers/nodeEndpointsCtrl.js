app.controller('nodeEndpointsCtrl', function ($scope, $state) {
    var vm = this;
    $scope.nodeEndpointsData = [
        {
            "Meter Serial Number" : "1010"
        },
        {
            "Meter Serial Number" : "101231"
        },
        {
            "Meter Serial Number" : "101786"
        }
    ];
    $scope.nodeEndpointsOptions = {
        columnDefs: [
            { field: 'Meter Serial Number' },
            { field: 'Devices List', cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.vm.deviceDetail(row.entity)"><i class="fa fa-list"></i></button></div>' }
        ],
        data : $scope.nodeEndpointsData,
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
    vm.deviceDetail = function (row) {
        console.log('row.entity', row);
        $state.go('system.nodeStatusOverview.nodeDevices');
    
    }
 
});