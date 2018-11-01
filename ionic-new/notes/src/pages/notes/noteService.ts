import { v4 as uuid } from 'uuid';
import { Note } from '../notes/note';
export class NoteService {
    notes;
    order;
    temp;
    constructor() {
        this.notes = [];
        this.order = [];
        this.temp = [];
    }

    addNote(title, description) {
        let id = uuid();
        let note = new Note(id, title, description);
        localStorage.setItem("notes" + id, JSON.stringify(note));
        if (localStorage.getItem("order") != null) {
            this.order.push(id); // to add note id in the order array
            localStorage.setItem("order", JSON.stringify(this.order));
        }
        console.log("AddNote() order:")
        console.log(this.order)
    }
    getNotes() {
        this.notes = [];
        this.temp = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (!key.includes("notes"))
                continue;
            let value = JSON.parse(localStorage.getItem(key));
            this.temp.push(value);
        }
        this.sortNotesAccordingToOrder();
        console.log("notes");
        console.log(this.notes);
        return this.notes;
    }
    getNote(id) {
        for (let note of this.notes) {
            if (note.id == id) {
                return note;
            }
        }
    }
    deleteNote(id) {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key == "notes" + id) {
                localStorage.removeItem(key);
                break;
            }
        }
        //to delete from order array
        for (let i = 0; i < this.order.length; i++) {
            if (this.order[i] == id) {
                this.order.splice(i, 1);
                break;
            }
        }
        if (localStorage.getItem("order") != null) {
            localStorage.setItem("order", JSON.stringify(this.order));
        }
    }
    updateNote(id, title, description) {
        let updateNote = new Note(id, title, description);
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key == "notes" + id) {
                localStorage.setItem(key, JSON.stringify(updateNote));
                break;
            }
        }
    }
    updateOrder(notes) {
        this.order = [];
        for (let i = 0; i < notes.length; i++) {
            this.order.push(notes[i].id);
        }
        localStorage.setItem("order", JSON.stringify(this.order));
    }
    sortNotesAccordingToOrder() {
        let j;
        if (this.order != null && this.order.length > 0) {
            for (let i = 0; i < this.temp.length; i++) {
                for (j = 0; j < this.temp.length; j++) {
                    if (this.order[i] == this.temp[j].id) {
                        break;
                    }
                }
                this.notes.push(this.temp[j]);
            }
        }
        else {
            for (let i = 0; i < this.temp.length; i++) {
                this.notes.push(this.temp[i]);
            }
        }
        console.log("order");
        console.log(this.order);
    }

    getOrder() { //is called when the app is launched for the first time to fetch order from local storage
        this.order = [];
        this.order = JSON.parse(localStorage.getItem("order"));
        if (this.order == null) {
            this.order = [];
        }
    }
}
