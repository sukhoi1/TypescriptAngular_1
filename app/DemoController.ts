/// <reference path="./../tds/angular.d.ts" />

namespace TsAngular {

    export interface ICustomerSearchScope  extends ng.IScope
    {
        todo: any;
    }

    export class DemoController {

        static $inject = [
            "$scope"
        ];

        constructor(private $scope: ICustomerSearchScope) {

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

    }

}