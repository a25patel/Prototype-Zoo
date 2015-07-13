function Animal(name, age, kind, awake){
  this.name = name;
  this.age = age;
  this.kind = kind; // horse, lions , giraffes
  this.awake= false;  // default to false
}

Animal.prototype.oink = function(){
  if(this.kind.toUpperCase() === 'PIG'){
    return'oink!'
  }else{
    return'This is not a pig'
  }
};

Animal.prototype.growUp = function(){
  this.age += 1;
};

Animal.prototype.feed = function(){
  if(this.awake === true){
    return('NOM NOM NOM')
  }else{
    return('Must be fed later')
  }
}

Animal.prototype.wakeUp = function() {
  this.awake= true;
}

Animal.prototype.sleep = function () {
  this.awake= false;
}

//Constructor function
module.exports=Animal;
