import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AngularFireDatabase } from "@angular/fire/database";
import { Subject, Observable, forkJoin, of } from "rxjs";
import { takeUntil, map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private db: AngularFireDatabase
  ) {
    this.initializeApp();
  }
  table = "/student";
  datas: any = [];
  obsDatas: Observable<any>;
  ngOnInit(): void {
    this.obsDatas = this.db
      .list(this.table)
      .snapshotChanges()
      .pipe(map((data) => data.map((a: any) => ({ ...a.payload.val() }))));
  }

  insert() {
    let stu: any = {};
    stu.name="hoang anh";
    stu.address = "ha noi";
    stu.email = "anhph9@fsoft.com.vn";
    this.db.list(this.table).push(stu);
  }

  setData() {}

  test() {
    console.log(this.datas);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
