app.controller('discrepancies_meterCtrl', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.tagData = [
        {
            "Serial Number" : "1",
            "Configuration Tag" : "Tag1",
            "Device Class" : "2",
            "Discrepent Tag" : "Tag-Unknown",
            "First Found Time" : "12:30 pm",
            "Last Found Time" : "12:30 pm",
            "Corrected Time" : "12:30 pm"
        },
        {
            "Serial Number" : "2",
            "Configuration Tag" : "Tag2",
            "Device Class" : "2",
            "Discrepent Tag" : "Tag-Known",
            "First Found Time" : "12:30 pm",
            "Last Found Time" : "12:30 pm",
            "Corrected Time" : "12:30 pm"
        }
    ];
    
   
    $scope.tagOptions = {
        columnDefs: [
            { field: 'Serial Number' },
            { field: 'Configuration Tag' },
            { field: 'Discrepent Tag' },
            { field: 'First Found Time' },
            { field: 'Last Found Time' },
            { field: 'Corrected Time' },
        ],
        data : $scope.tagData,
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
        templateUrl: '/templates/tagSettings_meter.html',
        
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
});