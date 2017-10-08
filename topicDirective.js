angular.module('treeOfKnowledge').directive('topicDir', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'topic.html',
        controller: 'topicController',
        controllerAs: 'vm',
        bindToController: 'true',
        scope: {
            topic: '='
        },

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
