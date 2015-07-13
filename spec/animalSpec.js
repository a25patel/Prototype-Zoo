var Animal = require('../src/animal.js');
var animal;

describe('Animal', function(){

  beforeEach(function(){
    // create a new animal object each time
    animal1 = new Animal ("Miko", 27, "Pig");
    animal2 = new Animal ('Zazu', 4 ,'Toucan');
    animal3 = new Animal ('Iago', 15, 'Tiger');
    animal4 = new Animal ('Olaf', 26 , 'Giraffe');
    animal5 = new Animal ('GusGus', 32, 'Elephant');
  });

  describe('#oink', function(){
    it('should oink if it is a pig', function(){
      expect(animal1.oink()).toEqual('oink!')
    });
    xit('should not oink if it is not pig', function(){

    });
  });

  describe('#growUp', function(){
    xit('should increment the age by one', function(){

    });
  });

  describe('#awake', function(){
    xit('should initially be off', function(){

    });
  });

   describe('#wakeUp', function(){
    xit('should change state to awake', function(){

    });
  });

  describe('#sleep', function(){
    xit('should initially be sleeping', function(){

    });
  });

  describe('#feed', function(){
    xit('should get fed if awake', function(){

    });
    xit('not should get fed if sleeping', function(){

    });
  });
});
