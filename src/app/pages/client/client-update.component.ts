import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";
import {ClientService} from "./client.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-client-update',
    templateUrl: './client-update.component.html'
})
export class ClientUpdateComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    clientForm: FormGroup;

    constructor(private clientService: ClientService, private fb: FormBuilder) {

        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.breadcrumbItems.push({label: 'créer nouveau client'});

        this.initForm();
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
    }
}
