
function PovertyChart(data){
    var self = this;
    self.init(data);
 };
 /**
 * Initializes the svg elements required to lay the bars
 */
 
PovertyChart.prototype.init = function(rawData){
     var raw2010Data = rawData[0][1]; 
    //  var raw2020Data = rawData[1][1];
    data2010 = [
        { label: 'Above Poverty', count: (+raw2010Data.B17003_001E - +raw2010Data.B17003_002E) }, 
        { label: 'At or Below Poverty', count: +raw2010Data.B17003_002E }, 

    ]
    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 75;
    
    var svg = d3.select('#poverty2010')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)             
        .outerRadius(radius);
        
      var pie = d3.pie()
        .value(function(d) { 
            return d.count; 
        })
        .sort(null);

      var path = svg.selectAll('path')
        .data(pie(data2010))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d, i) { 
            if(d.data.label == "At or Below Poverty"){
                return "#1F7A8C"
            } else {
                return "#D3D3D3"

            }
        });



    var svg = d3.select('#poverty2020')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)             
        .outerRadius(radius);
        
      var pie = d3.pie()
        .value(function(d) { 
            return d.count; 
        })
        .sort(null);

      var path = svg.selectAll('path')
        .data(pie(data2010))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d, i) { 
            if(d.data.label == "At or Below Poverty"){
                return "#B9314F"
            } else {
                return "#D3D3D3"

            }
        });

 } 