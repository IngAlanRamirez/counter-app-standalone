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

  up() {
    this.counter++;
    this.showNumber = this.counter.toString().padStart(2, '0');
  }

  down() {
    this.counter--;
    this.showNumber = this.counter.toString().padStart(2, '0');
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
          },
        },
      ],
    });
    await alert.present();
  }
}
