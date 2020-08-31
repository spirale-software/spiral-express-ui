import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";
import {ClientService} from "./client.service";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

    breadcrumbItems: MenuItem[];
    clients: any[];

    constructor(private clientService: ClientService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.clients = [
            {nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Cameroun', adresse: 'Douala Bassa'},
            {nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Tchad', adresse: 'Djamena Lac'},
            {nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', pays: 'Senegal', adresse: 'Dakar Centre'},
        ];
    }

    ngOnInit(): void {
    }
}

