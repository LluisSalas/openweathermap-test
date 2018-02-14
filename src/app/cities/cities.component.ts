import { Component, OnInit } from '@angular/core';
import { City } from './city.model';
import { CityService } from './city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [CityService]
})
export class CitiesComponent implements OnInit {
  selectedCity: City;

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.citySelected
      .subscribe(
        (city: City) => {
          this.selectedCity = city;
        }
      );
  }
}