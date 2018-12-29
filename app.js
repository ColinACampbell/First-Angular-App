let mainApp = angular.module("mainApp",[]);
mainApp.controller('listCtrl',function($scope) {
  $scope.lists =  [
    {name:"Tea",content:"Have some tea before studying"},
    {name:"Study",content:"Study after I have some tea"}
  ]

  $scope.remove = function(index) {
    console.log("Item "+index+" removed")
    $scope.lists.splice(index,1);

  }

  $scope.add = function()
  {
    let newName = $scope.name;
    let newContent = $scope.content;
    let item = {name:newName,content:newContent};
    $scope.lists.push(item);
    console.log("Item added");
    console.log(item);
  }
})
