app.controller('loginCtrl', function ($scope, $http, $state) {
   
    
    $scope.loginForm = function () {
        var loginUrl;
        $http.get('/configuration.json')
        .success(function (data) {
            loginUrl = data.protocol + "://" + data.ip + ":" + data.port + "/";
            console.log(loginUrl);
            var param = JSON.stringify({
                userName: "admin@gmail.com" ,
                password: "pwd"
            });
            $http.post(data.endpoint.login, param)
        .success(function (data) {
            if (data.userName === 'admin@gmail.com' && data.password === 'pwd') {
                //alert('success');
                $state.go('master');
            }
            else {
                alert('Username or password incorrect');
            }
});
            
        });
            
    };
      
   
});