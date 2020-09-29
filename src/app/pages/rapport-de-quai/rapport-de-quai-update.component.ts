import {Component, Input, OnInit} from "@angular/core";
import {Envoi} from "../shared/model/envoi";
import {ActivatedRoute} from "@angular/router";
import {EnvoiService} from "../envoi/envoi.service";

@Component({
    selector: 'app-rapport-de-quai-update',
    templateUrl: './rapport-de-quai-update.component.html'
})
export class RapportDeQuaiUpdateComponent implements OnInit {

    envoi: Envoi;

    constructor(private route: ActivatedRoute, private envoiService: EnvoiService) {

    }

    ngOnInit(): void {
        const reference = this.route.snapshot.paramMap.get('reference');
        this.setEnvoi(reference);
    }

    setEnvoi(reference: string): void {
        this.envoiService.findByReference(reference).subscribe(res => {
            this.envoi = res;
        });
    }

}
