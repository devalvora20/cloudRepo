import { Component } from '@angular/core';

@Component({
  selector: 'st-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  title = 'welcome-app';
  msg='Hello, World!... Welcome to angular 6'
  expression=22/7;
}
