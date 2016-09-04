import {nativeScriptBootstrap} from "nativescript-angular/application";
import {nsProvideRouter} from "nativescript-angular/router";
import {RouterConfig} from "@angular/router";
import {AppComponent} from "./app.component";

import {ListComponent} from "./components/list/list.component";
import {CreateComponent} from "./components/create/create.component";

export const AppRoutes: RouterConfig = [
	{ path: "", component: ListComponent },
	{ path: "create", component: CreateComponent }
]

nativeScriptBootstrap(AppComponent, [[nsProvideRouter(AppRoutes, {})]]);

