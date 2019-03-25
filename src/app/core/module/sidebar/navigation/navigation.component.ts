import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonService } from '../../../../services/person.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public detaildata: {};
  public condition = 0;
  @Output() eventClicked = new EventEmitter<Event>();
  public loadPersonDetails: (a: any) => void;
  constructor(private person: PersonService) {
  }
  ngOnInit() {
    this.person.fetchUsers().subscribe((res) => {
      this.detaildata = res;
      this.loadPersonDetails(0);
      console.log(res);
    });
    this.loadPersonDetails = (event) => {
      this.eventClicked.emit(event);
      this.condition = event;
    };
  }

}
