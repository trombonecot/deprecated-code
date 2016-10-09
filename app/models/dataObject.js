define(function(){
    
    function DataObject(name, tablet, smartphone, fluctuation, colors){
        this.name = name || 'Default name';
        this.tablet = tablet || 0;
        this.smartphone = smartphone || 0;
        this.fluctuation = fluctuation || [];
        this.colors = colors || ['lightGrey', 'grey'];
        this.total = this.tablet + this.smartphone;

        if(this.tablet != undefined && this.total != 0){
          this.percentage_tablet = (this.tablet/this.total)*100;
        }else{
          this.percentage_tablet = 0;
        }
        if(this.smartphone != undefined && this.total != 0){
          this.percentage_smartphone = (this.smartphone/this.total)*100;
        }else{
          this.percentage_smartphone = 0;
        }
    }

    return DataObject;
});