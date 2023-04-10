import { Component } from '@angular/core';
import { TaskItems } from 'src/app/mock-task';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  taskList:Task[] = TaskItems;

  constructor(private snackBar: MatSnackBar) {}

  // [{
  //   name: 'Hi',
  //   id: 1
  // }];

  deleteItem(id: number, action: string, task: Task) {
    // if there is only one element left in a list
    // if(this.taskList.length === 1){
    //   this.taskList.splice(0, 1);
    // }
    // this.taskList.splice(id, 1);
    // console.log(id)

    const data = this.taskList.filter((task) => task.id !== id);
    console.log(data);
    this.taskList = data;

    this.snackBar.open(task.name, action, {duration: 3000})

    // For Doing Undo
    // let snackBarRef = this.snackBar.open(task.name, action, { duration: 4000 });
    // snackBarRef.afterDismissed().subscribe((res) => {
    //   console.log(res.dismissedByAction);
    //   if (res.dismissedByAction) {
    //     // this.taskList.push({name : task.name, id : task.id});

    //     console.log(
    //       '🚀 ~ file: tasks.component.ts:32 ~ TasksComponent ~ snackBarRef.afterDismissed ~ task:',
    //       task
    //     );
    //   }
    // });

    // snackBarRef.onAction().subscribe((res) => {
    //   console.log(res);
    // })
  }
}
