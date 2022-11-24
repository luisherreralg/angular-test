import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  counter = 0;

  counterIncrement() {
    this.counter++;
  }

  counterDecrement() {
    this.counter--;
  }
}
