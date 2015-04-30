angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'HomeCtrl'
	});

		.state('events', {
		url: '/events',
		templateUrl: 'templates/events.html',
		controller: 'EventsCtrl'
	});

		.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html',
		controller: 'AboutCtrl'
	});

		.state('lifestyle', {
		url: '/lifestyle',
		templateUrl: 'templates/lifestyle.html',
		controller: 'LifestyleCtrl'
	});

		.state('churches', {
		url: '/churches',
		templateUrl: 'templates/churches.html',
		controller: 'ChurchesCtrl'
	});

		.state('businesses', {
		url: '/businesses',
		templateUrl: 'templates/businesses.html',
		controller: 'BusinessesCtrl'
	});

		.state('cityinfo', {
		url: '/cityinfo',
		templateUrl: 'templates/cityinfo.html',
		controller: 'CityInfoCtrl'
	});

		.state('contact', {
		url: '/contact',
		templateUrl: 'templates/contact.html',
		controller: 'ContactCtrl'
	});

		.state('map', {
		url: '/map',
		templateUrl: 'templates/map.html',
		controller: 'MapCtrl'
	});

		.state('history', {
		url: '/history',
		templateUrl: 'templates/history.html',
		controller: 'HistoryCtrl'
	});

	$urlRouterProvider.otherwise('/home');
});
