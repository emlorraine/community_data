
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

    var labels = [
        "Total population",
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
        "85 years and over"
    ]

    console.log(populationData2010, populationData2020)

    var max2010 = Math.max(populationData2010)
    var max2020 = Math.max(populationData2020)
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
            .data(populationData2010)
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
            .data(populationData2020)
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
        //         if(yScale(d)<=0){
        //             return (yScale(d)+20);
        //         } else{
        //             return (yScale(d)-5); 
        //         }
        //     })
        //     .attr("transform", "translate(100, 0)") 
        //     .text(function(d){
        //         return d; 
        //     })
      
      

    

    
        
        
     


   



}