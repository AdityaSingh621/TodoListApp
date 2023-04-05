import { Component } from '@angular/core';
import { TaskItems } from 'src/app/mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  taskList = TaskItems;

  // [{
  //   name: 'Hi',
  //   id: 1
  // }];

  


  deleteItem(val: number){
    // if there is only one element left in a list
    if(this.taskList.length === 1){
      this.taskList.splice(0, 1);
    }
    this.taskList.splice(val, 1);
    // const data = this.taskList.filter((task) => task.id !== val);
    // console.log(data)
    // this.taskList = data;
  }
}
