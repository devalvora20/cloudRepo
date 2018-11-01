import { Component } from '@angular/core';
import { NavController, AlertController,reorderArray  } from 'ionic-angular';
import { NoteDescriptionPage } from './noteDescription';
import { NoteService } from './noteService';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
  msg:String="";
  notes = [];
  reordering:boolean=false;
  reorderButton:String;
  constructor(public navCtrl: NavController, private _noteService: NoteService, private alertCtrl: AlertController) {
    
    this.notes = _noteService.getNotes();
    this.reorderButton="Reorder";
  }

  addNote() {
    this.navCtrl.push(NoteDescriptionPage, { type: 'Add' });
  }

  deleteNote(id) {
    let alert = this.alertCtrl.create({
      title: 'Confirm delete',
      message: 'Are you sure you want to delete this expense?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this._noteService.deleteNote(id);
            this.navCtrl.setRoot(NotesPage);
          }
        }
      ]
    });
    alert.present();
  }
  editNote(id) {
    if(!this.reordering)
      this.navCtrl.push(NoteDescriptionPage, { type: 'Edit', editId: id });
    else
      this.msg="Complete Reordering First";
  }

  toggleReorder() {
    this.reordering = !this.reordering;
    if (this.reordering) {
      this.reorderButton = 'Done';
    } else {
      this.msg="";
      this._noteService.updateOrder(this.notes);
      this.reorderButton = 'Reorder';
    }
  }
}