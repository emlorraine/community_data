
function AgeChart(data){
   var self = this;
   self.init(data);
};
/**
* Initializes the svg elements required to lay the bars
*/

AgeChart.prototype.init = function(rawData){
    var raw2010Data = rawData[0][1]; 
    var raw2020Data = rawData[1][1];

    var labels = [
        "Total population",
        "Under 5 years",
        "5 to 9 years",
        "10 to 14 years",
        "15 to 19 years",
        "20 to 24 years",
        "25 to 29 years",
        "30 to 34 years",
        "35 to 39 years",
        "40 to 44 years",
        "45 to 49 years",
        "50 to 54 years",
        "55 to 59 years",
        "60 to 64 years",
        "65 to 69 years",
        "70 to 74 years",
        "75 to 79 years",
        "80 to 84 years",
        "85 years and over"
    ]

    var totalPopulation2010 = +raw2010Data.S0101_C01_001E
    var data2010 = [
        (+raw2010Data.S0101_C01_002E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_003E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_004E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_005E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_006E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_007E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_008E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_009E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_010E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_011E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_012E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_013E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_014E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_015E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_016E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_017E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_018E/100)*totalPopulation2010,
        (+raw2010Data.S0101_C01_019E/100)*totalPopulation2010,
    ]
    var totalPopulation2020 = +raw2020Data.S0101_C01_001E
    var data2020 = [
        (+raw2020Data.S0101_C01_002E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_003E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_004E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_005E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_006E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_007E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_008E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_009E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_010E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_011E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_012E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_013E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_014E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_015E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_016E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_017E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_018E/100)*totalPopulation2020,
        (+raw2020Data.S0101_C01_019E/100)*totalPopulation2020,
    ]

    var max2010 = Math.max(data2010)
    var max2020 = Math.max(data2020)
    var maxValue = Math.max(max2010, max2020)


    var xScale = d3.scaleBand().range ([0, 1000]).padding(0)
    xScale.domain(labels)
    var yScale = d3.scaleLinear().range ([500, 0]);
    yScale.domain([0, maxValue])


    var ageDiv = d3.select("#age")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = ageDiv.append("svg")
            .attr("width",1500)
            .attr("height",500)
            .append("g")
            .attr("transform", "translate(" + self.margin.left + ",0)")

        self.svg.selectAll("rect")
            .data(data2010)
            .enter().append("rect")
            .attr("width", xScale.bandwidth())
            .attr("x", function(d, i) {
                return xScale(labels[i]); 
            })
            
            .attr("y", function(d) {
                return yScale(d); 
            })
            .attr("height", function(d, i) {
                return (d); 
            })
            .style("fill", "#1F7A8C")
            // .attr("transform",  "rotate(270)")
        
        self.svg.selectAll("rect")
            .data(data2020)
            .enter().append("rect")
            .attr("width", xScale.bandwidth())
            .attr("x", function(d, i) {
                return xScale(labels[i]); 
            })
            .attr("y", function(d) {
                return yScale(d); 
            })
            .attr("height", function(d, i) {
                console.log(d)
                return (d); 
            })
            .style("fill", "#B9314F")




        // var textLabels2010 = self.svg.selectAll("barLabels")
        //     .data(labels)
        //     .enter()
        //     .append("text")
        //     .attr("x", function(d, i) {
        //         return (xScale(labels[i]) + 27); 
        //     })  
        //     .attr("y", function(d) {
        //         return d;
                // if(yScale(d)<=0){
                //     return (yScale(d)+20);
                // } else{
                //     return (yScale(d)-5); 
                // }
            // })
            // .attr("transform", "translate(100, 0)") 
            // .text(function(d){
            //     return d; 
            // })
      
      

    

    
        
        
     


   



}