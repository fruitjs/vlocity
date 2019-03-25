import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../../../../services/person.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() event: Event;
  public detaildata: any = [];
  constructor(private person: PersonService) { }
  ngOnInit() {
    this.person.fetchUsers().subscribe((res) => {
      console.log(res);
      this.detaildata = res;
      console.log(event);
    });
  }
}
