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
import {Partenaire} from "../shared/model/partenaire";
import {Destinataire} from "../shared/model/destinataire";

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

    displayPartenaires = false;

    envoi: Envoi;

    envoiForm: FormGroup;

    currentDate;

    expediteurSelectionner: Client;

    destinataireSelectionner: Personne;

    volume: number;

    poidsVolumetrique: number;

    isVisible = false;

    expediteur: Client;

    titreDialog = "Détail de l'envoi";

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
        this.isVisible = true;
        this.displayEnvoiDetail = true;

        this.envoi = Object.assign({}, this.envoiForm.value);
        console.log('envoi: ', this.envoi);
    }

    onSearchExpediteurClicked(): void {
        this.isVisible = true;
        this.displayExpediteurs = true;
        this.titreDialog = 'Sélectionner un expéditeur.';
    }

    onSearchPartenaireClicked() {
        this.isVisible = true;
        this.displayPartenaires = true;
        this.titreDialog = 'Sélectionner un partenaire.';
    }

    onPartenaireSelect(partenaire: Partenaire) {
       this.closeDialog();

       const fullName = partenaire.prenom + ' ' + partenaire.prenom;
       this.envoiForm.get('partenaire').setValue(fullName);
    }

    onExpediteurSelect(expediteur: Client) {
        this.closeDialog();
        this.expediteur = expediteur;

        const fullName = expediteur.prenom + ' ' + expediteur.prenom;
        this.envoiForm.get('expediteur').setValue(fullName);
    }

    onDestinataireSelect(destinataire: Destinataire) {
        this.closeDialog();

        const fullName = destinataire.prenom + ' ' + destinataire.prenom;
        this.envoiForm.get('destinataire').setValue(fullName);
    }

    voirDetailPartenaire() {

    }

    closeDialog() {
        this.isVisible = false;
        this.displayEnvoiDetail = false;
        this.displayPersonneDetail = false;
        this.displayExpediteurs = false;
        this.displayDestinataires = false;
        this.displayPartenaires = false;
    }

    onSearchDestinataireClicked(): void {
        this.isVisible = true;
        this.displayDestinataires = true;
        this.titreDialog = 'Sélectionner un destinataire.';
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
            partenaire: [],
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

