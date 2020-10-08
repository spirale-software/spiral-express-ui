import {Component, Optional} from "@angular/core";
import {DynamicDialogRef} from "primeng";
import {Router} from "@angular/router";

@Component({
    selector: 'app-destinataire',
    templateUrl: './destinataire.component.html'
})
export class DestinataireComponent {

    destinataires: any[];

    constructor(@Optional() private ref: DynamicDialogRef, private router: Router) {
        this.destinataires = [
            {id: 1, nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Cameroun', adresse: 'Douala Bassa'},
            {id: 2, nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Tchad', adresse: 'Djamena Lac'},
            {id: 3, nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', pays: 'Senegal', adresse: 'Dakar Centre'},
        ];
    }

    selectPartenaire(partenaire): void {
        this.ref.close(partenaire);
    }

    navigate(destinataire) {
        console.log('window.innerWidth: ', window.innerWidth);
        if (window.innerWidth < 650) {
            this.router.navigate(['destinataires', destinataire.id, 'modifier']);
        }
    }
}
