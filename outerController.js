angular.module('treeOfKnowledge', []).controller('outerController', function($scope, $http) {
    var vm = this;
    vm.rootURL = 'http://localhost:8080/TreeOfKNOWLEDGE/webresources';
    
    vm.topic = {name: "Mark"};
    vm.init = init;
    
    init();
    
    function init(){
        $http.get(vm.rootURL + '/rest/getJson').then(function(response){
            vm.topic = response.data;
        }); 
    }
    
    
    
});

