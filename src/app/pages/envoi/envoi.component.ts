import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';
import {EnvoiService} from './envoi.service';
import {Envoi} from '../shared/model/envoi';
import {Coli} from '../shared/model/coli';
import {Client} from '../shared/model/client';

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi.component.html',
    styleUrls: ['./envoi.component.scss']
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
            console.log(res);
        });
    }

    getVolume(coli: Coli): number {
        let volume = 0;
        if (coli) {
            volume = coli.longueur * coli.largeur * coli.hauteur;
        }
        return volume;
    }

    getExpediteur(expediteur: Client): string {
        let expediteurNom = '';
        if (expediteur) {
            expediteurNom = expediteur.prenom + ' ' + expediteur.nom;
        }
        return expediteurNom;
    }

    getPaysExpedition(expediteur: Client): string {
        if (expediteur) {
            // return expediteur.pays;
            return 'TODO';
        }
        return null;

    }

    genererDocument(envoiId: null): void {
        this.envoiService.genererDocument(envoiId).subscribe(res => {
            console.log('genererDocument: ', res);
            const file = new Blob([res], {type: 'application/pdf'});
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        });
    }

}

