define(['models/dataObject'], function(DataObject){

  describe('creating empty dataObject ', function(){
    it('the dataObject should be with default values', function(){
      var dataObject = new DataObject();
      expect(dataObject.name).toEqual('Default name');
      expect(dataObject.total).toEqual(0);
      expect(dataObject.tablet).toEqual(0);
      expect(dataObject.smartphone).toEqual(0);
      expect(dataObject.fluctuation).toEqual([]);
      expect(dataObject.percentage_smartphone).toEqual(0);
      expect(dataObject.percentage_tablet).toEqual(0);
      expect(dataObject.colors).toEqual(['lightGrey','grey']);
    });
  });

  describe('creating a dataObject ', function(){
    it('the dataObject should be with input values', function(){
      var dataObject = new DataObject('revenue',120000,80000,[2,3],['000000','FFFFFFF']);
      expect(dataObject.name).not.toEqual('Default name');
      expect(dataObject.name).toEqual('revenue');
      expect(dataObject.tablet).toEqual(120000);
      expect(dataObject.smartphone).toEqual(80000);
      expect(dataObject.fluctuation).toEqual([2,3]);
      expect(dataObject.total).toEqual(200000);
      expect(dataObject.colors).toEqual(['000000','FFFFFFF']);
    });
  });

  describe('creating a dataObject ', function(){
    it('the percentage should be correct', function(){
      var dataObject = new DataObject('revenue',120000,80000,[2,3]);
      expect(dataObject.percentage_tablet).toEqual(60);
      expect(dataObject.percentage_smartphone).toEqual(40);
    });
  });

});
