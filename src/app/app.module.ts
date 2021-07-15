import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from '../pages/home/home';
import { Slide1Page } from '../pages/slide1/slide1';
import { Slide2Page } from '../pages/slide2/slide2';
import { Slide3Page } from '../pages/slide3/slide3';
import { Slide4Page } from '../pages/slide4/slide4';
import { Slide5Page } from '../pages/slide5/slide5';
import { StartPage } from '../pages/start/start';
import { ResultPage } from '../pages/result/result';
import { UserProvider } from '../providers/user/user';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    StartPage,
    HomePage,
    Slide1Page,
    Slide2Page,
    Slide3Page,
    Slide4Page,
    Slide5Page,
    ResultPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StartPage,
    HomePage,
    Slide1Page,
    Slide2Page,
    Slide3Page,
    Slide4Page,
    Slide5Page,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    AuthProvider
  ]
})
export class AppModule {}
