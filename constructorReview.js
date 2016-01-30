//Create a Animal Constructor that has the following parameters. species, name, legs, 
//color, food (which is an array of foods they can eat).

function Animal (species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
}


//Now create a person function that creates an object and returns it (not in 
//constructor form) that has the following parameters. name, age, height, gender

function personMaker (name, age, height, gender) {
    var person = {
        name: name,
        age: age,
        height: height,
        gender: gender
    }
    return person;
}


//Create a animal array and a person array.

var animals = [];
var people = [];


//Create two instances of Animal and push those into your animal array

var dog = new Animal(dog, 'Clifford', 4, 'red', ['dog food','bones','grass']);
var cat = new Animal(cat, 'Satan', 4, 'black', ['cat food','poop','cat nip']);

animals.push(dog);
animals.push(cat);

//Create two instances of person and push those into your person array.

var person1 = personMaker('Casey', 26, '5ft 11in', 'male');
var person2 = personMaker('Lacey', 26, '5ft 2.5in', 'female');

people.push(person1);
people.push(person2);


//Now we want every instance of Animal to have a eat method. This method will choose 
//a random item in that instances food array, then alert "(name) ' ate ' (whichever 
//food was chosen)".

Animal.prototype.eat = function () {
    var randItem = this.food[Math.floor(Math.random()*this.food.length)];
    alert(this.name + ' ate ' + randItem);
}

dog.eat();


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

  //Sort of, not directly to just the person objects, it would be adding it to all 
  //objects in general because it is just returning an object, not a person prototype

/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
        //it creates a new instance of an object with this referring to the new obj
  2) What's a good way to describe the keyword 'this'
        //its a reference to whatever you specify (or don't)
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
      //'this' refers to the global scope or the window
*/