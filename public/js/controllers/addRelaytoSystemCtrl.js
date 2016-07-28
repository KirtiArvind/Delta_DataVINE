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

app.controller('addRelaytoSystemCtrl', ['$scope', 'fileUpload', '$modalInstance', function ($scope, fileUpload, $modalInstance) {
        console.log('add relay coming');
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
        $scope.addRelay = [
            {
                "key": 'File Name',
                "value": 'N/A'
            },
            {
                "key": 'Results',
                "value": 'Meter not added yet'
            },
            {
                "key": '# Meters Entries',
                "value": 'N/A'
            },
            {
                "key": '# Meters Added Successfully',
                "value": 'N/A'
            },
            {
                "key": '# Unknown Device Class',
                "value": 'N/A'
            },
            {
                "key": '# Invalid Electronic Serial Number',
                "value": 'N/A'
            },
            {
                "key": '# Failed Meters',
                "value": 'N/A'
            },
            {
                "key": '# Duplicate Meter Entries in System',
                "value": 'N/A'
            }

        ];

    }]);
