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

export let kitten: Kitty[] = [
  {
    name: 'Jean',
    breed: 'Persan',
    birthdate: '13/03/2020',
    picture:
      'https://www.wanimo.com/veterinaire/wp-content/uploads/2019/12/prenoms-chaton-r-2020@2x.jpg',
  },
  {
    name: 'Phil',
    breed: 'Persan',
    birthdate: '13/03/2020',
    picture:
      'https://www.santevet.com/upload/admin/images/article/chaton%20adoption.jpg',
  },
  {
    name: 'Lou',
    breed: 'Persan',
    birthdate: '13/03/2020',
    picture:
      'https://www.wanimo.com/veterinaire/wp-content/uploads/2019/12/prenoms-chaton-r-2020@2x.jpg',
  },
  {
    name: 'Xav',
    breed: 'Persan',
    birthdate: '13/03/2020',
    picture:
      'https://www.wanimo.com/veterinaire/wp-content/uploads/2019/12/prenoms-chaton-r-2020@2x.jpg',
  }
];

export let adoptedKitten: Kitty[] = [];
