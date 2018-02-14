import { Component, OnInit } from '@angular/core';

import { City } from '../city.model';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: City[] = [
    new City("3124724", "Santiago", ""),
    new City("3435910", "Buenos Aires", ""),
    new City("3936456", "Lima", ""),
    new City("3448439", "Sao Pablo", ""),
  ];

  constructor() { }

  ngOnInit() {
  }
}
