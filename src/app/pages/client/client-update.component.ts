import {Component, OnInit} from "@angular/core";
import {ConfirmationService, MenuItem, SelectItem} from "primeng";
import {ClientService} from "./client.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Utils} from "../shared/util/utils";
import {Router} from "@angular/router";

@Component({
    selector: 'app-client-update',
    templateUrl: './client-update.component.html',
    providers: [ConfirmationService]
})
export class ClientUpdateComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    clientForm: FormGroup;

    client: any;

    paysOptions: SelectItem[];

    constructor(private clientService: ClientService, private fb: FormBuilder,
                private confirmationService: ConfirmationService, private router: Router) {

        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.breadcrumbItems.push({label: 'créer nouveau client'});

        this.initForm();
        this.client = {};
        this.paysOptions = Utils.getPaysOptions();
    }

    ngOnInit(): void {
    }

    back(): void {
        window.history.back();
    }

    initForm() {
        this.clientForm = this.fb.group({
            nom: [],
            prenom: [],
            telephone: [],
            email: [],
            adresse: this.fb.group({
                pays: [],
                codePostal: [],
                rue: [],
                ville: []
            })
        });
    }

    enregistrer(): void {
        console.log('clientForm.value: ', this.clientForm.value);
        this.client = Object.assign(this.client, this.clientForm.value);
        this.clientService.create(this.client).subscribe(
            res => { this.router.navigate(['/clients']); },
            error => {});
        // console.log('client: ', this.client);

    }

    confirmerSuppression() {
        this.confirmationService.confirm({
            message: 'Voulez vous vraiment supprimer le client: ' +  this.client.nom,
            accept: () => this.clientService.deleteById(this.client.id).subscribe(),
            acceptLabel: 'Oui',
            rejectLabel: 'Non'
        });
    }
}
