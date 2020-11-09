import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'accordion',
        loadChildren: () => import('./pages/test-accordion/test-accordion.module').then(m => m.TestAccordionModule)
    },
    {
        path: 'v-timeline',
        loadChildren: () => import('./pages/vertical-timeline/vertical-timeline.module').then(m => m.VerticalTimelineModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
