import { Component, OnInit } from '@angular/core';
import { City } from './city.model';
import { CityService } from './city.service';
import { CityApiService } from './city-api.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [CityService, CityApiService]
})
export class CitiesComponent implements OnInit {
  selectedCity: City;

  constructor(private cityService: CityService, private cityApiService: CityApiService) { }

  ngOnInit() {
    this.cityService.citySelected
      .subscribe(
        (city: City) => {
          this.selectedCity = city;
        }
      );
  }
}