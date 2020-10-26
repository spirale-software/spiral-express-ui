import {Component} from '@angular/core';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Envoi} from '../shared/model/envoi';
import {Client} from '../shared/model/client';
import {Coli} from '../shared/model/coli';
import {EnvoiService} from './envoi.service';
import {Personne} from '../shared/model/personne';
import {Partenaire} from '../shared/model/partenaire';
import {Destinataire} from '../shared/model/destinataire';
import {StatutEnvoi} from "../shared/model/statut-envoi";

@Component({
    selector: 'app-envoi',
    templateUrl: './envoi-update.component.html'
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

    volume: number;

    poidsVolumetrique: number;

    isVisible = false;

    expediteur: Client;

    destinataire: Destinataire;

    partenaire: Partenaire;

    titreDialog = `Détail de l'envoi`;

    constructor(private router: Router, private fb: FormBuilder, private envoiService: EnvoiService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'encodage nouvel envoi'});
        this.initEnvoiForm();
        this.envoi = {} as Envoi;

        const myDate = new Date();
        this.currentDate = `${myDate.getDate()}/${myDate.getUTCMonth() + 1}/${myDate.getFullYear()}`;
        this.envoi.dateCreation = this.currentDate;
        this.envoi.statut = StatutEnvoi.PRISE_EN_CHARGE;

        this.volume = 0;
        this.poidsVolumetrique = 0;
    }

    back(): void {
        window.history.back();
    }

    onValiderClicked(): void {
        this.isVisible = true;
        this.displayEnvoiDetail = true;

        this.envoi = Object.assign(this.envoi, this.envoiForm.value);
        this.envoi.destinataire = this.destinataire;
        this.envoi.expediteur = this.expediteur;
        this.envoi.partenaire = this.partenaire;
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
       this.partenaire = partenaire;

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
        this.destinataire = destinataire;

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
        console.log(this.envoi);
        this.closeDialog();
        this.envoi.dateCreation = null;
        this.envoiService.create(this.envoi).subscribe(res => {
            this.navigateTo();
            // console.log(res);
        });
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

