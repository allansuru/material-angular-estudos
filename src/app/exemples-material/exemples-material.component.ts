import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-exemples-material',
  templateUrl: './exemples-material.component.html',
  styleUrls: ['./exemples-material.component.css']
})
export class ExemplesMaterialComponent implements OnInit {

  isChecked = true;
  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
  favoriteSeason2;

  constructor() { }

  ngOnInit() {

  }
  onChange(e) {
 console.log(e);
  }
  onChangeRadioButton(favoriteSeason2) {
    this.favoriteSeason2 = favoriteSeason2;
    console.log('Radio Btn:', this.favoriteSeason2);
  }

}
