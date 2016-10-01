angular.module('treeOfKnowledge', []).controller('outerController', function($scope, $http) {
    var vm = this;
    vm.rootURL = 'http://localhost:8080/TreeOfKNOWLEDGE/webresources';
    
    vm.topic;
    vm.init = init;
    
    init();
    
    function init(){
        console.log("got here");
        $http.get(vm.rootURL + '/rest/getJson').then(function(response){
            vm.topic = response.data;
        }); 
    }
    
    
    
});
