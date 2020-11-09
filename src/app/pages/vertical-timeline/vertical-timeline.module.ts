import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes, Router} from '@angular/router';
import {VerticalTimelineComponent} from './vertical-timeline.component';

const routes: Routes = [
    {
        path: '',
        component: VerticalTimelineComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        VerticalTimelineComponent
    ],
    exports: [
        VerticalTimelineComponent
    ]
})
export class VerticalTimelineModule {
}
