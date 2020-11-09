import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test',
    template: '<h1>Test component</h1>'
})

export class TestComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.log('test component init');
    }
}
