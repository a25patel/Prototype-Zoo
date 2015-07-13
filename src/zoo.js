// do not remove this line...you're going to need it for your addAnimal method
var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status= 'closed';
  this.animals = [];
  }



//a method that updates the location of the zoo
Zoo.prototype.changeLocation = function(newLocation){
  this.location = newLocation;
};

//a method that changes the status to `"open"`
Zoo.prototype.open = function(){
  this.status= 'open';
};

//a method that changes the status to `"closed"`
Zoo.prototype.close = function(){
  this.status='closed';
};

//a method that returns `""Open!""` if the zoo is not closed
Zoo.prototype.isOpen = function(){
  if(this.status === 'open'){
    return('Open!')
  }else{
    return('Closed!')
  }
};

Zoo.prototype.addAnimal = function(addAnimal){
  if(this.status=== 'open'){
    this.animals.push(addAnimal);
  }else if(instanceOf(animal)=== true){
    this.animals.push(addAnimal);
  }
  for(var i=0; i< this.animals[i]; i++){
    if(animals[i]!= addAnimal){
      this.animals.push(addAnimal);
    } else {
      return('Animal already exists');
    }
  }
};

//a method that removes an animal from the animals array ONLY if the zoo is open.
Zoo.prototype.removeAnimal = function(remove){
  if(this.status === 'open'){
    this.animals.splice(remove, 1);
  }
};



module.exports=Zoo;
