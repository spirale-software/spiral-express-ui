import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng';
import {PartenaireService} from './partenaire.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
    selector: 'app-partenaire-update',
    templateUrl: './partenaire-update.component.html'
})
export class PartenaireUpdateComponent implements OnInit {

    breadcrumbItems: MenuItem[];

    partenaireId: number;

    constructor(private partenaireService: PartenaireService, private route: ActivatedRoute, private router: Router) {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({label: 'Clients'});
        this.breadcrumbItems.push({label: 'créer nouveau partenaire'});

        this.partenaireId = Number(this.route.snapshot.paramMap.get('id'));
    }

    ngOnInit(): void {

    }

    onSaveClicked(partenaire) {
        this.partenaireService.create(partenaire).subscribe(() => this.router.navigate(['/partenaires']));
    }


}
