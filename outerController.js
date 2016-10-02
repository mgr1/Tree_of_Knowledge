angular.module('treeOfKnowledge', ['ui.bootstrap']).controller('outerController', function($scope, $http) {
    var vm = this;
    vm.rootURL = 'http://localhost:8080/TreeOfKNOWLEDGE/webresources';
    
    vm.topic;
    vm.init = init;
    vm.saveChanges = saveChanges;
    vm.editable = false;
    
    init();
    
    function init(){
        console.log("got here");
        $http.get(vm.rootURL + '/rest/getJson').then(function(response){
            vm.topic = response.data;
        }); 
    }
    
    function saveChanges(){
        $http.post(vm.rootURL + '/rest/postJson', vm.topic);
        vm.editable=false;
    }
    
    
    
});
