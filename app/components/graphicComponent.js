define(["components/legendComponent",
        "utils/utils",
        "utils/d3Manipulation"], 

    function( LegendComponent, Utils, D3Manipulation) { 

        var radi, margin, width, height, svg, layerArea, layerCircular;

        function initCanvas(dataObject){ 
            radi    = 80,
            margin  = 60,
            width   = radi*2 + margin*2,
            height  = radi*2;

            svg             = D3Manipulation.createSvg(dataObject.name, width, height);
            
            layerArea       = D3Manipulation.createLayer( svg, 'g', 'translate(0,150)');
            layerCircular   = D3Manipulation.createLayer( svg, 'g', 'translate(' + (radi + margin) + ',' + (radi) + ')');

        }

        function createMarks(dataObject){

            var strokeFunction = function(index){
                var parcial = dataObject.total / 4;
                var color = dataObject.colors[1];
                var valorActual = 0;

                if (index === 0){
                    valorActual = parcial * 2;
                }else if (index === 1){
                    valorActual = parcial;
                }else if (index === 2){
                    valorActual = 0;
                }else if (index === 3){
                    valorActual = parcial * index;
                }

                if ( valorActual > dataObject.smartphone){
                    color = dataObject.colors[0];
                }
                return color;
            }

            D3Manipulation.createMarks(layerCircular, radi, strokeFunction );
        }

        function createCircle(dataObject){
            var dades = [ {'value' : dataObject.percentage_smartphone,
                            'color': dataObject.colors[1]
                          },{'value' : dataObject.percentage_tablet,
                            'color' : dataObject.colors[0]
                          }];
            var radius = height / 2;

            D3Manipulation.createMask(layerCircular, height, width);
            D3Manipulation.createDataCircle(layerCircular, dades, radius);
        }

        function createArea(dataObject){

            var marginArea = 75;
            var heightArea = 0;
            var widthArea = width-marginArea;

            var dades = [];
            for (var index in dataObject.fluctuation){
                dades.push({'x' : index, 'y' : dataObject.fluctuation[index]});
            }

            D3Manipulation.createArea(layerArea, widthArea, heightArea, marginArea, dades, dataObject.colors[0]);

        }

        function createLabels(dataObject){

            var total_text = '';
            if (dataObject.name === 'revenue'){
                total_text = Utils.formatPrice(dataObject.total);
            }else{
                total_text = Utils.formatNumber(dataObject.total);
            }            

            var dades = [{'name': Utils.capitalize(dataObject.name), 'marginy': -20 , class: 'main-title' },
                         {'name': total_text, 'marginy': 8, class: 'main-total'}]

            D3Manipulation.createLabels(layerCircular, dades);
        }

        return {
            draw: function (dataObject) {

                initCanvas(dataObject);
                createArea(dataObject);
                createCircle(dataObject); 
                createMarks(dataObject);               
                createLabels(dataObject);

                LegendComponent.createLegend(dataObject);
            }
        }
});