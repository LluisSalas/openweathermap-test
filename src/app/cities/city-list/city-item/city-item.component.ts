import { Component, Input, OnInit } from '@angular/core';

import { City } from '../../city.model';
import { CityService } from '../../city.service';
import { CityApiService } from '../../city-api.service';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
  @Input() city: City;

  constructor(private cityService: CityService, private cityApiService: CityApiService) { }

  ngOnInit() {
    this.cityApiService.getCityTime(this.city.id)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onSelected() {
    this.cityService.citySelected.emit(this.city);
  }
}
