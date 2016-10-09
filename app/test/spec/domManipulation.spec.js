define(['utils/domManipulation'], function(DomManipulation){
  describe('creating a div ', function(){

    var div;
    var parent;

    beforeEach(function(){
      div = DomManipulation.createDiv('test-class');
      parent  = document.getElementById("revenue");
      parent.appendChild(div);
    });

    it('it has to create a div', function(){
      expect(parent.childNodes[1].tagName).toEqual('DIV');
    });

    it('the class of the div must be test-class', function(){
      expect(parent.childNodes[1].className).toEqual('test-class');
    });

    afterEach(function(){
      div.remove();
      div = null;
    });
  });

});
