const doggie = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFood: 'hot dogs'
  };
  
  const { name, breed } = doggie;
  name; // => "Buzz"
  breed; // => "Great Pyrenees"

  
const doggie = {
name: 'Buzz',
breed: 'Great Pyrenees',
furColor: 'black and white',
activityLevel: 'sloth-like',
favoriteFood: 'hot dogs'
};

const { name, breed } = doggie;
name; // => "Buzz"
breed; // => "Great Pyrenees"
``


const doggie = {
name: 'Buzz',
breed: 'Great Pyrenees',
furColor: 'black and white',
activityLevel: 'sloth-like',
favoriteFoods: {
meats:{
ham: 'smoked',
hotDog: 'Oscar Meyer',
},
cheeses:{
american: 'kraft'
}
}
};

const { ham, hotDog } = doggie.favoriteFoods.meats;
ham; // => "smoked"
hotDog; // => "Oscar Meyer"
``
javascript
const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
const [, small, giant] = dogs;
console.log(small, giant); // LOG: Pug Bull Mastiff

const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');
console.log(title, firstName, lastName); // LOG: Sir Woody BarksALot


