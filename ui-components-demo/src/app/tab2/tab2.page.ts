import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItemOption, IonIcon, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonBadge, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { trash, star, share } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItemOption, IonIcon, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonBadge, IonList]
})
export class Tab2Page {

  constructor() {
    addIcons({ trash, star, share });
  }

}
