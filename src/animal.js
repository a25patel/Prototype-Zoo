function Animal(name, age, kind, awake){
  this.name = name;
  this.age = age;
  this.kind = kind; // horse, lions , giraffes
  this.awake= awake; // default to false
}

Animal.prototype.oink = function(){
  if(this.kind.toUpperCase() === 'PIG'){
    return'oink!'
  }else{
    return'This is not a pig'
  }
};

Animal.prototype.growUp = function(){
  //a method that increases the age of the animal by one
}

Animal.prototype.feed = function(){
  //if the animal is awake, return `"NOM NOM NOM"`
}

Animal.prototype.wakeUp = function() {
  //a method that changes the awake property to true
}

Animal.prototype.sleep = function () {
  //a method that changes the awake property to false
}

//Constructor function
module.exports=Animal;
