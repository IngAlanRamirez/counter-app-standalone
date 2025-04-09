import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {

  counter: number = 0;
  showNumber: string;

  constructor() {
    this.showNumber = '00';
  }

  up() {
    this.counter++;
    this.showNumber = this.counter.toString().padStart(2, '0');
  }

  down() {
    this.counter--;
    this.showNumber = this.counter.toString().padStart(2, '0');
  }
}
