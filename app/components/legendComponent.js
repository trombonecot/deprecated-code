define(["utils/utils","utils/domManipulation"], 

    function( Utils, DomManipulation) { 

        function createDataBox(dataInfo){

            var div = DomManipulation.createDiv('data-box data-' + dataInfo.name);

            div.appendChild(DomManipulation.createDiv('data-header', dataInfo.name, dataInfo.color));
            div.appendChild(DomManipulation.createDiv('data-subheader data-percentage', dataInfo.percentage));
            div.appendChild(DomManipulation.createDiv('data-subheader data-total', dataInfo.total));

            return div;
        }

        return {

            createLegend : function(dataObject){
                var label_total_smartphone = '';
                var label_total_tablet = '';

                if (dataObject.name === 'revenue'){
                    label_total_smartphone = Utils.formatPrice(dataObject.smartphone)
                    label_total_tablet = Utils.formatPrice(dataObject.tablet)
                }else{
                    label_total_smartphone = Utils.formatNumber(dataObject.smartphone)
                    label_total_tablet = Utils.formatNumber(dataObject.tablet)
                }
                
                var dataTablet = {
                    name : 'Tablet',
                    total: label_total_tablet,
                    percentage: Utils.formatPercentage(dataObject.percentage_tablet),
                    color: dataObject.colors[0]
                }
                var dataSmartphone = {
                    name : 'Smartphone',
                    total: label_total_smartphone,
                    percentage: Utils.formatPercentage(dataObject.percentage_smartphone),
                    color: dataObject.colors[1]
                }

                var container = document.getElementById(dataObject.name);
                var divLegend = DomManipulation.createDiv('data-legend');
                divLegend.appendChild(createDataBox(dataTablet));
                divLegend.appendChild(createDataBox(dataSmartphone));

                container.appendChild(divLegend);
            }


        }


});