export class City {
    public id: string;
    public name: string;
    public imagePath: string;

    constructor(id:string, name: string, imagePath: string) {
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
    }
}