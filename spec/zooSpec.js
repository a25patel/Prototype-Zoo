var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js'),
animal,
zoo;

describe('Zoo', function(){

  beforeEach(function(){
    // create a new zoo object each time
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation('Long Island')
      expect(zoo.location).toEqual('Long Island')
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open()
      expect(zoo.status).toEqual('open')
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open()
      expect(zoo.isOpen()).toEqual('Open!')
    });
    it('should see if the zoo is closed', function(){
      zoo.open()
      zoo.close()
      expect(zoo.isOpen()).toEqual('Closed!')
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([])
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.open();
      zoo.addAnimal('lion');
      expect(zoo.animals).toEqual(['lion'])
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal('lion');
      expect(zoo.animals).toEqual(['lion'])
    });

    it('should only add instances of animals', function(){
      zoo.open();
      zoo.addAnimal('lion');
      expect(zoo.animals).toEqual(['lion'])
    });

    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal('lion');
      expect(zoo.animals).toEqual(['lion'])
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.removeAnimal(0);
      expect(zoo.animals).toEqual([])
    });
  });
});
