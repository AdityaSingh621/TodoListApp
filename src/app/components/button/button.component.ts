import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() gotoHeader = new EventEmitter();

  @Input() text !: string;
  @Input() color !: string;

  showForm : boolean = false;

  toggleButton(){
    this.showForm = !this.showForm;
    // console.log(this.showForm);
    this.gotoHeader.emit(this.showForm);
  }
}
