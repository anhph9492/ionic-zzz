import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-accordion',
    templateUrl: 'test-accordion.component.html'
})

export class TestAccordionComponent implements OnInit, AfterViewInit {
    items: any[] = [
        {value: 'NĂNG KHIẾU', type: 'title'},
        {value: 'Mon ve', type: 'text'},
    ];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }
}
