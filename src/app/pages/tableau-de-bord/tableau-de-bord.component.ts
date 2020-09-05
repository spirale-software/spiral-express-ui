import {Component} from "@angular/core";

@Component({
    selector: 'app-tableau-de-bord',
    templateUrl: './tableau-de-bord.component.html'
})
export class TableauDeBordComponent {

    envois: any[];

    constructor() {
        this.envois = [
            {
                etatColi: 'En Cours',
                dateEnvoi: '10/10/2020',
                emetteur: 'Yannick',
                volumeColi: '0.33',
                destinataire: 'Jules Lefranc',
                paysExpedition: 'Belgique',
                paysDestination: 'Rwanda',
                villeDestination: 'Kigali',
                adresseDestination: 'Kigali centre',
                montantTotalTransaction: 50.00
            },

        ];
    }
}
