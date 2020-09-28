import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng";
import {ActivatedRoute} from "@angular/router";
import {Envoi} from "../shared/model/envoi";
import {EnvoiService} from "./envoi.service";

@Component({
    selector: 'app-envoi-detail',
    templateUrl: './envoi-detail.component.html'
})
export class EnvoiDetailComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    envoi: Envoi;

    constructor(private route: ActivatedRoute, private envoiService: EnvoiService) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'envois de coli'});
        this.breadcrumbItems.push({label: 'détail d\'un envoi'});
    }

    ngOnInit(): void {
        const envoiId = this.route.snapshot.paramMap.get('id');
        this.setEnvoi(Number(envoiId));
        console.log(envoiId);
    }

    setEnvoi(envoiId: number): void {
        this.envoiService.getById(envoiId).subscribe(res => {
           this.envoi = res;
        });
    }

}
