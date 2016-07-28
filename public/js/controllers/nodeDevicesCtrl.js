app.controller('nodeDevicesCtrl', function ($scope, $state, $uibModal) {
    var vm = this;
    $scope.nodeDevicesData = [
        {
            "SerialNumber" : "M-001",
            "MAC Address" : "17667894768978967",
            "Last Modified Time" : "30/06/2016"
        },
        {
            "SerialNumber" : "M-002",
            "MAC Address" : "265465435465464",
            "Last Modified Time" : "30/06/2016"
        },
        {
            "SerialNumber" : "M-003",
            "MAC Address" : "6546486489656",
            "Last Modified Time" : "30/06/2016"
        }
    ];
    $scope.nodeDevicesOptions = {
        columnDefs: [
            { field: 'SerialNumber' },
            { field: 'MAC Address' },
            { field: 'Last Modified Time' },
            { field: 'Device Info' , cellTemplate: '<div class="ui-grid-cell-contents"><button type="button" class="btn btn-xs btn-primary cellBtn" ng-click="grid.appScope.vm.openDeviceDetails(row)"><i class="glyphicon glyphicon-info-sign"></i></button></div>' }
        ],
        data : $scope.nodeDevicesData,
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

    vm.openDeviceDetails = function open(size) {
        console.log('details link working');
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/nodeDeviceDetails.html',
            controller: 'nodeDeviceDetailsCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
    };

});