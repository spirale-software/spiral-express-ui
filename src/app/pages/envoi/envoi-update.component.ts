import {Component} from "@angular/core";
import {DialogService, MenuItem} from "primeng";
import {Router} from "@angular/router";
import {ClientComponent} from "../client/client.component";

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi-update.component.html',
    providers: [DialogService]
})
export class EnvoiUpdateComponent {

    breadcrumbItems: MenuItem[];

    constructor(public dialogService: DialogService, private router: Router) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'encodage nouvel envoi'});
    }

    back(): void {
        window.history.back();
    }

    onValiderClicked(): void {

    }

    onSearchExpediteurClicked(): void {
       const ref = this.dialogService.open(ClientComponent, {
           header: 'Sélectionner un expéditeur'
       });

       ref.onClose.subscribe(client => {
          if (client) {
              console.log('Le client est: ', client);
          }
       });
    }

    onSearchDestinataireClicked(): void {
        const ref = this.dialogService.open(ClientComponent, {
            header: 'Liste des destinataires liés au client: XYZ'
        });

        ref.onClose.subscribe(client => {
            if (client) {
                console.log('Le client est: ', client);
            }
        });
    }

}

