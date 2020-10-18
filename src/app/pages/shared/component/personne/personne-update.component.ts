import {Component, OnInit, Optional} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DynamicDialogRef, SelectItem} from 'primeng';
import {Utils} from '../../util/utils';

@Component({
    selector: 'app-personne-update',
    templateUrl: './personne-update.component.html'
})
export class PersonneUpdateComponent implements OnInit {

    personneForm: FormGroup;

    isOpenLikePopup = false;

    paysOptions: SelectItem[];

    constructor(private fb: FormBuilder,
                @Optional() private ref: DynamicDialogRef) {
        this.initForm();

        if (ref) {
            this.isOpenLikePopup = true;
        }
        this.paysOptions = Utils.getPaysOptions();
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


