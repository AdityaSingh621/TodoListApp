import { Component, Input } from '@angular/core';
import { TaskItems } from 'src/app/mock-task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  @Input() formVisible !: string;

  text !: string;

  onSubmit(){
    if(!this.text){
      alert("enter a text, Please!");
      return;
    }

    const newEntry = {
      id : TaskItems.length,
      name : this.text
    }

    // console.log(TaskItems.length);

    TaskItems.push(newEntry);
    console.log(newEntry);
    console.log(TaskItems);


    this.text = ''

  }
}
