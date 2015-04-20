angular.module('app.controllers', [])

.controller('NavCtrl', function($scope){
	$scope.navLinks = false;
	$scope.menu = false;
	$scope.hideNav = false;
	$scope.aboutLinks = false;
	$scope.cityInfo = false;
	$scope.toggleNav = function(){
		$scope.navLinks = !$scope.navLinks;
		$scope.menu = !$scope.menu;
		$scope.hideNav = !$scope.hideNav;
	}
	$scope.showAbout = function(){
		$scope.aboutLinks = true;
	}
	$scope.toggleAbout = function(){
		$scope.aboutLinks = !$scope.aboutLinks;
	}
	$scope.showCity = function(){
		$scope.cityInfo = true;
	}
	$scope.toggleCity = function(){
		$scope.cityInfo = !$scope.cityInfo;
	}
})
.controller('HomeCtrl', function($scope) {

	

});
