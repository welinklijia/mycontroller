/*
 * Copyright (C) 2015-2016 Jeeva Kandasamy (jkandasa@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// Declare app level module which depends on views, and components
var myControllerModule = angular.module('myController',[
  'ui.router',
  'ui.bootstrap',
  'ngResource',
  'ngCookies',
  'ui.bootstrap.datetimepicker',
  'base64',
  'colorpicker.module',
  'ngFileSaver',
  'pascalprecht.translate',
  'ngSanitize',
  'patternfly',
  'patternfly.charts',
  'patternfly.select',
  'patternfly.views',
  'frapontillo.bootstrap-switch',
  'xeditable',
  'angularUtils.directives.dirPagination',
]).
config(function($stateProvider, $urlRouterProvider) {
  //For any unmatched url, redirect to /dashboard
  $urlRouterProvider.otherwise('/dashboard');
  
	$stateProvider
    .state('dashboard', {
      url:"/dashboard",
      templateUrl: "partials/dashboard/dashboard.html",
      controller: "DashboardController",
       data: {
        requireLogin: true
      }
    }).state('gatewaysList', {
      url:"/resources/gateways/list",
      templateUrl: "partials/gateways/gateways-list.html",
      controller: "GatewaysController",
       data: {
        requireLogin: true
      }
    }).state('gatewaysAddEdit', {
      url:"/resources/gateways/addedit/:id",
      templateUrl: "partials/gateways/gateway-add-edit.html",
      controller: "GatewaysControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('gatewaysDetail', {
      url:"/resources/gateways/detail/:id",
      templateUrl: "partials/gateways/gateway-detail.html",
      controller: "GatewaysControllerDetail",
       data: {
        requireLogin: true
      }
    }).state('nodesList', {
      url:"/resources/nodes/list/:gatewayId",
      templateUrl: "partials/nodes/nodes-list.html",
      controller: "NodesController",
       data: {
        requireLogin: true
      }
    }).state('nodesAddEdit', {
      url:"/resources/nodes/addedit/:id",
      templateUrl: "partials/nodes/node-add-edit.html",
      controller: "NodesControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('nodesDetail', {
      url:"/resources/nodes/detail/:id",
      templateUrl: "partials/nodes/node-detail.html",
      controller: "NodesControllerDetail",
       data: {
        requireLogin: true
      }
    }).state('sensorsList', {
      url:"/resources/sensors/list/:nodeId",
      templateUrl: "partials/sensors/sensors-list.html",
      controller: "SensorsController",
      data: {
        requireLogin: true
      }
    }).state('sensorsAddEdit', {
      url:"/resources/sensors/addedit/:id",
      templateUrl: "partials/sensors/sensor-add-edit.html",
      controller: "SensorsControllerAddEdit",
      data: {
        requireLogin: true
      }
    }).state('sensorsDetail', {
      url:"/resources/sensors/detail/:id",
      templateUrl: "partials/sensors/sensor-detail.html",
      controller: "SensorsControllerDetail",
      data: {
        requireLogin: true
      }
    }).state('alarmsList', {
      url:"/resources/alarms/list/:resourceType/:resourceId",
      templateUrl: "partials/alarms/alarms-list.html",
      controller: "AlarmsController",
       data: {
        requireLogin: true
      }
    }).state('alarmsAddEdit', {
      url:"/resources/alarms/addedit/:id",
      templateUrl: "partials/alarms/alarm-add-edit.html",
      controller: "AlarmsControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('timersList', {
      url:"/resources/timers/list/:resourceType/:resourceId",
      templateUrl: "partials/timers/timers-list.html",
      controller: "TimersController",
       data: {
        requireLogin: true
      }
    }).state('timersAddEdit', {
      url:"/resources/timers/addedit/:id",
      templateUrl: "partials/timers/timer-add-edit.html",
      controller: "TimersControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('urlResourcesGroupList', {
      url:"/resources/groups/list/:resourceType/:resourceId",
      templateUrl: "partials/resources-group/resources-group-list.html",
      controller: "ResourcesGroupController",
       data: {
        requireLogin: true
      }
    }).state('urlResourcesGroupAddEdit', {
      url:"/resources/groups/addedit/:id",
      templateUrl: "partials/resources-group/resources-group-add-edit.html",
      controller: "ResourcesGroupControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('urlResourcesGroupMapList', {
      url:"/resources/groups/map/list/:id",
      templateUrl: "partials/resources-group/resources-group-map-list.html",
      controller: "ResourcesGroupMapController",
       data: {
        requireLogin: true
      }
    }).state('urlResourcesGroupMapAddEdit', {
      url:"/resources/groups/map/addedit/:groupId/:id",
      templateUrl: "partials/resources-group/resources-group-map-add-edit.html",
      controller: "ResourcesGroupMapControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('urlActionBoardSensorsList', {
      url:"/actionboard/sensorsaction/list",
      templateUrl: "partials/action-board/sensors-action-list.html",
      controller: "SensorsActionControllerList",
       data: {
        requireLogin: true
      }
    }).state('urlForwardPayloadList', {
      url:"/resources/forwardpayload/list/:sensorId",
      templateUrl: "partials/forward-payload/forward-payload-list.html",
      controller: "ForwardPayloadController",
       data: {
        requireLogin: true
      }
    }).state('urlForwardPayloadAddEdit', {
      url:"/resources/forwardpayload/addedit/:id",
      templateUrl: "partials/forward-payload/forward-payload-add-edit.html",
      controller: "ForwardPayloadControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('urlFirmwaresList', {
      url:"/resources/firmwares/list",
      templateUrl: "partials/firmwares/firmwares-list.html",
      controller: "FirmwaresController",
       data: {
        requireLogin: true
      }
    }).state('urlFirmwaresAddEdit', {
      url:"/resources/firmwares/addedit/:id",
      templateUrl: "partials/firmwares/firmwares-add-edit.html",
      controller: "FirmwaresControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('urlFirmwaresTypeList', {
      url:"/resources/firmwares/type/list",
      templateUrl: "partials/firmwares/firmwares-type-list.html",
      controller: "FirmwaresTypeController",
       data: {
        requireLogin: true
      }
    }).state('urlFirmwaresTypeAddEdit', {
      url:"/resources/firmwares/type/addedit/:id",
      templateUrl: "partials/firmwares/firmwares-type-add-edit.html",
      controller: "FirmwaresTypeControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('urlFirmwaresVersionList', {
      url:"/resources/firmwares/version/list",
      templateUrl: "partials/firmwares/firmwares-version-list.html",
      controller: "FirmwaresVersionController",
       data: {
        requireLogin: true
      }
    }).state('urlFirmwaresVersionAddEdit', {
      url:"/resources/firmwares/version/addedit/:id",
      templateUrl: "partials/firmwares/firmwares-version-add-edit.html",
      controller: "FirmwaresVersionControllerAddEdit",
       data: {
        requireLogin: true
      }
    }).state('urlResourcesLogs', {
      url:"/resources/logs/:resourceType/:resourceId",
      templateUrl: "partials/resources-logs/resources-logs-list.html",
      controller: "ResourcesLogsController",
      data: {
        requireLogin: true
      }
    }).state('urlResourcesPurge', {
      url:"/resources/logs/purge",
      templateUrl: "partials/resources-logs/resources-logs-purge.html",
      controller: "ResourcesLogsPurgeController",
      data: {
        requireLogin: true
      }
    })
    
    
    
    .state('urlStatusSystem', {
      url:"/status/system",
      templateUrl: "partials/status/system-status.html",
      controller: "StatusSystemController",
      data: {
        requireLogin: true
      }
    })
    
    
    .state('urlSettingsSystem', {
      url:"/settings/system",
      templateUrl: "partials/settings/settings-system.html",
      controller: "SettingsSystemController",
       data: {
        requireLogin: true
      }
    }).state('urlSettingsUnits', {
      url:"/settings/units",
      templateUrl: "partials/settings/settings-units.html",
      controller: "SettingsUnitsController",
       data: {
        requireLogin: true
      }
    }).state('urlSettingsNotifications', {
      url:"/settings/notifications",
      templateUrl: "partials/settings/settings-notifications.html",
      controller: "SettingsNotificationsController",
       data: {
        requireLogin: true
      }
    }).state('urlSettingsMySensors', {
      url:"/settings/mysensors",
      templateUrl: "partials/settings/settings-mysensors.html",
      controller: "SettingsSystemMySensors",
       data: {
        requireLogin: true
      }
    }).state('urlSettingsVariablesMapperList', {
      url:"/settings/variablesmapper/list",
      templateUrl: "partials/variables-mapper/variables-mapper-list.html",
      controller: "VariablesMapperListController",
       data: {
        requireLogin: true
      }
    }).state('urlSettingsVariablesMapperEdit', {
      url:"/settings/variablesmapper/edit/:sensorType",
      templateUrl: "partials/variables-mapper/variables-mapper-edit.html",
      controller: "VariablesMapperEditController",
       data: {
        requireLogin: true
      }
    })
    
    
    
    
    .state('users', {
      url:"/settings/users",
      templateUrl: "partials/users/users.html",
      controller: "UsersController",
       data: {
        requireLogin: true
      }
    }).state('charts', {
      url:"/charts/:sensorId",
      templateUrl: "partials/charts/lineChart.html",
      controller: "ChartsController",
       data: {
        requireLogin: true
      }
    }).state('sensorlog', {
      url:"/sensorlog/:id",
      templateUrl: "partials/sensorLogs/sensorsLog.html",
      controller: "SensorLogController",
       data: {
        requireLogin: true
      }
    }).state('forwardPayload', {
      url:"/forwardPayload/:id",
      templateUrl: "partials/forwardPayload/forwardPayload.html",
      controller: "ForwardPayloadController",
       data: {
        requireLogin: true
      }
    }).state('uidtag', {
      url:"/uidtag",
      templateUrl: "partials/uidTag/uidTag.html",
      controller: "UidTagController",
       data: {
        requireLogin: true
      }
    }).state('sendRawMessage', {
      url:"/utils/sendRawMessage",
      templateUrl: "partials/rawMessage/rawMessage.html",
      controller: "RawMessageController",
       data: {
        requireLogin: true
      }
    }).state('gatewaystatus', {
      url:"/status/gatewaystatus",
      templateUrl: "partials/status/gatewayStatus.html",
      controller: "GatewayStatusController",
       data: {
        requireLogin: true
      }
    }).state('firmware', {
      url:"/utils/firmware",
      templateUrl: "partials/firmwares/firmware.html",
      controller: "FirmwareController",
       data: {
        requireLogin: true
      }
    }).state('firmwareType', {
      url:"/utils/firmwareType",
      templateUrl: "partials/firmwares/firmwareType.html",
      controller: "FirmwareTypeController",
       data: {
        requireLogin: true
      }
    }).state('firmwareVersion', {
      url:"/utils/firmwareVersion",
      templateUrl: "partials/firmwares/firmwareVersion.html",
      controller: "FirmwareVersionController",
       data: {
        requireLogin: true
      }
    }).state('login', {
      url:"/login",
      templateUrl: "partials/authentication/login.html",
      controller: "LoginController",
      data: {
        requireLogin: false
      }
    });
});


//McNavCtrl
myControllerModule.controller('McNavBarCtrl', function($scope, $location, $translate, $rootScope, about, TypesFactory) {
    $scope.isCollapsed = true;
    $scope.about = about;
    $scope.languages = TypesFactory.getLanguages();
    $scope.languageId = about.languageId;
   
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
    $scope.isStartsWith = function (viewLocation) { 
        return $location.path().indexOf(viewLocation) === 0;
    };
    
    $scope.isAuthenticated = function () { 
        return $rootScope.globals.currentUser;
    };
    
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
      $scope.languageId = langKey;
    };
    
    $scope.isLangActive = function(langKey){
      return angular.equals(langKey, $translate.use());
    }
});

myControllerModule.run(function ($rootScope, $state, $location, $cookieStore, $http, about, $translate, editableOptions) {
  
  // keep user logged in after page refresh
  $rootScope.globals = $cookieStore.get('globals') || {};
  var mcabout = $cookieStore.get('mcabout') || {};
  about.timezone = mcabout.timezone;
  about.timezoneMilliseconds = mcabout.timezoneMilliseconds;
  about.timezoneString = mcabout.timezoneString;
  about.systemDate = mcabout.systemDate;
  about.appName = mcabout.appName;
  about.appVersion = mcabout.appVersion;
  about.languageId = mcabout.languageId;
  about.language = mcabout.language;
  about.dateFormat = mcabout.dateFormat;
  $translate.use(about.languageId);
  
  if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
  }

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    //alert(angular.toJson(toState));
    if(toState.name.indexOf('login') === 0){
        angular.element( document.querySelector( '#rootId' ) ).addClass( "login-pf" );
        angular.element( document.querySelector( '#rootView' ) ).removeClass( "container-fluid top-buffer" );
    }else{
      angular.element( document.querySelector( '#rootId' ) ).removeClass( "login-pf" );
      angular.element( document.querySelector( '#rootView' ) ).addClass( "container-fluid top-buffer" );
    }
    var requireLogin = toState.data.requireLogin;
    // redirect to login page if not logged in
    if (requireLogin && !$rootScope.globals.currentUser) {
      event.preventDefault();
      return $state.go('login');
    }
  });

  //update xeditable theme
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'

});

myControllerModule.controller('LoginController',
    function ($state, $scope, $rootScope, AuthenticationService, alertService, StatusFactory, displayRestError, about, $cookieStore, $translate, $filter) {
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    StatusFactory.about(function(response) {
                        about.timezone = response.timezone;
                        about.timezoneMilliseconds = response.timezoneMilliseconds;
                        about.timezoneString = response.timezoneString;
                        about.systemDate = response.systemDate;
                        about.appName = response.appName;
                        about.appVersion = response.appVersion;
                        about.languageId = response.languageId;
                        about.language = response.language;
                        about.dateFormat = response.dateFormat;
                        about.timeFormat = response.timeFormat;
                        $cookieStore.put('mcabout', about);
                        $translate.use(about.languageId);
                    },function(error){
                      displayRestError.display(error);            
                    });
                    
          alertService.success($filter('translate')('SYSTEM.LOGIN_NOTIFY_SUCCESS'));
                    $state.go('dashboard'); 
                } else {
          alertService.danger($filter('translate')('SYSTEM.LOGIN_NOTIFY_INCORRECT'));
                    $scope.dataLoading = false;
                }
            });
        };
    });
    
myControllerModule.filter('millSecondsToTimeString', function() {
  return function(millseconds) {
    var seconds = Math.floor(millseconds / 1000);
    var tmpSeconds = seconds % 60;
    var days = Math.floor(seconds / 86400);
    var hours = Math.floor((seconds % 86400) / 3600);
    var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    var timeString = '';
    if(days > 0){
      timeString += (days > 1) ? (days + " days ") : (days + " day ");
    }
    if(hours >0){
      timeString += (hours > 1) ? (hours + " hours ") : (hours + " hour ");
    }
    if(minutes > 0){
      timeString += (minutes >1) ? (minutes + " minutes ") : (minutes + " minute ");
    }
    if(tmpSeconds >= 0){
      timeString += (tmpSeconds >1) ? (tmpSeconds + " seconds ") : (tmpSeconds + " second ");
    }
    return timeString;
  }
});    

myControllerModule.filter('byteToMBsizeConvertor', function() {
  return function(sizeInByte) {
    if(sizeInByte < 0){
      return "n/a";
    }
    return Math.floor(sizeInByte /(1024 * 1024)) + " MB";
  }
});

myControllerModule.filter('mcResourceRepresentation', function() {
  return function(text){
    if(text === undefined){
      return undefined;
    }
    return text.replace(/>>/g, '<i class="fa fa-chevron-right"></i>')
               .replace(/RG:/g, '<i class="pficon pficon-replicator fa-lg"></i> ')
               .replace(/G:/g, '<i class="fa fa-plug"></i> ')
               .replace(/N:/g, '<i class="fa fa-sitemap"></i> ')
               .replace(/S:/g, '<i class="fa fa-eye"></i> ')
               .replace(/SV:/g, '');
  }
});


myControllerModule.filter('mcHtml', function($sce) {
    return function(htmlText) {
       return $sce.trustAsHtml(htmlText);
       //return htmlText
    };
});


myControllerModule.value("about", {
    timezone: '-',
    timezoneString: '-',
    systemDate: '-',
    appVersion:'-',
    appName: '-',
    languageId: 'en_us',
    language: 'English(US)',
    dateFormat: 'MMM d, y hh:mm:ss a',
    timeFormat: 'hh:mm:ss a',
    //URLs
    urlGatewaysList: '#/resources/gateways/list',
    urlGatewaysAddEdit: '#/resources/gateways/addedit',
    urlGatewaysDetail: '#/resources/gateways/detail',
    urlNodesList: '#/resources/nodes/list',
    urlNodesAddEdit: '#/resources/nodes/addedit',
    urlNodesDetail: '#/resources/nodes/detail',
    urlSensorsList: '#/resources/sensors/list',
    urlSensorsAddEdit: '#/resources/sensors/addedit',
    urlSensorsDetail: '#/resources/sensors/detail',
    urlAlarmsList: '#/resources/alarms/list',
    urlAlarmsAddEdit: '#/resources/alarms/addedit',
    urlTimersList: '#/resources/timers/list',
    urlTimersAddEdit: '#/resources/timers/addedit',
    urlResourcesGroupList: '#/resources/groups/list',
    urlResourcesGroupAddEdit: '#/resources/groups/addedit',
    urlResourcesGroupMapList: '#/resources/groups/map/list',
    urlResourcesGroupMapAddEdit: '#/resources/groups/map/addedit',
    urlActionBoardSensorsList: '#/actionboard/sensorsaction/list',
    urlForwardPayloadList: '#/resources/forwardpayload/list',
    urlForwardPayloadAddEdit: '#/resources/forwardpayload/addedit',
    urlFirmwaresList: '#/resources/firmwares/list',
    urlFirmwaresAddEdit: '#/resources/firmwares/addedit',
    urlFirmwaresTypeAddEdit: '#/resources/firmwares/type/addedit',
    urlFirmwaresTypeList: '#/resources/firmwares/type/list',
    urlFirmwaresVersionAddEdit: '#/resources/firmwares/version/addedit',
    urlFirmwaresVersionList: '#/resources/firmwares/version/list',
    urlResourcesLogsList: '#/resources/logs',
    urlResourcesLogsPurge: '#/resources/logs/purge',
    urlStatusSystem: '#/status/system',
    urlSettingsSystem: '#/settings/system',
    urlSettingsUnits: '#/settings/units',
    urlSettingsNotifications: '#/settings/notifications',
    urlSettingsMySensors: '#/settings/mysensors',
    urlSettingsVariablesMapperList: '#/settings/variablesmapper/list',
    urlSettingsVariablesMapperEdit: '#/settings/variablesmapper/edit',
});

//FooterCtrl
myControllerModule.controller('FooterCtrl', function($scope, about) {
  //about, Timezone, etc.,
  $scope.about = about;
});

/** 
 * i18n Language support
 * */
 
myControllerModule.config(function($translateProvider) {
  // Enable escaping of HTML
  //$translateProvider.useSanitizeValueStrategy('sanitize');
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.useStaticFilesLoader({
    prefix: 'languages/mc_locale_gui-',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('en_us');
  
});



//Items Delete Modal
myControllerModule.controller('ControllerDeleteModal', function ($scope, $uibModalInstance, $sce) {
  $scope.header = "Delete items";
  $scope.deleteMsg = $sce.trustAsHtml("You are about to delete a Sensor"
    +"<br>Deletion process will remove complete trace of this resource!" 
    +"<br>Click 'Delete' to proceed.");
  $scope.remove = function() {
    $uibModalInstance.close();
  };
  $scope.cancel = function () { $uibModalInstance.dismiss('cancel'); }
});

