import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { TaskItems } from 'src/app/mock-task';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  constructor(private dialog : MatDialog, private snackBar : MatSnackBar){}

  @Output() gotoHeader = new EventEmitter();

  @Input() text !: string;
  @Input() color !: string;

  showForm : boolean = false;

  // toggleButton(){

  //   if(this.showForm === true){
  //     console.log("🚀 ~ file: button.component.ts:26 ~ ButtonComponent ~ toggleButton ~ close:", close)
      
  //     this.dialog.closeAll();
  //   } else {
  //     this.dialog.open(DialogboxComponent)

  //   }
  //   this.showForm = !this.showForm;
  //   // console.log(this.showForm);
  //   this.gotoHeader.emit(this.showForm);
  // }

  toggleButton(){
    let dialogRef = this.dialog.open(DialogboxComponent, {
      width:'500px',
      data : {name : 'Aditya'}
    });

    dialogRef.afterClosed().subscribe((text:string) => {

      if(!text){
        alert('Entre Task Please!!')
        return;
      }
      
      const newEntry = {name : text, id: TaskItems.length};
      TaskItems.push(newEntry);

      console.log(text)
    })
  }
}
