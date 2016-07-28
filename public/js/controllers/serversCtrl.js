app.controller('serversCtrl', function ($scope, $uibModal) {      
    $scope.isCollapsed = false;
    $scope.boolEdit = true;
      
    $scope.serversData = [
        {
            "Name" : "Host-1",
            "#Relays" : "1",
            "Load" : "0.003%"
        },
        {
            "Name" : "Host-2",
            "#Relays" : "2",
            "Load" : "0.007%"
        },
        {
            "Name" : "Host-3",
            "#Relays" : "1",
            "Load" : "0.007%"
        }
    ];
    $scope.serverOptions = {
        columnDefs: [
            { field: 'Name', cellTemplate: '<div class="ui-grid-cell-contents"><a class="anchorUIGrid" ng-click="grid.appScope.nameDetails(row)">{{row.entity.Name}} </a> </div>' },
            { field: '#Relays' },
            { field: 'Load' },
            { field: 'Action' }
        ],
        data : $scope.serversData,
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
            templateUrl: '/templates/serverDetails.html',
            controller: 'serverDetailsCtrl',
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
    
     
});
