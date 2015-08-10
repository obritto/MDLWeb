var app = angular.module('app', []);

app.controller('TesteCtrl', function TesteCtrl($scope) {

    $scope.numMsg = 6;

    $scope.mais = function () {
        $scope.numMsg = $scope.numMsg + 1;
    };

});