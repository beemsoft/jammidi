(function () {
  angular.module(
    "app",
    [
      "app.controllers",
      "app.services",
      "ngResource",
      "ngRoute",
      "ngCookies"
    ])
    .config(config)
    .run(run);

  angular.module("app.controllers", []);
  angular.module("app.services", []);

  config.$inject = ['$routeProvider'];
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeController',
        templateUrl: 'home/home.view.html',
        controllerAs: 'vm'
      })

      .when('/login', {
        controller: 'LoginController',
        templateUrl: 'login/login.view.html',
        controllerAs: 'vm'
      })

      .when('/register', {
        controller: 'RegisterController',
        templateUrl: 'register/register.view.html',
        controllerAs: 'vm'
      })

      .when('/update', {
        controller: 'UpdateUserController',
        templateUrl: 'update/update.view.html',
        controllerAs: 'vm'
      })

      .otherwise({redirectTo: '/login'});
  }

  run.$inject = [
    '$rootScope',
    '$location',
    '$cookieStore',
    '$http'
  ];

  function run($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = $.inArray($location.path(), ['/login', '/register', 'update']) === -1;
      var loggedIn = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/login');
      }
    });
  }
})();