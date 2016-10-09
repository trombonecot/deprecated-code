define(["../../libs/d3"],function(d3){
    
    return {

        createSvg : function (name, width, height){
            return d3.select("data-component#"+name).append("svg")
                        .attr("width", width)
                        .attr("height", height);
        },

        createLayer: function (target, name, transform){
            return target.append(name).attr('transform',transform);
        },

        createArea: function (layer, width, height, margin, dades, color){

            var x = d3.scaleLinear()
                .range([margin, width-margin]);

            var y = d3.scaleLinear()
                .range([height, height-50]);

            var area = d3.area()
                .x(function(d) { return x(d.x); })
                .y0(height)
                .y1(function(d) { return y(d.y); });

            var line = d3.line()
                .x(function(d) { return x(d.x); })
                .y(function(d) { return y(d.y); });

            x.domain(d3.extent(dades, function(d) { return d.x; }));
            y.domain([0, d3.max(dades, function(d) { return d.y})]);

            layer.append("path")
                .datum(dades)
                .attr("class", "area")
                .attr("stroke", color)
                .attr("fill", color)
                .style("opacity", 0.1)
                .attr("stroke-width", "0")
                .attr("d", area);

            layer.append("path")
                .datum(dades)
                .attr("stroke", color)
                .attr("fill","transparent")
                .attr("d", line);

        },

        createMarks: function(layer, radi, strokeFunction ){
            var escalaMarca = d3.scaleLinear().range([0,360]).domain([0,4]);

            layer.selectAll('.marca-tick')
                .data(d3.range(0,4)).enter()
                .append('line')
                .attr('class', 'marca-tick')
                .attr('x1',0)
                .attr('x2',0)
                .attr('y1',radi - 7)
                .attr('y2',radi - 9)
                .attr("stroke", function(index){
                    return strokeFunction(index);
                })
                .attr('transform',function(d){
                    return 'rotate(-' + escalaMarca(d) + ')';
                });
        },

        createMask: function (layer, width, height){
            var mask = layer.append("mask")
                            .attr("id", "mascara");
            
            mask.append("rect").attr("x", -(width/2))
                                .attr("y", -(height/2))
                                .attr("width", width)
                                .attr("height", height)
                                .attr("stroke-width",0)
                                .attr("fill", "white");
                
            mask.append("circle").attr("x", -(width/2))
                                .attr("y", -(height/2))
                                .attr("r", 70);

            var rectangle = layer.append("rect").attr("x", -(width/2))
                                                        .attr("y", -(height/2))
                                                        .attr("width", width)
                                                        .attr("height", height)
                                                        .attr("stroke-width",0)
                                                        .attr("mask", "url(#mascara)")
                                                        .attr("fill", "white");

        },

        createDataCircle : function(layer, dades, radius){
             var arc = d3.arc()
                .innerRadius(radius - 6)
                .outerRadius(radius);

            var pie = d3.pie().value(function(d) { return d.value; }).sort(null);

            var path = layer.selectAll("path")
                .data(pie(dades))
                .enter()
                .append("path")
                .attr("fill", function(d, i) { return d.data.color })
                .attr("stroke-width", "0")
                .attr("d", arc);
            return path;
        },


        createLabels: function(layer, dades){
            var text = layer.selectAll("text")
                        .data(dades)
                        .enter()
                        .append("text")
                        
            text.text( function (d) { return d.name; })
                .attr("y", function(d) { return d.marginy; }) 
                .attr("text-anchor", "middle")
                .attr("font-family", "sans-serif")
                .attr("class", function(d) { return d.class });
        }
    }
});