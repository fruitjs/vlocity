import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public clickedEvent: Event;
  constructor() {

  }

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }
}
