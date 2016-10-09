define(['api/dataApi', 'components/graphicComponent'], function(DataApi, graphicComponent){

  // TODO s'ha d'afegir testos per assegurar que ha creat totes les marques
  // lines, paths, masks, completant el d3Manipulation

  describe('creating a graphic component ', function(){

    var svg;

    beforeAll(function(){
      var dataObject = new DataApi.getDataObject('revenue');
      graphicComponent.draw(dataObject);
      svg = document.getElementById("revenue").childNodes[1];
    });

    it('it has to have a svg object', function(){
      expect(document.getElementById("revenue").childNodes[1].nodeName).toEqual('svg');
    });
    
    it('it has to have a g object', function(){
      expect(document.getElementById("revenue").childNodes[1].childNodes[0].nodeName).toEqual('g');
    });

    it('it has to have a legend', function(){
      expect(document.getElementById("revenue").childNodes[2].nodeName).toEqual('DIV');
      expect(document.getElementById("revenue").childNodes[2].className).toEqual('data-legend');
    });

    afterAll(function(){
      document.getElementById('revenue').childNodes[1].remove();
    });

  });

});
