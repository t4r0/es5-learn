export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('otro', {
      url: '/otro',
      component: 'otro'
    })
    .state('otro.algo', {
      url: '/otro/algo',
      component: 'algo'
    });
}
