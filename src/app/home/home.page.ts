import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonText, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons} from 'ionicons';
import { chevronUpOutline, chevronDownOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCol, IonRow, IonGrid, IonFooter, IonText, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon],
})
export class HomePage {

  counter: number = 0;
  showNumber: string;

  constructor() {
    this.showNumber = '00';
    addIcons({
      chevronUpOutline,
      chevronDownOutline,
  })
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
