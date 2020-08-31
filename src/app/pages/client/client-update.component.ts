import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";
import {ClientService} from "./client.service";

@Component({
    selector: 'app-client-update',
    templateUrl: './client-update.component.html'
})
export class ClientUpdateComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    constructor(private clientService: ClientService) {

        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.breadcrumbItems.push({label: 'créer nouveau client'});
    }

    ngOnInit(): void {
    }

    back(): void {
        window.history.back();
    }

    enregistrer(): void {

    }
}
