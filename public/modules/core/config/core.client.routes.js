'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider, Authentication) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('landing', {
			url: '/',
			templateUrl: 'modules/core/views/landing.client.view.html'
		});

		// Dashbaord State Route
		$stateProvider.
		state('dashboard', {
			url: '/dashboard',
			templateUrl: 'modules/core/views/dashboard.client.view.html'
		});
	}
]);