angular.module('treeOfKnowledge').controller('topicController', ["$scope", "$uibModal", function($scope, $uibModal) {
    var vm = this;
    
    vm.topic = $scope.topic;
    vm.displayed;
    vm.newLink='';
    vm.priority=false;
    
    vm.expanded = false;

    vm.init = init;
    vm.deleteSubTopic = deleteSubTopic;
    vm.deleteThisTopic = deleteThisTopic;
    vm.expand = expand;
    vm.shrink = shrink;
    vm.openLinks = openLinks;
    vm.togglePriority = togglePriority;
    vm.prioritize=prioritize;
    vm.addTopic=addTopic;
    
    init();
    
    function init(){
        console.log("in directive");
        console.log(vm);
        shrink();
    }
    
    function expand(){
        vm.displayed = vm.topic.subTopics.slice();
        vm.expanded = true;
    }
    
    function shrink() {
        vm.displayed=undefined;
        vm.expanded = false;
    }
    
    function deleteSubTopic(name){
       for(var s in vm.topic.subTopics){
           if(vm.topic.subTopics[s].name == name){
               vm.topic.subTopics.splice(s,1);
               break;
           }
       }
        for(var d in vm.displayed){
           if(vm.displayed[d].name == name){
               vm.displayed.splice(s,1);
               break;
           }
       }
    }
    
    function deleteThisTopic(){
        $scope.onDelete({name: vm.topic.name});
    }
    
    function togglePriority(){
        vm.priority=!vm.priority;
        $scope.prioritize({priority: {isPriority: vm.priority, name: vm.topic.name}});
    }
    
    function prioritize(priority){
        if(priority.isPriority){
            var newArray = []
            for(var i in vm.displayed){
                if(vm.displayed[i].name == priority.name){
                    newArray.push(vm.displayed[i]);
                }
            }
            vm.displayed = newArray.slice();
        }else{
            expand();
        }
    }
    
    function openLinks(){
        $uibModal.open({
            templateUrl: 'linkModal.html',
            scope: $scope,
            controllerAs: vm
        });
    }
    
    function addTopic(){
        vm.topic.subTopics.push({name: '', subTopics: [], links: []});
        vm.expand();
    }
    
    
}]);


