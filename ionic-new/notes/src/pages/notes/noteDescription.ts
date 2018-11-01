import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NoteService } from './noteService';
import { NotesPage } from './notes';

@Component({
    selector: 'page-noteDescription',
    templateUrl: 'noteDescription.html'
})
export class NoteDescriptionPage {
    type: any;
    id: any;
    title: any;
    description: any;
    constructor(public navCtrl: NavController, private navParams: NavParams, private _noteService: NoteService) {
        this.type = navParams.get('type');
        this.id = navParams.get('editId');
        if (this.type == "Edit") {
            let note = _noteService.getNote(this.id);
            this.title = note.title;
            this.description = note.description;
        }
    }
    saveNote() {
        if (this.type == "Add")
            this._noteService.addNote(this.title, this.description);
        else
            this._noteService.updateNote(this.id,this.title,this.description);
        this.navCtrl.setRoot(NotesPage);
    }

}