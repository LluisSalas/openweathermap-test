// Servicio encargado de recuperar el tiempo de las ciudades de la API externa
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CityApiService {
    private apiKey = "83e97c1a598480455edab0056547e221";
    private basePath = "http://api.openweathermap.org/data/2.5/weather?";

    constructor(private http: Http) {
    }

    getCityTime(id: string) {
        const path = this.basePath + "id=" + id + "&units=metric&appid=" + this.apiKey;
        return this.http.get(path);
    }
}