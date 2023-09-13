onsole.log(title, lastName); // LOG: Sir BarjsAlot

// Code snippet 2 - Destructuring assignment with object

const doggie = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFood: 'hot dogs'
};
const { name, breed } = doggie;
console.log(name); // Output: Buzz
console.log(breed); // Output: Great Pyrenees

// Code snippet 3 - Destructuring assignment with nested object

const doggieNested = {
  name: 'Buzz',
  breed: 'Great Pyrenees',
  furColor: 'black and white',
  activityLevel: 'sloth-like',
  favoriteFoods: {
    meats: {
      ham: 'smoked',
      hotDog: 'Oscar Meyer',
    },
    cheeses: {
      american: 'kraft'
    }
  }
};

const { ham, hotDog } = doggieNested.favoriteFoods.meats;
console.log(ham); // Output: smoked
console.log(hotDog); // Output: Oscar Meyer

// Code snippet 4 - Destructuring assignment with array

const dogs = ['Great Pyrenees', 'Pug', 'Bull Mastiff'];
const [, small, giant] = dogs;
console.log(small, giant); // LOG: Pug Bull Mastiff

// Code snippet 5 - Destructuring assignment with array from string split

const dogsNameSplit = 'Sir Woody BarksALot';
const [titleSplit, firstName, lastNameSplit] = dogsNameSplit.split(' ');
console.log(titleSplit, firstName, lastNameSplit); // LOG: Sir Woody BarksALot