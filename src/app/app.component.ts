import { Component, OnInit } from '@angular/core';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'vlocity';
  public getProducts: () => void;
  constructor(private person: PersonService) {

  }
  ngOnInit() {
    this.getProducts = () => {
      this.person.fetchUsers();
    };
  }
}
