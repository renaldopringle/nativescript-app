"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var applicationSettings = require("application-settings");
var ListComponent = (function () {
    function ListComponent(router, location) {
        var _this = this;
        this.router = router;
        this.drugList = JSON.parse(applicationSettings.getString("drugs", "[]"));
        location.subscribe(function (path) {
            _this.drugList = JSON.parse(applicationSettings.getString("drugs", "[]"));
        });
    }
    ListComponent.prototype.create = function () {
        this.router.navigate(["/create"]);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "./components/list/list.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map