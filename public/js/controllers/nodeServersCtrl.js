app.controller('nodeServersCtrl', function ($scope, $state) {
    var vm = this;
    $scope.nodeServerData = [
        {
            "Name" : "Host-1",
            "HyperSprout" : "1",
            "Load" : "0.09%",
            "Status" : ""
        },
        {
            "Name" : "Host-2",
            "HyperSprout" : "1",
            "Load" : "0.09%",
            "Status" : ""
        },
        {
            "Name" : "Host-3",
            "HyperSprout" : "1",
            "Load" : "0.09%",
            "Status" : ""
        }
    ];
    $scope.nodeServerOptions = {
        columnDefs: [
            { field: 'Name' },
            { field: 'HyperSprout' },
            { field: 'Load' },
            { field: 'Status' },
            { field: 'HyperSprouts List', cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.vm.hyperSproutDetail(row.entity)"><i class="fa fa-list"></i></button></div>' }
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
    vm.hyperSproutDetail = function (row) {
        console.log('row.entity', row);
        $state.go('system.nodeStatusOverview.nodeRelays');
    
    }
});