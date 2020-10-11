import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-personne-select',
    templateUrl: './personne-select.component.html'
})
export class PersonneSelectComponent implements OnInit {

    personnes: any[];

    constructor() {
        this.personnes = [
            {id: 1, nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Cameroun', ville: 'Douala Bassa'}},
            {id: 2, nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', adresse: {pays: 'Tchad', ville: 'Djamena Lac'}},
            {id: 3, nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', adresse: {pays: 'Senegal', ville: 'Dakar Centre'}},
        ];
    }

    ngOnInit(): void {
    }

    selectPersonne(personne) {

    }
}
