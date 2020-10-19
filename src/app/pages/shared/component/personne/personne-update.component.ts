import {Component, EventEmitter, OnInit, Optional, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DynamicDialogRef, SelectItem} from 'primeng';
import {Utils} from '../../util/utils';
import {Personne} from "../../model/personne";

@Component({
    selector: 'app-personne-update',
    templateUrl: './personne-update.component.html'
})
export class PersonneUpdateComponent implements OnInit {

    personneForm: FormGroup;

    isOpenLikePopup = false;

    paysOptions: SelectItem[];

    @Output() onSaveClicked = new EventEmitter<Personne>();

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

    onSaveCliked(): void {
        if (this.ref) {
            this.ref.close(this.personneForm.value);
        }
        this.onSaveClicked.emit(this.personneForm.value);
    }

    closeDialog(): void {
        this.ref.close();
    }

    confirmerSuppression() {
    }
}


