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

app.controller('addEndpointCtrl', ['$scope', 'fileUpload', '$modalInstance', function ($scope, fileUpload, $modalInstance) {
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

        $scope.addEndpoints = [
            {
                "key": 'File Name',
                "value": 'N/A'
            },
            {
                "key": 'Result',
                "value": 'Endpoint not added to system yet'
            },
            {
                "key": '# Endpoint Entries',
                "value": '0'
            },
            {
                "key": '# Endpoints Added Successfully',
                "value": '0'
            },
            {
                "key": '# Unknown Device Class',
                "value": '0'
            },
            {
                "key": '# Invalid Electronic Serial Number',
                "value": '0'
            },
            {
                "key": '# Duplicate Endpoint entries in System',
                "value": '0'
            }
        ];

    }]);