"use strict";
var application_1 = require("nativescript-angular/application");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var list_component_1 = require("./components/list/list.component");
var create_component_1 = require("./components/create/create.component");
exports.AppRoutes = [
    { path: "", component: list_component_1.ListComponent },
    { path: "create", component: create_component_1.CreateComponent }
];
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [[router_1.nsProvideRouter(exports.AppRoutes, {})]]);
//# sourceMappingURL=main.js.map