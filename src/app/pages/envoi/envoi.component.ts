import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';
import {EnvoiService} from './envoi.service';
import {Envoi} from "../shared/model/envoi";
import {Coli} from "../shared/model/coli";
import {Client} from "../shared/model/client";

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi.component.html'
})
export class EnvoiComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    envois: Envoi[];

    constructor(private envoiService: EnvoiService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.envois = [];
/*        this.envois = [
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

        ];*/
    }

    ngOnInit(): void {
        this.envoiService.getAll().subscribe(res => {
            this.envois = res;
        });
    }

    getVolume(coli: Coli): number {
        return coli.longueur * coli.largeur * coli.hauteur;
    }

    getExpediteur(expediteur: Client): string {
        return expediteur.prenom + ' ' + expediteur.nom;
    }

    getPaysExpedition(expediteur: Client): string {
        return expediteur.pays;
    }

}

