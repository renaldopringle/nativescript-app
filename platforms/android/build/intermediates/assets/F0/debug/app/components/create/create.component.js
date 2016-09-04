"use strict";
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var applicationSettings = require("application-settings");
var CreateComponent = (function () {
    function CreateComponent(location) {
        this.location = location;
        this.name = "";
        this.category = "";
    }
    CreateComponent.prototype.save = function () {
        if (this.name != "" && this.category != "") {
            var drugs = JSON.parse(applicationSettings.getString("drugs", "[]"));
            drugs.push({ name: this.name, category: this.category });
            applicationSettings.setString("drugs", JSON.stringify(drugs));
            this.location.back();
        }
    };
    CreateComponent = __decorate([
        core_1.Component({
            selector: "create",
            templateUrl: "./components/create/create.component.html",
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], CreateComponent);
    return CreateComponent;
}());
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map