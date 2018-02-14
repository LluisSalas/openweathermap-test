import { Component, OnInit } from '@angular/core';

import { City } from '../city.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cities: City[];

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.cities = this.cityService.getCities();
  }
}