import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { signup } from '../pages/contact/signup';
import { signin } from '../pages/contact/signin';
import { addNewInfo } from '../pages/home/addNewInfo'
import { showInfo } from '../pages/home/showInfo'
import { itemList } from '../pages/contact/itemList'
import { resume } from '../pages/contact/resume';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    signup,
    addNewInfo,
    showInfo,
    signin,
    itemList,
    resume
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    signup,
    addNewInfo,
    showInfo,
    signin,
    itemList,
    resume
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    ImagePicker,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
