import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class="layout-footer clearfix" style="text-align: center">
            <span style="font-size: 18px; padding-right: 11px">SPIRAL-EXPRESS</span><br>
            <span style="font-size: 13px;">Application de gestion d'envoi de colis.</span><br><br>
            <span >Développé par <strong>www.LapiEmo.com</strong></span>
            
<!--            <img src="assets/layout/images/logo-gray.png">-->
<!--            <div class="layout-footer-right">-->
<!--                <a href="https://github.com/primefaces"><i class="fa fa-github"></i></a>-->
<!--                <a href="https://www.facebook.com/groups/primefaces"><i class="fa fa-facebook"></i></a>-->
<!--                <a href="http://twitter.com/primefaces"><i class="fa fa-twitter"></i></a>-->
<!--            </div>-->
        </div>
    `
})
export class AppFooterComponent {

}
