var app = angular.module("app", []);
app.controller("myController", ['$scope', function($scope) {

  var waysToLose = {
    waysToLoseByQB: ["fumble", "throw an interception", "get tackled in the endzone for a safety"],
    waysToLoseByRB: ["fumble", "throw an interception on a flea flicker", "get tackled in the endzone for a safety"],
    waysToLoseByWR: ["fumble", "drop a pass in the endzone", "get tackled in the endzone for a safety"]
  }
  players = [{
    qb: "Josh McCown"
  }, {
    qb: "Johnny Manziel"
  }, {
    rb: "Isaiah Crowell"
  }, {
    rb: "Terrance West"
  }, {
    wr: "Travis Benjamin"
  }, {
    wr: "Brian Hartline"
  }, {
    wr: "Andrew Hawkins"
  }, {
    wr: "Gary Barnidge"
  }]

  function getTimeRemaining() {
    var timeRemaining = "",
      number1 = Math.floor(Math.random() * (3 - 0 + 1)) + 0,
      number2 = Math.floor(Math.random() * (5 - 0 + 1)) + 0,
      number3 = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    timeRemaining = number1 + ":" + number2 + number3;

    return timeRemaining;
  }

  function choosePlayer(players) {
    var randomPlayerNumber = Math.floor(Math.random() * (players.length));
    var player = {};
    player = players[randomPlayerNumber];
    return player;
  }

  function createWayToLoseOnOffenseString(players, waysToLose) {
    var player = choosePlayer(players),
      playerName = "",
      wayToLose = "",
      wayToLoseString = "",
      indexQB = Math.floor(Math.random() * (waysToLose.waysToLoseByQB.length) - 0),
      indexRB = Math.floor(Math.random() * (waysToLose.waysToLoseByRB.length) - 0),
      indexWR = Math.floor(Math.random() * (waysToLose.waysToLoseByWR.length) - 0);

    if (player.qb) {
      playerName = player.qb;
      wayToLose = waysToLose.waysToLoseByQB[indexQB];
      // Math.floor(Math.random() * (max - min + 1)) + min;

    } else if (player.rb) {
      playerName = player.rb;
      wayToLose = waysToLose.waysToLoseByRB[indexRB];
    } else if (player.wr) {
      playerName = player.wr;
      wayToLose = waysToLose.waysToLoseByWR[indexWR];
      /*(Math.floor((Math.random() * 10) + 1);*/
    }
    wayToLoseString = playerName + " will " + wayToLose + " with " + getTimeRemaining() + " remaining";

    return wayToLoseString;
  }

  $scope.givePrediction = function() {
    $scope.howTheyLose = createWayToLoseOnOffenseString(players, waysToLose);
  }

}]);