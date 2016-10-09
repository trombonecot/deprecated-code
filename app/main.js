requirejs([ "./components/graphicComponent", 
            "./api/dataApi"], 
    function(GraphicComponent, DataApi) {

    GraphicComponent.draw(DataApi.getDataObject('revenue'));
    GraphicComponent.draw(DataApi.getDataObject('impresions'));
    GraphicComponent.draw(DataApi.getDataObject('visits'));
    
});