app.controller('groupManagementCtrl', function ($scope, $uibModal) {
    var vm = this;
    $scope.isCollapsed = false;
    $scope.boolEdit = true;
    $scope.dynamicPopover = {
        templateUrl: '/templates/groupSettings.html',
        content: '',
        open: function open() {
            $scope.dynamicPopover.isOpen = true;
        },
        close: function close() {
            $scope.dynamicPopover.isOpen = false;
        }
    };

    $scope.status = {
        isopen: false
    };
    
    
    $scope.groupData = [
        {
            "Group_ID" : "Route 1",
            "Group Type" : "Configuration Group",
            "[M/E/L/T/N]" : "2/4/6/7/8",
            "Archived" : "No",
            "Description" : ""

        },
        {
            "Group_ID" : "Test Only",
            "Group Type" : "Configuration Group",
            "[M/E/L/T/N]" : "2/4/6/7/8",
            "Archived" : "No",
            "Description" : "Testing Create New Meter Configuration"

        },
        {
            "Group_ID" : "Unknown Membership Group",
            "Group Type" : "Unknown Group",
            "[M/E/L/T/N]" : "2/4/6/7/8",
            "Archived" : "No",
            "Description" : "Group of endpoints with an un-known membership state"

        }
    ];
    
    $scope.groupOptions = {
        columnDefs: [
            { field: 'Group_ID', cellTemplate: '<div class="ui-grid-cell-contents"><a class="anchorUIGrid" ng-click="grid.appScope.vm.groupDetails(row)">{{row.entity.Group_ID}} </a> </div>' },
            { field: 'Group Type' },
            { field: '[M/E/L/T/N]' },
            { field: 'Archived' },
            { field: 'Description' },
            { field: 'Action'}
        ],
        data : $scope.groupData,
        width: "*",
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
    
    vm.groupDetails = function (row) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/groupConfigurationDetails_groupManagement.html',
            controller: 'groupConfigurationDetails_groupManagementCtrl',
            size: 'md',
            backdrop  : 'static',
            keyboard  : false
        });
    }
    
    
    $scope.toggled = function (open) {
        $log.log('Dropdown is now: ', open);
    };
    
    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
    
    $scope.openAddEndpoint = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/addEndpoint.html',
            controller: 'addEndpointCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
        $scope.dynamicPopover.isOpen = false;

    };
    
    $scope.openAssignEndpoint = function open(size) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/assignEndpoint.html',
            controller: 'assignEndpointCtrl',
            size: size,
            backdrop  : 'static',
            keyboard  : false
        });
        $scope.dynamicPopover.isOpen = false;

    };

  
});
