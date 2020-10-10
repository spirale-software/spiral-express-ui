import {Component, OnInit, Optional} from "@angular/core";
import {ConfirmationService, DynamicDialogRef, MenuItem} from "primeng";
import {ClientService} from "./client.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    providers: [ConfirmationService]
})
export class ClientComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    clients: any[];

    isOpenLikeDialog = false;

    constructor(private clientService: ClientService,
                @Optional() private ref: DynamicDialogRef,
                private confirmationService: ConfirmationService, private router: Router) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.clients = [
            {id: 1, nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Cameroun', ville: 'Douala Bassa'}},
            {id: 2, nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Tchad', ville: 'Djamena Lac'}},
            {id: 3, nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', adresse: {pays: 'Senegal', ville: 'Dakar Centre'}},
        ];
    }

    ngOnInit(): void {
        this.isOpenLikeDialog = this.ref != null;
    }

    selectClient(client) {
        this.ref.close(client);
    }

    showUpdate(client) {
        if (window.innerWidth <= 650) {
            this.router.navigate(['/clients', client.id, 'modifier']);
        }
    }

    confirmerSuppression(client) {
        this.confirmationService.confirm({
           message: 'Voulez vous vraiment supprimer le client: ' +  client.nom,
            accept: () => this.clientService.deleteById(client.id).subscribe(),
            acceptLabel: 'Oui',
            rejectLabel: 'Non'
        });
    }

    navigateTo(client): void {
        this.router.navigate(['/clients', client.id, 'destinataires'], {state: client});

    }
}

