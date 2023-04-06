import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskListItemsComponent } from './components/task-list-items/task-list-items.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule } from '@angular/forms';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DialogboxComponent,
    ButtonComponent,
    TasksComponent,
    TaskListItemsComponent,
    AddTaskComponent,

  ],
  entryComponents:[DialogboxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
