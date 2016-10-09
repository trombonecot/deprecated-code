define(['api/dataApi', 'components/legendComponent'], function(DataApi, LegendComponent){

  describe('creating a legend component ', function(){

    beforeEach(function(){
      var dataObject =  new DataApi.getDataObject('revenue');
      LegendComponent.createLegend(dataObject);
    });

    it('it has to create a div legend', function(){
      expect(document.getElementById('revenue').childNodes[1].tagName).toEqual('DIV');
    });

    it('the class of the div must be data-legent', function(){
      expect(document.getElementById('revenue').childNodes[1].className).toEqual('data-legend');
    });

    afterEach(function(){
      document.getElementById('revenue').childNodes[1].remove();
    });
  });
});
