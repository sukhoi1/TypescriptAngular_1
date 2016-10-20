/// <reference path="./../tds/angular.d.ts" />
var TsAngular;
(function (TsAngular) {
    var DemoController = (function () {
        function DemoController($scope) {
            this.$scope = $scope;
            $scope.todo = {
                user: "Adam",
                items: [
                    { action: "Buy Flowers", done: false },
                    { action: "Get Shoes", done: false },
                    { action: "Collect Tickets", done: true },
                    { action: "Call Joe", done: false }
                ]
            };
        }
        DemoController.$inject = [
            "$scope"
        ];
        return DemoController;
    }());
    TsAngular.DemoController = DemoController;
})(TsAngular || (TsAngular = {}));
//# sourceMappingURL=DemoController.js.map