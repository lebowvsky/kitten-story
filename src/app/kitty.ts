export class Kitty {
  constructor(name, breed, birthdate, picture) {
    this.name = name;
    this.breed = breed;
    this.birthdate = birthdate;
    this.picture = picture;
  }
  name: string;
  breed: string;
  birthdate: string;
  picture: string;
}

export let kitten: Kitty[] = [];

export let adoptedKitten: Kitty[] = [];
