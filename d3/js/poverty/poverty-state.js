
function PovertyStateChart(data){
    var self = this;
    self.init(data);
 };
 /**
 * Initializes the svg elements required to lay the bars
 */
 
  PovertyStateChart.prototype.init = function(rawData){
     var raw2010Data = rawData[0]; 
     var raw2020Data = rawData[1];

    var totalUnderPovertyCount2010 = +(raw2010Data[37].value.replaceAll(",", "")) + +(raw2010Data[42].value.replaceAll(",", "")) + +(raw2010Data[47].value.replaceAll(",", ""))
    var totalAtOrAbovePovertyCount2010 = +(raw2010Data[38].value.replaceAll(",", "")) + +(raw2010Data[43].value.replaceAll(",", ""))+ +(raw2010Data[48].value.replaceAll(",", ""))

    var totalUnderPovertyCount2020 = +(raw2020Data[33].value.replaceAll(",", "")) + +(raw2020Data[38].value.replaceAll(",", ""))+ +(raw2020Data[43].value.replaceAll(",", ""))
    var totalAtOrAbovePovertyCount2020 = +(raw2020Data[34].value.replaceAll(",", "")) + +(raw2020Data[39].value.replaceAll(",", ""))+ +(raw2020Data[44].value.replaceAll(",", ""))

    dataArray2010 = [totalUnderPovertyCount2010, totalAtOrAbovePovertyCount2010]
    dataArray2020 = [totalUnderPovertyCount2020, totalAtOrAbovePovertyCount2020]

    data2010 = [
        { label: 'Above Poverty', value: totalAtOrAbovePovertyCount2010 }, 
        { label: 'At or Below Poverty', value:  totalUnderPovertyCount2010}, 
    ]

    data2020 = [
        { label: 'Above Poverty', value: totalAtOrAbovePovertyCount2020 }, 
        { label: 'At or Below Poverty', value: totalUnderPovertyCount2020 }, 

    ]

    console.log("Poverty state 2010", data2010)
    console.log("Poverty state 2019", data2020)

    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 75;

    $('#poverty-state-2010').empty();
    $('#poverty-state-2020').empty();

    
    var svg = d3.select('#poverty-state-2010')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)             
        .outerRadius(radius);
        
    var pie = d3.pie();

      var path = svg.selectAll('path')
        .data(pie(dataArray2010))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d, i) { 
            if(i==0){
                return "#1F7A8C"
            } else {
                return "#D3D3D3"

            }
        });



    var svg = d3.select('#poverty-state-2019')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)             
        .outerRadius(radius);
    var pie = d3.pie();


      var path = svg.selectAll('path')
        .data(pie(dataArray2020))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d, i) { 
            if(i==0){
                console.log("2019 poverty is", d)
                return "#B9314F"
            } else {
                return "#D3D3D3"

            }
        });

 } 