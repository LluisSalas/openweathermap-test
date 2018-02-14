import { City } from './city.model';

export class CityService {
    private cities: City[] = [
        new City("3124724", "Santiago", ""),
        new City("3435910", "Buenos Aires", ""),
        new City("3936456", "Lima", ""),
        new City("3448439", "Sao Pablo", ""),
    ];

    getCities() {
        return this.cities.slice(); // Devolvemos una copia del array
    }
}