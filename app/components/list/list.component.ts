import {Component} from "@angular/core";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import * as applicationSettings from "application-settings";

@Component({
    selector: "list",
    templateUrl: "./components/list/list.component.html",
})
export class ListComponent {

    router: Router;
    drugList: Array<Object>;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.drugList = JSON.parse(applicationSettings.getString("drugs", "[]"));
        location.subscribe((path) => {
            this.drugList = JSON.parse(applicationSettings.getString("drugs", "[]"));
        });
    }

    create() {
        this.router.navigate(["/create"]);
    }

}

