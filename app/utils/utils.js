define([], 
  
  function(){
      return {  
        capitalize : function(string){
          if (isNaN(string)){
            return string.toUpperCase();
          }else{
            return null;
          }
        },            
        capitalizeInitial : function(string){
          if (isNaN(string)){
            return string.charAt(0).toUpperCase() + string.slice(1);
          }else{
            return null;
          }
        },
        formatNumber: function(number){
          if (isNaN(number)){
            return null;
          }else{
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          } 
        },
        formatPrice: function(number){
          if (isNaN(number)){
            return null;
          }else{
            return this.formatNumber(number)+'€';
          } 
        },
        formatPercentage: function(number){
          if (isNaN(number)){
            return null;
          }else{
            return number.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")+'%';
          } 
        }           
      }     
});