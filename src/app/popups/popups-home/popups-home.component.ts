import { Component } from '@angular/core';

@Component({
  selector: 'app-popups-home',
  templateUrl: './popups-home.component.html',
  styleUrls: ['./popups-home.component.scss'],
})
export class PopupsHomeComponent {
  modalOpen = false;

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
