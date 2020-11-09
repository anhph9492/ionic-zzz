import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-accordion',
    template: '<ion-list><ng-content></ng-content></ion-list>',
    styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent implements OnInit {

    ngOnInit(): void {
        console.log('accordion component init');
    }
}
