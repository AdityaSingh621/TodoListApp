import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showTask !: string;

  trueOrFlase(val : string){
    this.showTask = val;
  }
}
