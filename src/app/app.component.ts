import { Component } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public count = 0;

  public increment = _.debounce(() => {
    this.count = this.count + 1;
  }, 500);
}
