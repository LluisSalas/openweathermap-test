import { Component, Input, OnInit } from '@angular/core';

import { City } from '../../city.model';
import { CityTemp } from '../../city-temp.model';
import { CityService } from '../../city.service';
import { CityApiService } from '../../city-api.service';

@Component({ 
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
  @Input() city: City;

  constructor(private cityService: CityService, private cityApiService: CityApiService) {  }

  ngOnInit() {
    // Obtenemos temperatura
    this.getCityTime();
    // Iniciamos intervalo para obtener temperatura cada 3 minutos
    setInterval(() => { this.getCityTime(); }, 180000);
  } 

  getCityTime() {
    this.cityApiService.getCityTime(this.city.id)
        .subscribe(
          (response) => this.city.temp = new CityTemp(response.main.temp, new Date()),
          (error) => console.log(error)
        )
  }

  onSelected() {
    this.cityService.citySelected.emit(this.city);
  }
}