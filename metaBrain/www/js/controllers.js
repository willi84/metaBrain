angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ItemsCtrl', function($scope, Items, $sce) {
  $scope.hasFilters = false; //false;
  $scope.openFilters = function(hasFilters){
    if(!hasFilters){
      $scope.hasFilters = true;
    } else {
      $scope.hasFilters = false;
    }
  }
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //$scope.items = Items.all();
  //$scope.items  = Items.all();
  var p = Items.all();
   p.then(function(data){
    $scope.items = data[0];
    console.log(data[0]);
    angular.forEach($scope.items, function(value, key) {
  value['ID'] = key;
});

    //return data;
  }, function(data){
    //console.log("error")
  })

})
.controller('ItemDetailCtrl', function($scope, $stateParams, Items) {
  var p = Items.all();
  console.log($stateParams);
   p.then(function(data){
    $scope.item = data[0][$stateParams.itemId];

    //return data;
  }, function(data){
    //console.log("error")
  })

  $scope.item = 3; //$scope.items[$stateParams.$id];
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
