import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {Routes, RouterModule} from '@angular/router';
import {TestAccordionComponent} from './test-accordion.component';
import {AccordionModule} from '../../component/accordion/accordion.module';

const routes: Routes = [
    {
        path: '',
        component: TestAccordionComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        AccordionModule
    ],
    declarations: [
        TestAccordionComponent
    ],
    exports: []
})
export class TestAccordionModule {
    public TestAccordionModule(){}
}
