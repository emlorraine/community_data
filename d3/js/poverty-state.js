
function PovertyStateChart(data){
    var self = this;
    self.init(data);
 };
 /**
 * Initializes the svg elements required to lay the bars
 */
 
  PovertyStateChart.prototype.init = function(rawData){
    console.log(rawData)
     var raw2010Data = rawData[0]; 
     var raw2020Data = rawData[1];

    var totalUnderPovertyCount2010 = +(raw2010Data[37].value.replace(",", "")) + +(raw2010Data[42].value.replace(",", ""))
    var totalAtOrAbovePovertyCount2010 = +(raw2010Data[38].value.replace(",", "")) + +(raw2010Data[43].value.replace(",", ""))

    data2010 = [
        { label: 'Above Poverty', count: totalAtOrAbovePovertyCount2010 }, 
        { label: 'At or Below Poverty', count:  totalUnderPovertyCount2010}, 

    ]

    var totalUnderPovertyCount2020 = +(raw2020Data[37].value.replace(",", "")) + +(raw2020Data[42].value.replace(",", ""))
    var totalAtOrAbovePovertyCount2020 = +(raw2020Data[38].value.replace(",", "")) + +(raw2020Data[43].value.replace(",", ""))

    data2020 = [
        { label: 'Above Poverty', count: totalAtOrAbovePovertyCount2020 }, 
        { label: 'At or Below Poverty', count: totalUnderPovertyCount2020 }, 

    ]


    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 75;

    $('#poverty-missouri-2010').empty();
    $('#poverty-missouri-2019').empty();

    
    var svg = d3.select('#poverty-missouri-2010')
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



    var svg = d3.select('#poverty-missouri-2019')
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