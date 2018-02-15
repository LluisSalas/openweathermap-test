
import { CityTemp } from './city-temp.model';

export class City {
    public id: string;
    public name: string;
    public imagePath: string;
    public temp: CityTemp;
    public tempHistorial: CityTemp[];

    constructor(id:string, name: string, imagePath: string) {
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.temp = new CityTemp(0, new Date());
    }
}