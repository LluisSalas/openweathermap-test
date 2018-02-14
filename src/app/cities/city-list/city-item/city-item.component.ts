import { Component, Input, OnInit } from '@angular/core';

import { City } from '../../city.model';
import { CityService } from '../../city.service';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
  @Input() city: City;

  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  onSelected() {
    this.cityService.citySelected.emit(this.city);
  }
}
