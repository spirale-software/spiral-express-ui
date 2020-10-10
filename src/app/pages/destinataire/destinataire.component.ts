import {Component, Optional} from "@angular/core";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng";
import {Router} from "@angular/router";
import {ClientUpdateComponent} from "../client/client-update.component";
import {PersonneUpdateComponent} from "../shared/component/personne/personne-update.component";

@Component({
    selector: 'app-destinataire',
    templateUrl: './destinataire.component.html',
    providers: [DialogService]
})
export class DestinataireComponent {

    destinataires: any[];

    isOpenLikeDialog = false;

    constructor(@Optional() private ref: DynamicDialogRef, private router: Router, private dialogService: DialogService) {
        this.destinataires = [
            {id: 1, nom: 'Gérard', prenom: 'Yannick', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Cameroun', adresse: 'Douala Bassa'},
            {id: 2, nom: 'Symbol', prenom: 'Yvano', telephone: '045888888', email: 'contact@lapiemo.com', pays: 'Tchad', adresse: 'Djamena Lac'},
            {id: 3, nom: 'Stephen', prenom: 'Gustave', telephone: '00336989521', email: 'gustave@gmail.com', pays: 'Senegal', adresse: 'Dakar Centre'},
        ];

        if (this.ref) {
            this.isOpenLikeDialog = true;
        }
    }

    selectPartenaire(partenaire): void {
        this.ref.close(partenaire);
    }

    navigate(destinataire): void {
        console.log('window.innerWidth: ', window.innerWidth);
        if (window.innerWidth < 650) {
            this.openDialog(destinataire);
        }
    }

    back(): void {
        window.history.back();
    }

    openDialog(destinataire ?: any) {
        let header;
        if (destinataire) {
            header = 'Editer un destinataire';
        } else {
            header = 'Nouveau destinataire';
        }
        const ref = this.dialogService.open(PersonneUpdateComponent, {header});
    }
}
