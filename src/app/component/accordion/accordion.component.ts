import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-accordion',
    template: '<ion-card><ion-list class="ion-no-padding"><ng-content></ng-content></ion-list></ion-card>',
    styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent implements OnInit {

    ngOnInit(): void {
        console.log('accordion component init');
    }
}
