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

app.controller('importConfiguration_meterCtrl', ['$scope', 'fileUpload', '$modalInstance', function ($scope, fileUpload, $modalInstance) {
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

        $scope.imports_meter = [
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
    }]);
