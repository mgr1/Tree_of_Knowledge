angular.module('treeOfKnowledge').controller('topicController', function ($scope) {
    var vm = this;

    vm.topic = $scope.topic;
    vm.init = init;
    vm.draw = draw;

    init();

    function init() {

    }

    function draw() {
        var c = document.getElementById("lineCanvas");
        var rect = document.getElementById("canvasRow").getBoundingClientRect();
        c.width = rect.width;
        c.height = rect.height;
        var ctx = c.getContext("2d");
        ctx.moveTo(0, 0);
        ctx.lineTo(rect.width, rect.height);
        ctx.stroke();
    }





});
