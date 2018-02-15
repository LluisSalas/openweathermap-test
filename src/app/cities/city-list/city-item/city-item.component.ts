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

  // Metodo para obtener temperatura
  getCityTime() {
    this.cityApiService.getCityTime(this.city.id)
        .subscribe(
          (response) => {
            // Actualizamos temperatura
            this.city.temp = new CityTemp( Math.round(response.main.temp), new Date());
            // Añadimos al historial
            this.city.tempHistorial.unshift( this.city.temp );
          },
          (error) => console.log(error)
        )
  }

  onSelected() {
    this.cityService.citySelected.emit(this.city);
  }
}