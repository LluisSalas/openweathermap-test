import { Component, Input, OnInit } from '@angular/core';
import { Response } from '@angular/http';

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
        (response: Response) => {
          const data = response.json();
          this.city.temp = data.main.temp;
        },
        (error) => console.log(error)
      );
  }

  onSelected() {
    this.cityService.citySelected.emit(this.city);
  }
}
