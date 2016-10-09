define(['api/dataApi'], function(DataApi){

  describe('geting unexisting data', function(){

     var dataObject = new DataApi.getDataObject('inventat');

    it('the dataObject should be default', function(){     
      expect(dataObject.name).toEqual('inventat');
      expect(dataObject.total).toEqual(0);
      expect(dataObject.tablet).toEqual(0);
      expect(dataObject.smartphone).toEqual(0);
      expect(dataObject.percentage_smartphone).toEqual(0);
      expect(dataObject.percentage_tablet).toEqual(0);
    });
  });

  describe('getting existing data ', function(){

    var dataObject = new DataApi.getDataObject('revenue');

    it('the dataObject should be with input values', function(){
      expect(dataObject.name).not.toEqual('Default name');
      expect(dataObject.name).toEqual('revenue');
      expect(dataObject.tablet).toEqual(120000);
      expect(dataObject.smartphone).toEqual(80000);
      expect(dataObject.fluctuation).toEqual([10,12,14,11,14,16,18,17,21,22,24,25,23,22,24,25,26,25,26,25,24,22,21]);
      expect(dataObject.total).toEqual(200000);
      expect(dataObject.colors).toEqual(['#52d321', '#016501']);
    });

    it('the percentage should be correct', function(){
      expect(dataObject.percentage_tablet).toEqual(60);
      expect(dataObject.percentage_smartphone).toEqual(40);
    });
  });


});
