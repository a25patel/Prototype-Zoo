# The Prototype Zoo

The idea of this lab is to get you comfortable with writing and implementing the basics of OOP in JavaScript. We will also review testing in the lab.

### Each instance of an Animal should have the following properties and methods:

* name
* age
* kind - a horse/lion/pig for example
* awake - this should default to `false`
* oink() - a method that returns "oink!" if the instance of an animal is a pig. This method should work regardless of whether `this.kind = "PiG"` or `this.kind = "pig"`
* growUp() - a method that increases the age of the animal by one
* feed() - if the animal is awake, return `"NOM NOM NOM"`
* wakeUp() - a method that changes the awake property to true
* sleep() - a method that changes the awake property to false

### Each instance of a Zoo should have the following properties and methods:

* name
* location
* status - this should default to `"closed"`
* animals - this should default to an empty array
* changeLocation() - a method that updates the location of the zoo
* open() - a method that changes the status to `"open"`
* close() - open - a method that changes the status to `"closed"`
* isOpen() - a method that returns `""Open!""` if the zoo is not closed
* addAnimal() - a method that adds an animal to the animals array ONLY if the zoo is open, the animal is an instance of the Animal class AND the animal is not already in the animals array.
* removeAnimal() - a method that removes an animal from the animals array ONLY if the zoo is open.  
