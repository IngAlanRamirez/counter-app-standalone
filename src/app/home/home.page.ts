import { Component } from '@angular/core';
import {
  IonHeader,
  IonContent,
  IonButton,
  IonIcon,
  IonText,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  AlertController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronUpOutline, chevronDownOutline } from 'ionicons/icons';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonFooter,
    IonText,
    IonIcon,
    IonButton,
    IonHeader,
    IonContent,
    IonIcon,
  ],
  providers: [AlertController],
})
export class HomePage {
  counter: number = 0;
  showNumber: string;

  constructor(private alertController: AlertController) {
    this.showNumber = '00';
    addIcons({
      chevronUpOutline,
      chevronDownOutline,
    });
  }

  ionViewWillEnter() {
    Preferences.get({ key: 'counter' }).then((result) => {
      if (result.value) {
        this.counter = parseInt(result.value, 10);
        if (isNaN(this.counter) || this.counter < 0 || this.counter > 99) {
          this.counter = 0;
          this.saveCounter();
        }
        this.showNumber = this.counter.toString().padStart(2, '0');
      }
    });
  }

  up() {
    this.counter++;
    this.showNumber = this.counter.toString().padStart(2, '0');
    this.saveCounter();
  }

  down() {
    this.counter--;
    this.showNumber = this.counter.toString().padStart(2, '0');
    this.saveCounter();
  }

  async reset() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que quieres reiniciar el contador?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Reiniciar',
          handler: () => {
            this.counter = 0;
            this.showNumber = this.counter.toString().padStart(2, '0');
            this.saveCounter();
          },
        },
      ],
    });
    await alert.present();
  }

  private saveCounter() {
    Preferences.set({
      key: 'counter',
      value: this.counter.toString(),
    });
  }
}
