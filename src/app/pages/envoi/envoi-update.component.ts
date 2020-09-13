import {Component} from '@angular/core';
import {DialogService, MenuItem} from 'primeng';
import {Router} from '@angular/router';
import {ClientComponent} from '../client/client.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Envoi} from '../shared/model/envoi';
import {Client} from "../shared/model/client";
import {DestinataireComponent} from "../destinataire/destinataire.component";

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi-update.component.html',
    providers: [DialogService]
})
export class EnvoiUpdateComponent {

    breadcrumbItems: MenuItem[];

    displayEnvoiDetail = false;

    displayPersonneDetail = false;

    envoi: Envoi;

    envoiForm: FormGroup;

    currentDate;

    expediteurSelectionner: Client;

    constructor(public dialogService: DialogService, private router: Router, private fb: FormBuilder) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'encodage nouvel envoi'});
        this.initEnvoiForm();

        const myDate = new Date();
        this.currentDate = `${myDate.getDate()}/${myDate.getUTCMonth() + 1}/${myDate.getFullYear()}`;
    }

    back(): void {
        window.history.back();
    }

    onValiderClicked(): void {
        this.displayEnvoiDetail = true;
    }

    onSearchExpediteurClicked(): void {
        const ref = this.dialogService.open(ClientComponent, {
            header: 'Sélectionner un expéditeur'
        });

        ref.onClose.subscribe(client => {
            if (client) {
                this.expediteurSelectionner = client;
                this.envoiForm.get('expediteur').setValue(client.prenom);
                console.log('Le client est: ', client);
            }
        });
    }

    onSearchDestinataireClicked(): void {
        const header = `Liste des destinataires liés au client: ${this.expediteurSelectionner.nom} ${this.expediteurSelectionner.prenom}`;
        const ref = this.dialogService.open(DestinataireComponent, {
            header,
        });

        ref.onClose.subscribe((client: Client) => {
            if (client) {
                this.envoiForm.get('destinataire').setValue(client.prenom);
                console.log('Le client est: ', client);
            }
        });
    }

    validerEnvoi(): void {

    }

    voirDetailDestinataire(): void {
        this.displayPersonneDetail = true;
    }

    voirDetailExpediteur(): void {
        this.displayPersonneDetail = true;
    }

    initEnvoiForm(): void {
        this.envoiForm = this.fb.group({
            coli: this.fb.group({
                description: [],
                longueur: [],
                largeur: [],
                hauteur: [],
                poids: []
            }),
            expediteur: [],
            destinataire: [],
            rapportQuai: [],
            rapportLivraison: [],
            montant: []
        });

        this.registerChangeInColi();
    }

    registerChangeInColi(): void {
        this.envoiForm.get('coli').valueChanges.subscribe(next => {
            console.log('Nouvelle Valeur: ', next);
        });
    }
}

