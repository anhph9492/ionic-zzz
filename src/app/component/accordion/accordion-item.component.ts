import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-accordion-item',
    templateUrl: 'accordion-item.component.html',
    styleUrls: ['./accordion-item.component.scss']
})

export class AccordionItemComponent implements OnInit, AfterViewInit {

    @Input('items') items: any[];
    @Input('opened') opened: boolean;
    @Input('noContent') noContent: boolean;

    constructor() {
        this.opened = false;
    }

    toggel() {
        this.opened = !this.opened;
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }
}
