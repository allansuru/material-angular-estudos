// https://stackblitz.com/edit/angular-dlxnmx?file=app%2Fcva-date.component.ts

import { Component, OnInit } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {FormControl, Validators} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

// moment
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE,Input} from '@angular/material/core';
import * as _moment from 'moment';

const moment = _moment;


@Component({
  selector: 'app-exemples-material',
  templateUrl: './exemples-material.component.html',
  styleUrls: ['./exemples-material.component.css'],
   providers: [
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class ExemplesMaterialComponent implements OnInit {

  _dateValue: any; // notice the '_'

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
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

  // ------------------------//

  events: string[] = [];
  evento: any = [
    {
    id: 1,
    name: 'Allan Passos',
    corpo: 'Evento teste',
    data: '2018/02/24',
    titulo: 'Evento de teste'
  },
  {
    id: 2,
    name: 'Kawana Okubo',
    corpo: 'Evento legal',
    data: '2019/02/24',
    titulo: 'Aniversário Ronaldo'
  },
  {
    id: 3,
    name: 'Guilherme Okubo ',
    corpo: 'indo ao parque',
    data: '2018/02/25',
    titulo: 'goto Ibirapuera park!'
  }
];
recebeFiltro: any[] = [];



  constructor() { }

  ngOnInit() {
  //  console.log(this.evento);
   // console.log(this.date, this.serializedDate);
  }
  get dateValue() {
    return moment(this._dateValue, 'YYYY/MM/DD HH:mm:ss');
  }

  set dateValue(val) {
    this._dateValue = moment(val).format('YYYY/MM/DD HH:mm:ss');
    this.propagateChange(this._dateValue);
  }

  onChange(e) {
 console.log(e);
  }
  onChangeRadioButton(favoriteSeason2) {
    this.favoriteSeason2 = favoriteSeason2;
    console.log('Radio Btn:', this.favoriteSeason2);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>, picker) {
    //  console.log('Evento Data: ', this.evento.data);
  }

  changeEvent(type: string, event: MatDatepickerInputEvent<Date>) {
   // console.log('Data change: ', event.value);
   this.dateValue = moment(event.value, 'YYYY/MM/DD HH:mm:ss');

   console.log('Data Formatado: ', this.dateValue['_i']);
   const validaDataEvento: string = this.evento.data;
   const dt = validaDataEvento.split('/');
   if (dt[0].toString() === this.dateValue['_i'].split('/')[0]) {
     this.evento.filter(x => {
       if (x['data'] === validaDataEvento) {
         this.recebeFiltro = x;
       }
    });
   }
   console.log(this.recebeFiltro);
  }

  selecionaEvento(data) {
    console.log('data do evento selecionado:', data);
  }

  propagateChange = (_: any) => { };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }

}
