import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test-accordion',
    templateUrl: 'test-accordion.component.html'
})

export class TestAccordionComponent implements OnInit, AfterViewInit {
    items: any[] = [
        {value: 'NĂNG KHIẾU', type: 'title'},
        {value: 'MÔN VẼ', type: 'text', img: 'https://www.flaticon.com/svg/static/icons/svg/1507/1507174.svg'},
        {value: 'MÔN VẼ', type: 'text', img: 'https://www.flaticon.com/svg/static/icons/svg/1507/1507174.svg'},
        {value: 'MÔN VẼ', type: 'text', img: 'https://www.flaticon.com/svg/static/icons/svg/1507/1507174.svg'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
    }
}
