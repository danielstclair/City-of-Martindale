angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	});

	$urlRouterProvider.otherwise('/home');
});
