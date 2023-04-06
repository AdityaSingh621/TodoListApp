import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskItems } from 'src/app/mock-task';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent {

  text !: string;

  constructor(private dialogRef: MatDialogRef<DialogboxComponent>){}

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

  onCancel(){
    console.log('Closed');
    this.dialogRef.close();
  }
}
