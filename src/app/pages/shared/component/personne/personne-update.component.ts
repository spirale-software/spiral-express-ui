import {Component, OnInit, Optional} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DynamicDialogRef} from "primeng";

@Component({
    selector: 'app-personne-update',
    templateUrl: './personne-update.component.html'
})
export class PersonneUpdateComponent implements OnInit {

    personneForm: FormGroup;

    isOpenLikePopup = false;

    constructor(private fb: FormBuilder,
                @Optional() private ref: DynamicDialogRef) {
        this.initForm();

        if (ref) {
            this.isOpenLikePopup = true;
        }
    }

    ngOnInit(): void {
    }

    initForm() {
        this.personneForm = this.fb.group({
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

    closeDialog(): void {
        this.ref.close();
    }

    confirmerSuppression() {
    }
}


