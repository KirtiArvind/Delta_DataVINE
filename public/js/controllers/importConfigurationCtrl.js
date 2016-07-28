app.directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                
                
                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }]);

app.service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function (file, uploadUrl) {
            var fd = new FormData();
            fd.append('file', file);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            })
        .success(function ($scope) {
                $scope.message = "File uploaded";
            })
        .error(function () {
            });
        }
    }]);

app.controller('importConfigurationCtrl', ['$scope', 'fileUpload', '$modalInstance', function ($scope, fileUpload, $modalInstance) {
        $scope.imports = [
            {
                "key": 'Configuration File Name',
                "value": 'N/A'
            },
            {
                "key": 'Configuration Group',
                "value": 'N/A'
            },
            {
                "key": 'Configuration Group Version',
                "value": 'N/A'
            },
            {
                "key": 'Import Result',
                "value": 'Configuration Not Imported Yet'
            }
        ];
        //$scope.imports = [];
        //$scope.imports[0] = {};
        //$scope.imports[0].key = 'Configuration File Name';
        //$scope.imports[0].value = 'N/A';
        //$scope.imports[1].key = 'Configuration Group';
        //$scope.imports[0].value = 'N/A';
        //$scope.imports[0].key = 'Configuration File Name';
        //$scope.imports[0].value = 'N/A';
        //$scope.imports[0].key = 'Import Result';
        //$scope.imports[4].value = '';
        //$scope.imports = {};
        //$scope.imports['Configuration File Name'] = {};
        //$scope.imports['Configuration File Name'] = 'N/A';
        //$scope.imports['Configuration File Name2'] = {};
        //$scope.imports['Configuration File Name2'] = 'BBB';
        //$scope.imports[0].key = 'Configuration File Name';
        //$scope.imports[0].value = 'N/A';
        //$scope.imports[1].key = 'Configuration Group';
        //$scope.imports[0].value = 'N/A';
        //$scope.imports[0].key = 'Configuration File Name';
        //$scope.imports[0].value = 'N/A';
        //$scope.imports[0].key = 'Import Result';
        //$scope.imports[4].value = '';

        console.log('import coming');
        $scope.uploadFile = function () {
            var file = $scope.myFile;
            console.log('file is ');
            console.dir(file);
            var uploadUrl = "/fileUpload";
            fileUpload.uploadFileToUrl(file, uploadUrl);
        };
    
        $scope.cancel = function () {
            $modalInstance.dismiss();
        };

        
    }]);
