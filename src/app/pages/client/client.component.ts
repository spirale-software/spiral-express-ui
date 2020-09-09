import {Component, OnInit, Optional} from "@angular/core";
import {DynamicDialogConfig, DynamicDialogRef, MenuItem} from "primeng";
import {ClientService} from "./client.service";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    clients: any[];

    isOpenLikeDialog = false;

    constructor(private clientService: ClientService, @Optional() private ref: DynamicDialogRef) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.clients = [
            {nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Cameroun', adresse: 'Douala Bassa'},
            {nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Tchad', adresse: 'Djamena Lac'},
            {nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', pays: 'Senegal', adresse: 'Dakar Centre'},
        ];
    }

    ngOnInit(): void {
        this.isOpenLikeDialog = this.ref != null;
    }

    selectClient(client) {
        this.ref.close(client);
    }
}

