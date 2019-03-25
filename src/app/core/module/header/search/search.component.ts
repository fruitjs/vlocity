import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public clearInput: () => void;
  public serachValue = '';
  constructor() { }

  ngOnInit() {
    this.clearInput = () => {
      this.serachValue = '';
      console.log('clear');

    };
  }

}
