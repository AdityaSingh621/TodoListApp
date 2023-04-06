import { Component, Inject } from '@angular/core';
import { MatDialogRef,MatDialog } from '@angular/material/dialog';
import { TaskItems } from 'src/app/mock-task';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss'],
})
export class DialogboxComponent {
  text!: string;

  constructor(
    private dialogRef: MatDialogRef<DialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    if (!this.text) {
      alert('enter a text, Please!');
      return;
    }

    const newEntry = {
      id: TaskItems.length,
      name: this.text,
    };

    // console.log(TaskItems.length);

    TaskItems.push(newEntry);
    console.log(newEntry);
    console.log(TaskItems);

    this.text = '';
  }

  openSnackBar(val :string, action : string){
    if(!val){
      return;
    }
    this.snackBar.open(val, action, {duration: 2000});
    // console.log(val)
  }

  onCancel() {
    console.log('Closed');
    this.dialogRef.close();
  }
}
