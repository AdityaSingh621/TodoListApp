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

  checkBoxValue:boolean = false;
  
  @Output() deleteItem = new EventEmitter<number>()
  @Output() editItem = new EventEmitter<number>()

  constructor(private dialog : MatDialog){}

  indexDelete(id? : number){
   if(id !== undefined) {
    this.deleteItem.emit(id)
   }
  }

  toggle(){
    this.checkBoxValue =! this.checkBoxValue;
    if(this.checkBoxValue){
      this.task?.name
    }
    console.log(this.checkBoxValue)
  }

  editBtn(){
    this.editItem.emit();
  }
}
