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

app.controller('assignEndpointCtrl', ['$scope', 'fileUpload',  '$modalInstance' ,'$uibModal', function ($scope, fileUpload, $modalInstance, $uibModal) {
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

        $scope.status = {
            isopen: false
        };
        $scope.openCreateApplicationGroup = function open(size) {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/createApplicationGroup.html',
                controller: 'createApplicationGroupCtrl',
                size: size,
                backdrop  : 'static',
                keyboard  : false
            });
        };
        $scope.uploadFile = function () {
            var file = $scope.myFile;
            console.log('file is ');
            console.dir(file);
            var uploadUrl = "/fileUpload";
            fileUpload.uploadFileToUrl(file, uploadUrl);
        };

        $scope.assignEndpoints = [
            {
                "key": 'File Name',
                "value": 'Valid Endpoint List.txt'
            },
            {
                "key": 'Result',
                "value": 'No Endpoints Assigned'
            },
            {
                "key": '# Endpoint entries',
                "value": '6'
            },
            {
                "key": '# Endpoints Added Successfully',
                "value": '0'
            },
            {
                "key": '# Unknown Endpoint entries',
                "value": '0'
            },
            {
            "key": '# Duplicate Endpoint entries in System',
            "value": '0'
            },
            {
                "key": '# Endpoint At Maximum Number Of Application Groups',
                "value": '0'
            },
            {
                "key": '# Endpoints not a member of Configuration Group',
                "value": '0'
            },
            {
                "key": '# Endpoints not found',
                "value": '5'
            },
            {
                "key": '# Endpoints with Invalid Device Class',
                "value": '0'
            },
            {
                "key": '# Endpoints in transmit Group State',
                "value": '0'
            }
            
        ];

    }]);