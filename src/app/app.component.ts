import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

    table = '/student';
    datas: any = [];
    obsDatas: Observable<any>;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private db: AngularFireDatabase,
        private menu: MenuController
    ) {
        this.initializeApp();
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    ngOnInit(): void {
        // this.obsDatas = this.db
        //   .list(this.table)
        //   .snapshotChanges()
        //   .pipe(map((data) => data.map((a: any) => ({ ...a.payload.val() }))));
    }


    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
