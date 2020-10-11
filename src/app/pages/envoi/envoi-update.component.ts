import {Component} from '@angular/core';
import {DialogService, MenuItem} from 'primeng';
import {Router} from '@angular/router';
import {ClientComponent} from '../client/client.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Envoi} from '../shared/model/envoi';
import {Client} from "../shared/model/client";
import {DestinataireComponent} from "../destinataire/destinataire.component";
import {Coli} from "../shared/model/coli";
import {EnvoiService} from "./envoi.service";
import {Personne} from "../shared/model/personne";

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi-update.component.html',
    providers: [DialogService]
})
export class EnvoiUpdateComponent {

    breadcrumbItems: MenuItem[];

    displayEnvoiDetail = false;

    displayPersonneDetail = false;

    displayExpediteurs = false;

    displayDestinataires = false;

    envoi: Envoi;

    envoiForm: FormGroup;

    currentDate;

    expediteurSelectionner: Client;

    destinataireSelectionner: Personne;

    volume: number;

    poidsVolumetrique: number;

    constructor(public dialogService: DialogService, private router: Router, private fb: FormBuilder, private envoiService: EnvoiService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'encodage nouvel envoi'});
        this.initEnvoiForm();

        const myDate = new Date();
        this.currentDate = `${myDate.getDate()}/${myDate.getUTCMonth() + 1}/${myDate.getFullYear()}`;

        this.volume = 0;
        this.poidsVolumetrique = 0;
    }

    back(): void {
        window.history.back();
    }

    onValiderClicked(): void {
        this.displayEnvoiDetail = true;
    }

    onSearchExpediteurClicked(): void {
        this.displayExpediteurs = true;
        // const ref = this.dialogService.open(ClientComponent, {
        //     header: 'Sélectionner un expéditeur'
        // });
        //
        // ref.onClose.subscribe(client => {
        //     if (client) {
        //         this.expediteurSelectionner = client;
        //         this.envoiForm.get('expediteur').setValue(client.prenom);
        //     }
        // });
    }

    onSearchDestinataireClicked(): void {
        this.displayDestinataires = true;

        // const header = `Liste des destinataires liés au client: ${this.expediteurSelectionner.nom} ${this.expediteurSelectionner.prenom}`;
        // const ref = this.dialogService.open(DestinataireComponent, {
        //     header,
        // });
        //
        // ref.onClose.subscribe((destinataire: Personne) => {
        //     if (destinataire) {
        //         this.destinataireSelectionner = destinataire;
        //         this.envoiForm.get('destinataire').setValue(destinataire.prenom);
        //     }
        // });
    }

    validerEnvoi(): void {
        console.log(this.envoiForm.value);
        this.envoi = Object.assign({}, this.envoiForm.value);
        this.envoi.expediteur = this.expediteurSelectionner;
        this.envoi.destinataire = this.destinataireSelectionner;
        this.envoiService.create(this.envoi).subscribe(res => {
            console.log(res);
        });
        this.displayEnvoiDetail = false;
    }

    navigateTo() {
        this.router.navigate(['/envois']);
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
        this.envoiForm.get('coli').valueChanges.subscribe((next: Coli) => {
            if (next.hauteur && next.largeur && next.longueur) {
                this.volume = next.longueur * next.largeur * next.hauteur;
                this.poidsVolumetrique = this.volume / 5000;
            }
        });
    }
}

