import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskItems } from 'src/app/mock-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-list-items',
  templateUrl: './task-list-items.component.html',
  styleUrls: ['./task-list-items.component.scss']
})
export class TaskListItemsComponent {
  @Input() task: Task | undefined;
  
  @Output() deleteItem = new EventEmitter<number>()
  indexDelete(val? : number){
   if(val !== undefined) {
    this.deleteItem.emit(val)
   }
  }
}
