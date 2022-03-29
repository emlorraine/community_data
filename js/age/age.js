
function AgeChart(data){
   var self = this;
   self.init(data);
};
/**
* Initializes the svg elements required to lay the bars
*/

AgeChart.prototype.init = function(rawData){
    var data2010 = rawData[0]
    var data2020 = rawData[1]

    var totalPopulation2010 = +(data2010[1].value.replace(",", ""))
    var populationData2010 = [
        +(data2010[2].value.replace(",", "")),
        +(data2010[3].value.replace(",", "")),
        +(data2010[4].value.replace(",", "")),
        +(data2010[5].value.replace(",", "")),
        +(data2010[6].value.replace(",", "")),
        +(data2010[7].value.replace(",", "")),
        +(data2010[8].value.replace(",", "")),
        +(data2010[9].value.replace(",", "")),
        +(data2010[10].value.replace(",", "")),
        +(data2010[11].value.replace(",", "")),
        +(data2010[12].value.replace(",", "")),
        +(data2010[13].value.replace(",", "")),
    ]

    var totalPopulation2020 = +(data2020[1].value.replace(",", ""))
    var populationData2020 = [
        +(data2020[2].value.replace(",", "")),
        +(data2020[3].value.replace(",", "")),
        +(data2020[4].value.replace(",", "")),
        +(data2020[5].value.replace(",", "")),
        +(data2020[6].value.replace(",", "")),
        +(data2020[7].value.replace(",", "")),
        +(data2020[8].value.replace(",", "")),
        +(data2020[9].value.replace(",", "")),
        +(data2020[10].value.replace(",", "")),
        +(data2020[11].value.replace(",", "")),
        +(data2020[12].value.replace(",", "")),
        +(data2020[13].value.replace(",", "")),
    ]

    var populationPercentagesData2010 = []
    for(var i = 0; i < populationData2010.length; i++){
        proportion = (populationData2010[i]/totalPopulation2010)*100;
        populationPercentagesData2010.push(proportion)
    }

    var populationPercentagesData2020 = []
    for(var i = 0; i < populationData2020.length; i++){
        proportion = (populationData2020[i]/totalPopulation2020)* 100;
        populationPercentagesData2020.push(proportion)
    }

    var labels = [
        "Under 5 years",
        "5 to 9 years",
        "10 to 14 years",
        "15 to 17 years",
        "18 to 24 years",
        "25 to 34 years",
        "35 to 44 years",
        "45 to 54 years",
        "55 to 64 years",
        "65 to 74 years",
        "75 to 84 years",
        "85 years & over"
    ]
    var max2010 = Math.max(...populationData2010)
    var max2020 = Math.max(...populationData2020)
    var maxValue = Math.max(max2010, max2020)

    var population2010 = populationData2010.reduce((a, b) => a + b, 0)
    var population2020 = populationData2020.reduce((a, b) => a + b, 0)

    var xScale = d3.scaleBand().range ([0, 1000]).padding(0)
    xScale.domain(labels)
    xScale.paddingInner(0.05)
    var yScale = d3.scaleLinear().range ([500, 0]);
    // yScale.domain([0, maxValue])
    yScale.domain([0, 100])


    var x = d3.scaleLinear()
	.domain([0,12])
    .range([0,1000]);
    
    var y = d3.scaleLinear()
	// .domain([0,maxValue])
    .domain([0,100])
    .range([750,0]);

    $('#age2010').empty();
    $('#age2020').empty();

    var ageDiv = d3.select("#age2010")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = ageDiv.append("svg")
            .attr("width",900)
            .attr("height",1100)
            .append("g")
        self.svg.selectAll("rect")
            .data(populationPercentagesData2010.reverse())
            .enter().append("rect")
            .attr("width", xScale.bandwidth())
            .attr("height", function(d){
                return (750-y(d))
            })
            .attr("x", function(d,i){
                return (x(i))
            })
            .attr("y", function(d){
                return y(d)
            })
            .style("fill", "#1F7A8C")
            .attr("transform",  "translate(0, 1050) rotate(270)")

            
        var textLabels2010 = self.svg.selectAll("barLabels")
            .data(labels.reverse())
            .enter()
            .append("text")
            .attr("x", function(d, i) {
                return 775
            })  
            .attr("y", function(d, i) {
                yValue =  105 + i*xScale.bandwidth()
                return yValue;
            })
            .text(function(d){
                return d; 
            })

    var ageDiv = d3.select("#age2020")
            self.margin = {top: 30, right: 20, bottom: 30, left: 50};
            self.svg = ageDiv.append("svg")
                .attr("width",900)
                .attr("height",1100)
                .append("g")
            self.svg.selectAll("rect")
                .data(populationPercentagesData2020.reverse())
                .enter().append("rect")
                .attr("width", xScale.bandwidth())
                .attr("height", function(d){
                    return (750-y(d))
                })
                .attr("x", function(d,i){
                    return (x(i))
                })
                .attr("y", function(d){
                    return y(d)
                })
                .style("fill", "#B9314F")
                .attr("transform", "translate(750,50) rotate(90)")
        
       




    
        
      
      

    

    
        
        
     


   



}