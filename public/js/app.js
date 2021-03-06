"use strict";

(function() {

angular.module('gatewaydFidorBridge', [
  'ngRoute', 'deposit'
])
.constant('fidorConfig', {
    "apiUrl" : "http://aps.test.fidor.de",
    "oauthUrl" : "http://aps.test.fidor.de/oauth",
    "clientId" : "0498f82aa89bd9fd",
    "clientSecret" : "88dece6b158944f936ed088cab572378",
    "port": 5000,
    "appUrl"  : "http://192.168.50.30",
})
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/deposit', {
        controller: 'DepositCtrl',
        templateUrl: 'views/deposit.html'
      })
      .otherwise({
        redirectTo: '/deposit'
      })
      ;
}]);

})();
