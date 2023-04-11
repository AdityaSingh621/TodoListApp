import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent {
  text!: string;

  constructor(
    private dialogRef: MatDialogRef<EditTaskComponent>,
    private snackBar: MatSnackBar
  ) {}

  onCancel() {
    console.log('Closed');
    console.log(this.text);
    this.dialogRef.close();
  }

  openSnackBar(val: string, action: string) {
    if (!val) {
      console.log('nothing');
      return;
    }

    this.snackBar.open(val, action, { duration: 3000 });

    // dialogRef.afterClosed()
  }
}
