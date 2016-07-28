var app = angular.module('dataVINEApp', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ui.grid', 'ngTouch', 'ui.grid.selection', 'ui.grid.exporter', 'ui.grid.resizeColumns', 'ncy-angular-breadcrumb']);

// configure our routes
app.config(function ($stateProvider, $urlRouterProvider) {
    
    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/login");
    
    $stateProvider
       
         //route for the login page
           .state('login', {
        url: '/login',
        templateUrl: 'pages/login.html',
        controller  : 'loginCtrl'
    })
         
         //route for the master page
           .state('master', {
        url: '/master',
        templateUrl: 'pages/homescreen.html',
        controller  : 'homeCtrl'
    })

        //route for the hyperSprout Management
          .state('hyperSprout', {
        abstract: true,
        url: "/hyperSprout",
        templateUrl: "pages/hyperSproutManagement_mainview.html",
    })
        
        //route for the Configuration Management
       .state('hyperSprout.configurationManagement', {
        url: "/configurationManagement",
        templateUrl: "pages/configurationManagement.html",
        controller: 'configurationManagementCtrl'
       
    })
       
       //route for the hyperSprout job status page
          .state('hyperSprout.hyperSproutJobStatus', {
        url: '/hyperSproutJobStatus',
        templateUrl: 'pages/hyperSproutJobStatus.html',
        controller  : 'jobStatusCtrl'
    })

      //route for the security code management page
         .state('hyperSprout.securityCodeManagement', {
        url: '/securityCodeManagement',
        templateUrl: 'pages/securityCodeManagement.html',
        controller  : 'securityCodeManagementCtrl'
    })

     // route for the configurations page
         .state('hyperSprout.configurationManagement.configurations', {
        url: '/configurations',
        views: {
            '@hyperSprout.configurationManagement' : {
                templateUrl: 'pages/configurations.html',
                controller  : 'configurationsCtrl',
                controllerAs : 'vm'
      
            }
        }
    })

     // route for the group management page
         .state('hyperSprout.groupManagement', {
        url: '/groupManagement',
        templateUrl: 'pages/groupManagement.html',
        controller  : 'groupManagementCtrl',
        controllerAs : 'vm'

    })

         
     // route for the firmware management page
         .state('hyperSprout.firmwareManagement', {
        url: '/firmwareManagement',
        templateUrl: 'pages/firmwareManagement.html',
    })

	// route for the downloads page
        .state('hyperSprout.configurationManagement.downloads', {
        url: '/downloads',
        views: {
            '@hyperSprout.configurationManagement' : {
                templateUrl: 'pages/hyperSproutDownloads.html',
                controller  : 'hyperSproutDownloadsCtrl'
            }
        }
    })

	// route for the discrepancies page
        .state('hyperSprout.configurationManagement.discrepancies', {
        url: '/discrepancies',
        views: {
            '@hyperSprout.configurationManagement' : {
                templateUrl: 'pages/tags.html',
                controller  : 'discrepanciesCtrl'
            }
        }
    })


        //meter management controllers//

       //route for the meter Management
          .state('meter', {
        abstract: true,
        url: "/meter",
        templateUrl: "pages/meterManagement_mainview.html",
    })

        //route for the Configuration Management
       .state('meter.configurationManagement', {
        url: "/meterconfigurationManagement",
        templateUrl: "pages/configurationManagement_meter.html",
        controller : 'configurationManagement_meterCtrl'
    })

         // route for the configurations page
        .state('meter.configurationManagement.configurations', {
        url: '/meterconfigurations',
        views: {
            '@meter.configurationManagement' : {
                templateUrl: 'pages/configurations_meter.html',
                controller  : 'configurations_meterCtrl',
            }
        }
    })

         // route for the tag discrepancies page
        .state('meter.configurationManagement.discrepancies', {
        url: '/meterdiscrepancies',
        views: {
            '@meter.configurationManagement' : {
                templateUrl: 'pages/tags_meter.html',
                controller  : 'discrepancies_meterCtrl'
            }
        }
    })

          // route for the downloads page
          .state('meter.configurationManagement.downloads', {
        url: '/meterdownloads',
        views: {
            '@meter.configurationManagement' : {
                templateUrl: 'pages/meterDownloads.html',
                controller  : 'meterDownloadsCtrl'
            }
        }
    })

       // route for the group management page
        .state('meter.groupManagement', {
        url: '/metergroupManagement',
        templateUrl: 'pages/groupManagement_meter.html',
        controller  : 'groupManagement_meterCtrl',
        controllerAs : 'vm'

    })

      //route for the security code management page
         .state('meter.securityCodeManagement', {
        url: '/metersecurityCodeManagement',
        templateUrl: 'pages/securityCodeManagement_meter.html',
        controller  : 'securityCodeManagement_meterCtrl'
    })

              // route for the firmware management page
         .state('meter.firmwareManagement', {
        url: '/meterfirmwareManagement',
        templateUrl: 'pages/firmwareManagement_meter.html',
    })

       //route for the hyperSprout job status page
          .state('meter.JobStatus', {
        url: '/meterJobStatus',
        templateUrl: 'pages/meterJobStatus.html',
        controller  : 'jobStatus_meterCtrl'
    })

  //-------------system Management------------------------//
        //route for the system Management
          .state('system', {
        abstract: true,
        url: "/system",
        templateUrl: "pages/systemManagement_mainview.html",
    })
        
        //route for the Device Management
       .state('system.deviceManagement', {
        url: "/deviceManagement",
        templateUrl: "pages/deviceManagement.html",
        controller  : 'deviceManagementCtrl'
    })

        //route for the servers
       .state('system.deviceManagement.servers', {
                //Servers is changed to HyperSprout in headings
        
        url: "/servers",
        views: {
            '@system.deviceManagement' : {
                templateUrl: "pages/servers.html",
                controller  : 'serversCtrl'
            }
        }
    })

        //route for the Cell Relay 
                   //cell relays is changed to Meters in headings

       .state('system.deviceManagement.relays', {
        url: "/relays",
        views: {
            '@system.deviceManagement' : {
                templateUrl: "pages/relays.html",
                controller  : 'relaysCtrl'
            }
        }
    })

     //route for the network job status
       .state('system.networkJobStatus', {
        url: "/networkJobStatus",
        templateUrl: "pages/networkJobStatus.html",
        controller  : 'networkJobStatusCtrl'
    })


    //route for the dataVine Health
       .state('system.dataVineHealth', {
        url: "/dataVineHealth",
        templateUrl: "pages/dataVineHealth.html",
        controller  : 'dataVineHealthCtrl',
        controllerAs: "vm",
        ncyBreadcrumb: {
            label: 'Servers'
        }
    })

           //route for the node relays 
        .state('system.cellRelays', {
        url: "/cellRelays",
        views: {
            '@system' : {
                templateUrl: "pages/cellRelays.html",
                controller  : 'cellRelaysCtrl',
                controllerAs: "vm",
            }
        }, ncyBreadcrumb: {
            label: 'Meters',
            parent: function ($scope) {
                return $scope.from || 'system.dataVineHealth';
            }
        }
    })

        //route for the node endpoints
        .state('system.cellEndpoints', {
        url: "/cellEndpoints",
        views: {
            '@system' : {
                templateUrl: "pages/cellEndpoints.html",
                controller  : 'cellEndpointsCtrl',
                controllerAs: "vm",
            }
        }, ncyBreadcrumb: {
            label: 'Devices',
            parent: function ($scope) {
                return $scope.from || 'system.cellRelays';
            }
        }
    })


      //route for the device cleanup
       .state('system.endpointCleanup', {
        url: "/deviceCleanup",
        templateUrl: "pages/endpointCleanup.html",
        controller  : 'endpointCleanupCtrl'
    })

      //route for the node status overview
       .state('system.nodeStatusOverview', {
        url: "/nodeStatusOverview",
        templateUrl: "pages/nodeStatusOverview.html",
        controller  : 'nodeStatusOverviewCtrl',
        ncyBreadcrumb: {
            skip: true
           
        }
    })

     //route for the node servers
       .state('system.nodeStatusOverview.nodeServers', {
        url: "/nodeServers",
        templateUrl: "pages/nodeServers.html",
        controller  : 'nodeServersCtrl',
        controllerAs: "vm",
        ncyBreadcrumb: {
            label: 'Servers',
           
        }
    })

        //route for the node relays
        .state('system.nodeStatusOverview.nodeRelays', {
        url: "/nodeRelays",
        views: {
            '@system.nodeStatusOverview' : {
                templateUrl: "pages/nodeRelays.html",
                controller  : 'nodeRelaysCtrl',
                controllerAs: "vm",
            }
        }, ncyBreadcrumb: {
            label: 'HyperSprouts',
            parent: function ($scope) {
                return $scope.from || 'system.nodeStatusOverview.nodeServers';
            }
        }
    })

        //route for the node endpoints
        .state('system.nodeStatusOverview.nodeEndpoints', {
        url: "/nodeEndpoints",
        views: {
            '@system' : {
                templateUrl: "pages/nodeEndpoints.html",
                controller  : 'nodeEndpointsCtrl',
                controllerAs: "vm",
            }
        }, ncyBreadcrumb: {
            label: 'Endpoints',
            parent: function ($scope) {
                return $scope.from || 'system.nodeStatusOverview.nodeRelays';
            }
        }
    })

    //route for the node devices
        .state('system.nodeStatusOverview.nodeDevices', {
        url: "/nodeDevices",
        views: {
            '@system' : {
                templateUrl: "pages/nodeDevices.html",
                controller  : 'nodeDevicesCtrl',
                controllerAs: "vm",
            }
        }, ncyBreadcrumb: {
            label: 'Devices',
            parent: function ($scope) {
                return $scope.from || 'system.nodeStatusOverview.nodeEndpoints';
            }
        }
    })

//-------------TOOLS------------------------//

           //route for the Tools
          .state('tools', {
        abstract: true,
        url: "/tools",
        templateUrl: "pages/tools_mainview.html",
    })
        
        //route for the On Demand Need
       .state('tools.onDemandNeed', {
        url: "/onDemandNeed",
        templateUrl: "pages/onDemandNeed.html",
        controller: 'onDemandNeedCtrl'
       
    })
       
       //route for the Tools Job Status
          .state('tools.toolsJobStatus', {
        url: '/toolsJobStatus',
        templateUrl: 'pages/jobStatus_tools.html',
        controller  : 'toolsJobStatusCtrl'
    })

      //route for the User settings
         .state('tools.userSettings', {
        url: '/userSettings',
        templateUrl: 'pages/userSettings.html',
        controller  : 'userSettingsCtrl'
    })



//-------------ADMINISTRATION------------------------//

           //route for the Administration
          .state('administration', {
        abstract: true,
        url: "/administration",
        templateUrl: "pages/administration_mainview.html",
    })
        
        //route for the Security
       .state('administration.security', {
        url: "/security",
        templateUrl: "pages/security.html",
        controller: 'securityCtrl'
       
    })

         //route for the Security
       .state('administration.defineUsers', {
        url: "/defineUsers",
        templateUrl: "pages/defineUsers.html",
        controller: 'defineUsersCtrl'
       
    })

    //route for reports
    .state('reports', {
        abstract: true,
        url: "/reports",
        templateUrl: "pages/reports_mainview.html"
    })

    //route for Communication Statistics
    .state('reports.communicationStatistics', {
        url: "/communicationStatistics",
        templateUrl: "pages/communicationStatistics.html",
        controller: "communicationStatisticsCtrl"
    })

    //route for Reports DataVine Health
    .state('reports.dataVineHealth', {
        url: "/dataVineHealth",
        templateUrl: "pages/dataVineHealth_reports.html",
        controller: "dataVineHealth_reportsCtrl"
    })

     //route for Battery Life
    .state('reports.batteryLife', {
        url: "/batteryLife",
        templateUrl: "pages/batteryLife.html",
        controller: "batteryLifeCtrl"
    })

     //route for Device Firmware Versions
    .state('reports.deviceFirmwareVersions', {
        url: "/deviceFirmwareVersions",
        templateUrl: "pages/deviceFirmwareVersions.html",
        controller: "deviceFirmwareVersionsCtrl"
    })

    //route for System Updates
    .state('reports.systemUpdates', {
        url: "/systemUpdates",
        templateUrl: "pages/systemUpdates.html",
        controller: "systemUpdatesCtrl"
    })

    //route for Device Registration Status
    .state('reports.deviceRegistrationStatus', {
        url: "/deviceRegistrationStatus",
        templateUrl: "pages/deviceRegistrationStatus.html",
        controller: "deviceRegistrationStatusCtrl"
    })

    //route for System Audit Log
    .state('reports.systemAuditLog', {
        url: "/systemAuditLog",
        templateUrl: "pages/systemAuditLog.html",
        controller: "systemAuditLogCtrl"
    })

});


app.controller('downloadsCtrl', function ($scope) {
});

app.controller('downloads_meterCtrl', function ($scope) {
});

app.controller('dataVINECtrl', function ($scope, $http, $state) {
    
});

app.controller('discrepanciesCtrl', function ($scope) {
});

app.controller('discrepancies_meterCtrl', function ($scope) {
});

app.controller('newConfigCtrl', function ($scope) {
});
