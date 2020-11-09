import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AccordionComponent} from './accordion.component';
import {AccordionItemComponent} from './accordion-item.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [
        AccordionComponent,
        AccordionItemComponent
    ],
    exports: [
        AccordionComponent,
        AccordionItemComponent
    ]
})
export class AccordionModule {}
