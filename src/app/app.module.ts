import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import './rxjs-operators';
import { AppComponentService } from './core/services/app-component.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { UserProvider } from './core/services/user.provider';
import { AuthProvider } from './core/services/auth.provider';
import { AppConfig } from './core/models/app-config';

export const COMMON_PROVIDERS: Provider[] = [
  AppComponentService,
  LocalStorageService,
  UserProvider,
  AuthProvider,
];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    ...COMMON_PROVIDERS,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: AppConfig, useClass: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
