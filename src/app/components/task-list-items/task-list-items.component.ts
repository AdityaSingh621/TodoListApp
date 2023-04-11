import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItems } from 'src/app/mock-task';
import { Task } from 'src/app/Task';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditTaskComponent } from '../edit-task/edit-task.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-task-list-items',
  templateUrl: './task-list-items.component.html',
  styleUrls: ['./task-list-items.component.scss']
})
export class TaskListItemsComponent {
  @Input() task: Task | undefined;
  
  @Output() deleteItem = new EventEmitter<number>()
  @Output() editItem = new EventEmitter<number>()

  constructor(private dialog : MatDialog){}

  indexDelete(id? : number){
   if(id !== undefined) {
    this.deleteItem.emit(id)
   }
  }

  editBtn(){
    this.editItem.emit();
  }
}
