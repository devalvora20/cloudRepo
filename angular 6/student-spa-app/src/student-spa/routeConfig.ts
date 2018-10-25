import { Routes } from '@angular/router';
import { DisplayStudentComponent } from './DisplayStudentComponent';
import {AddStudentComponent} from './AddStudentComponent';
import{NotFoundComponent}from './NotFoundComponent';
import { DeleteStudentComponent } from './DeleteStudentComponent';
import { EditStudentComponent } from './EditStudentComponent';
export const routesArray: Routes
    = [{ path: "display", component: DisplayStudentComponent }
        , { path: "", redirectTo: "display", pathMatch: "full" }
        , {path:"delete/:rollNoToDelete",component:DeleteStudentComponent}
        ,{path:"edit/:rollNoToEdit",component:EditStudentComponent}
        , { path: "add", component: AddStudentComponent }
        , {path:"**",component:NotFoundComponent}
    ];