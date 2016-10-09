define(['utils/utils'], function(Utils){

  describe('capitalizing', function(){
    it('the result should be null', function(){     
      expect(Utils.capitalize('')).toEqual(null);
    });

    it('the result should be capitalized', function(){     
      expect(Utils.capitalize('hola')).toEqual('HOLA');
    });

    it('the result should be null', function(){     
      expect(Utils.capitalizeInitial(123)).toEqual(null);
    });

  });

  describe('capitalizing initial', function(){
    it('the result should be null', function(){     
      expect(Utils.capitalizeInitial('')).toEqual(null);
    });

    it('the result should be with initial', function(){     
      expect(Utils.capitalizeInitial('hola')).toEqual('Hola');
    });

    it('the result should be null', function(){     
      expect(Utils.capitalizeInitial(123)).toEqual(null);
    });

  });

  describe('format number', function(){
    it('the result should be null', function(){     
      expect(Utils.formatNumber('hola')).toEqual(null);
    });

     it('the result should be formatted', function(){   
      expect(Utils.formatNumber(123456)).toEqual('123.456');
    });

    it('the result should be formatted', function(){   
      expect(Utils.formatNumber(123456789)).toEqual('123.456.789');
    });
  });

   describe('format price', function(){
    it('the result should be null', function(){     
      expect(Utils.formatPrice('hola')).toEqual(null);
    });

     it('the result should be formatted', function(){   
      expect(Utils.formatPrice(123456)).toEqual('123.456€');
    });

    it('the result should be formatted', function(){   
      expect(Utils.formatPrice(123456789)).toEqual('123.456.789€');
    });
  });

  
  describe('format percentage', function(){
    it('the result should be null', function(){     
      expect(Utils.formatPercentage('hola')).toEqual(null);
    });

     it('the result should be formatted', function(){   
      expect(Utils.formatPercentage(123456)).toEqual('123.456%');
    });

    it('the result should be formatted', function(){   
      expect(Utils.formatPercentage(123456789)).toEqual('123.456.789%');
    });
  });

});
