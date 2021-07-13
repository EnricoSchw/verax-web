import { Component } from '@angular/core';
import { Verax } from 'verax-sdk';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'verax-web';

  x = new Verax();

  constructor() {
    this.x.init('');
  }


}
