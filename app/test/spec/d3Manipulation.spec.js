define(['utils/d3Manipulation', 'api/dataApi'], function(D3Manipulation, DataApi){


  describe('creating a svg ', function(){

    beforeEach(function(){
      var dataObject = new DataApi.getDataObject('revenue');
      D3Manipulation.createSvg('revenue', 100, 100);
    });

    it('has to be created', function(){
      expect(document.getElementById('revenue').childNodes[1].tagName).toEqual('svg');
    });

    it('has to have a width of 100', function(){
      expect(document.getElementById('revenue').childNodes[1].getAttribute('width')).toEqual('100');
    });

    it('has to have a height of 100', function(){
      expect(document.getElementById('revenue').childNodes[1].getAttribute('height')).toEqual('100');
    });

    afterEach(function(){
      document.getElementById('revenue').childNodes[1].remove();
    });

  });


  describe('creating a layer ', function(){
    
    beforeEach(function(){
      var dataObject = new DataApi.getDataObject('revenue');
      var layer = D3Manipulation.createSvg('revenue', 100, 100);
      D3Manipulation.createLayer(layer,'g','' );
    });

    it('has to be created', function(){
      expect(document.getElementsByTagName('g').length).not.toEqual(0);
    });

    afterAll(function(){
      document.getElementById('revenue').childNodes[1].remove();
    });

  });

  describe('creating an area ', function(){
    
    beforeEach(function(){
      var dataObject = new DataApi.getDataObject('revenue');
      var svg = D3Manipulation.createSvg('revenue', 100, 100);
      var layer = D3Manipulation.createLayer(svg,'g','' );
      D3Manipulation.createArea(layer, 100, 100, 10, {}, 'blue');
    });

    it('has to be created', function(){
      expect(document.getElementsByTagName('path').length).not.toEqual(0);
    });

    afterAll(function(){
      document.getElementById('revenue').childNodes[1].remove();
    });

  });

  describe('creating the marks ', function(){
    
    beforeEach(function(){
      var dataObject = new DataApi.getDataObject('revenue');
      var svg = D3Manipulation.createSvg('revenue', 100, 100);
      var layer = D3Manipulation.createLayer(svg,'g','' );
      D3Manipulation.createMarks(layer, 10, function(){});
    });

    it('has to be created', function(){
      expect(document.getElementsByTagName('line').length).not.toEqual(0);
    });

    afterAll(function(){
      document.getElementById('revenue').childNodes[1].remove();
    });

  });

  describe('creating the mask ', function(){
    
    beforeEach(function(){
      var dataObject = new DataApi.getDataObject('revenue');
      var svg = D3Manipulation.createSvg('revenue', 100, 100);
      var layer = D3Manipulation.createLayer(svg,'g','' );
      D3Manipulation.createMask(layer, 10,10);
    });

    it('has to be created', function(){
      expect(document.getElementsByTagName('mask').length).not.toEqual(0);
    });

    afterAll(function(){
      document.getElementById('revenue').childNodes[1].remove();
    });

  });

  describe('creating the circle data ', function(){
    
    beforeEach(function(){
      var dataObject = new DataApi.getDataObject('revenue');
      var svg = D3Manipulation.createSvg('revenue', 100, 100);
      var layer = D3Manipulation.createLayer(svg,'g','' );
       D3Manipulation.createDataCircle(layer, [{'value': 1210, 'color': 'black'}, {'value': 10, 'color': 'black'}], 10);
    });

    it('has to be created', function(){
      expect(document.getElementsByTagName('path').length).not.toEqual(0);
    });

    afterAll(function(){
      document.getElementById('revenue').childNodes[1].remove();
    });

  });

  describe('creating the circle data ', function(){
    
    beforeEach(function(){
      var dataObject = new DataApi.getDataObject('revenue');
      var svg = D3Manipulation.createSvg('revenue', 100, 100);
      var layer = D3Manipulation.createLayer(svg,'g','' );
      var dades = [{'name': 'hola', 'marginy': -20 , class: 'main-title' },
                 {'name': 'adéu', 'marginy': 8, class: 'main-total'}];
      D3Manipulation.createLabels(layer, dades);
    });

    it('has to be created', function(){
      expect(document.getElementsByTagName('text').length).not.toEqual(0);
    });

    afterAll(function(){
      document.getElementById('revenue').childNodes[1].remove();
    });

  });
  

});
