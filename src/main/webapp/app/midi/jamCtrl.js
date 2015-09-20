angular
  .module("app.controllers")
  .controller("JamCtrl", function($scope, MidiService) {
// TODO: panelDirective maken
    $scope.replay = function () {
      MidiService.replay($scope.songTitle, $scope.version);
    };

    $scope.replayAll = function () {
      MidiService.replayAll($scope.songTitle);
    };

    $scope.clear = function () {
      MidiService.clear($scope.songTitle, $scope.version);
    };

    $scope.reset = function () {
      MidiService.reset();
    };
  });