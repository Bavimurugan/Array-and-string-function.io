//array functions

let PetAnimals= ['dog','parrot','rabbit','cow'];

// Insert into an array end
let addPetAnimals= PetAnimals.push('goat'); 
console.log(PetAnimals);

// Insert into an array beginning
let addbeginning = PetAnimals.unshift('cat'); 

// Delete an item from array at the end
let deletelastelement = PetAnimals.pop(); 

// Delete an item from array at the beginning
let deletefirstelement =  PetAnimals.shift(); 

// Joining the array elements
let joinarray= PetAnimals.join('*');

// Splicing 

let Splicing = PetAnimals.splice(1,2);
console.log(Splicing);
let removeandreplace = PetAnimals.splice(1,1,'donkey');

// Slicing 
const slicedArrayWithEnd = PetAnimals.slice(0,2);
const slicedArrayWithOutEnd = PetAnimals.slice(1);

// Find an element/item in an array
const isthere = PetAnimals.includes('cow');



//map function
let  animals = PetAnimals.map(function(value){
    return value;
})

let animallist = PetAnimals.map((value,index)=>index);

let details=[{
    name:"priya",
    age:20
    
},{
    name:"aarthi",
    age:21

}];
let names=details.map(value=>value.name);
let id=details.map(value=>value.id);

//filter function

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 

//some function
const users = [
    { name: 'ravi',
      age: 25
     },
    { name: 'rethi',
      age: 20
     },
    { name: 'kavi',
      age: 30 
    }
];

const hasUnderageUser = users.some(user => user.age < 21);
console.log(hasUnderageUser); 

//every function

const even = [2, 4, 6, 8,10,12];
const allEvenNumbers = even.every(num => num % 2 === 0);
console.log(allEvenNumbers); 

//reverse

const reversednumber = even.reverse();

console.log(reversednumbers);

//reduce

const add = numbers.reduce((value, index) => {
    return value + index;
}, 0);

console.log(sum); 




