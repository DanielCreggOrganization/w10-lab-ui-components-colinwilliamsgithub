import { Component } from '@angular/core';
import { AlertController, ToastController, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonModal, IonInput, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonButtons, IonModal, IonInput, IonLabel, IonItem],
})
export class Tab3Page {
  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm Action',
      message: 'Are you sure you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelled');
          }
        },
        {
          text: 'Delete',
          cssClass: 'danger',
          handler: () => {
            console.log('Deleted');
          }
        },
        {
          text: 'Save',
          cssClass: 'primary',
          handler: () => {
            console.log('Saved');
          }
        }
      ]
    });
    await alert.present();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Task completed successfully',
      duration: 3000,
      buttons: [
        {
          text: 'UNDO',
          role: 'cancel',
          handler: () => { console.log('Undo clicked'); }
        }
      ]
    });
    await toast.present();
  }

  async showCustomToast() {
    const toast = await this.toastController.create({
      message: 'This is a custom toast',
      duration: 2000,
      position: 'top', // Try: 'top', 'middle', or 'bottom'
      cssClass: 'custom-toast', // Add your own CSS class
    });
    await toast.present();
  }
}