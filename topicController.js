angular.module('treeOfKnowledge').controller('topicController', function($scope) {
    var vm = this;
    
    vm.topic = $scope.topic;
    vm.init = init;
    vm.name = $scope.topic.name;
    vm.penis = 'penis';
    
    init();
    
    function init(){
        console.log("in directive");
        console.log(vm);
    }
    
    
    
});

