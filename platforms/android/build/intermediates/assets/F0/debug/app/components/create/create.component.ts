import {Component} from "@angular/core";
import {Location} from "@angular/common";
import * as applicationSettings from "application-settings";
 
@Component({
    selector: "create",
    templateUrl: "./components/create/create.component.html",
})
export class CreateComponent {
 
    location: Location;
    name: string;
    category: string;
 
    constructor(location: Location) {
        this.location = location;
        this.name = "";
        this.category = "";
    }
 
    save() {
        if(this.name != "" && this.category != "") {
            var drugs: Array<Object> = JSON.parse(applicationSettings.getString("drugs", "[]"));
            drugs.push({name: this.name, category: this.category});
            applicationSettings.setString("drugs", JSON.stringify(drugs));
            this.location.back();
        }
    }
 
}

