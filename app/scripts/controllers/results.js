'use strict';

app.controller('ResultsCtrl', function ($scope, $location, firebaseAuth, date, theDate) {
	$scope.prefs = date.userPreferences;
	$scope.date = theDate;
	// date.generateDate().then(function(date) {

	// });

	// Return to homepage on logout
	$scope.$on("$firebaseSimpleLogin:logout", function(e, user) {
		$location.path('/');
	});
});