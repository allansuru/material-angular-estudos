import { Component, OnInit } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-exemples-material',
  templateUrl: './exemples-material.component.html',
  styleUrls: ['./exemples-material.component.css']
})
export class ExemplesMaterialComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);
  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  // ------------------------------------------///
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
