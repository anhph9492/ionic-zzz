import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

const firebaseConfig = {
  apiKey: 'AIzaSyBbot7j3dPF5hbfc2o5_qmjXS476oLlph8',
  authDomain: 'banded-hexagon-275008.firebaseapp.com',
  databaseURL: 'https://banded-hexagon-275008.firebaseio.com',
  projectId: 'banded-hexagon-275008',
  storageBucket: 'banded-hexagon-275008.appspot.com',
  messagingSenderId: '1044881337458',
  appId: '1:1044881337458:web:3cc3f6d2101bce1a6fa6eb',
  measurementId: 'G-P6HRZWHB9V',
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    // InAppBrowser,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
