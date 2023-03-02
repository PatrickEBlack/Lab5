import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-app';

  count: number = 0;
  onClick() {
    this.count++;
  }

  MyHiddenVar: boolean = true;

  OnDoubleClick() {
    if (this.MyHiddenVar === false) {
      this.MyHiddenVar = true;
    }
    else {
      this.MyHiddenVar = false;
    }
  }

}


