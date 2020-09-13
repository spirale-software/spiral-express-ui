import {Component} from "@angular/core";
import {DynamicDialogRef} from "primeng";

@Component({
    selector: 'app-destinataire',
    templateUrl: './destinataire.component.html'
})
export class DestinataireComponent {

    destinataires: any[];

    constructor(private ref: DynamicDialogRef) {
        this.destinataires = [
            {nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Cameroun', adresse: 'Douala Bassa'},
            {nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Tchad', adresse: 'Djamena Lac'},
            {nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', pays: 'Senegal', adresse: 'Dakar Centre'},
        ];
    }

    selectPartenaire(partenaire): void {
        this.ref.close(partenaire);
    }
}
