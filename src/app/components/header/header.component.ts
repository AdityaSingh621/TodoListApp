import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Todo List'

  showAddClose !: string;
  @Output() gotoApp = new EventEmitter();


  showTask(val :string){
    // console.log(val);
    this.showAddClose = val;
    this.gotoApp.emit(val);
  }
}
