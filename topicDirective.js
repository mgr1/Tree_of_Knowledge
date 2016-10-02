angular.module('treeOfKnowledge').directive('topicDir', function($compile) {
    return {
        restrict: 'E',
//        template: '<h1>penis</h1>'
//        replace: 'true',
        templateUrl: 'topic.html',
        controller: 'topicController',
        controllerAs: 'vm',
        bindToController: 'true',
        scope: {
            topic: '=',
            editable: '=',
            onDelete: '&',
            prioritize: '&',
            nested: '='
        },
        //lol wut
        compile: function(tElement, tAttr) {
            var contents = tElement.contents().remove();
            var compiledContents;
            return function(scope, iElement, iAttr) {
                if(!compiledContents) {
                    compiledContents = $compile(contents);
                }
                compiledContents(scope, function(clone, scope) {
                         iElement.append(clone); 
                });
            };
        }
    };
});

