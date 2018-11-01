import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{NotesPage} from '../pages/notes/notes';
import { NoteService } from '../pages/notes/noteService';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = NotesPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private _noteService:NoteService) {
    _noteService.getOrder();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

