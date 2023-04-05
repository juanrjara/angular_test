import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>My First Angular App</h1><app-new-component></app-new-component>',
  styles: ['h1 { color: blue; text-align: center }']
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartest';
}
