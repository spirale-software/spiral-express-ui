import {Component, OnInit} from "@angular/core";
import {EnvoiService} from "../envoi/envoi.service";
import {Envoi} from "../shared/model/envoi";
import {MenuItem} from "primeng";

@Component({
    selector: 'app-livraison-coli-update',
    templateUrl: './livraison-coli-update.component.html'
})
export class LivraisonColiUpdateComponent implements OnInit {

    envoi: Envoi;

    coliVolume: number;

    breadcrumbItems: MenuItem[];

    constructor(private envoiService: EnvoiService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'livraison coli'});

        this.envoi = {};
        this.coliVolume = 0;
    }

    ngOnInit(): void {

    }

    back(): void {
        window.history.back();
    }

    onValiderClicked() {
        this.envoiService.update(this.envoi).subscribe(res => {
            console.log('onValiderClicked: ', res);
        });
    }
}
