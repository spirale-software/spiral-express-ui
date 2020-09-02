import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi.component.html'
})
export class EnvoiComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    envois: any[];

    constructor() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
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

    ngOnInit(): void {
    }
}

