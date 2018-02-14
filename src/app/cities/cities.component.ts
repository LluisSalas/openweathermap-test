import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [CityService]
})
export class CitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
