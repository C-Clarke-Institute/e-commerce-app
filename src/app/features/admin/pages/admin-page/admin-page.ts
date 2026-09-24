import { Component } from "@angular/core";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: "app-admin-page",
    imports: [
        RouterOutlet
    ],
  templateUrl: "./admin-page.html",
  styleUrl: "./admin-page.scss",
})
export class AdminPage {}
