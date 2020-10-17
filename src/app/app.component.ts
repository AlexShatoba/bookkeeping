import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LocalStorageService } from './core/services/local-storage.service';
import { take, tap } from 'rxjs/operators';
import { UserProvider } from './core/services/user.provider';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtr: NavController,
    private userProvider: UserProvider,
  ) {
    this.initializeApp();
  }

  public initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.defineInitRoot();
    });
  }

  public defineInitRoot(): void {
    this.userProvider.me().pipe(
      tap(user => {
        if (user === null) {
          this.navCtr.navigateRoot('login');
        }
      }),
      take(1),
    )
    .subscribe();
  }
}
