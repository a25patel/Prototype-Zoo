var Animal = require('../src/animal.js');
var animal;

describe('Animal', function(){

  beforeEach(function(){
    // create a new animal object each time
    animal = new Animal ("Miko", 27, "Pig");
    animal2 = new Animal ('Zazu', 4 ,'Toucan');
  });

  describe('#oink', function(){
    it('should oink if it is a pig', function(){
      expect(animal.oink()).toEqual('oink!')
    });
    it('should not oink if it is not pig', function(){
      expect(animal2.oink()).toEqual('This is not a pig')
    });
  });

  describe('#growUp', function(){
    it('should increment the age by one', function(){
      animal.growUp()
      expect(animal.age).toEqual(28)
    });
  });

  describe('#awake', function(){
    it('should initially be off', function(){
      expect(animal.awake).toEqual(false)
    });
  });

   describe('#wakeUp', function(){
    it('should change state to awake', function(){
      animal.wakeUp();
      expect(animal.awake).toEqual(true)
    });
  });

  describe('#sleep', function(){
    it('should initially be sleeping', function(){
      animal.sleep();
      expect(animal.awake).toEqual(false)
    });
  });

  describe('#feed', function(){
    it('should get fed if awake', function(){
      animal.wakeUp();
      expect(animal.feed()).toEqual('NOM NOM NOM')
    });
    it('not should get fed if sleeping', function(){
      animal.sleep();
      expect(animal.feed()).toEqual('Must be fed later')
    });
  });
});
