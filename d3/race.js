
/**
 * DATA USED:
 * P001003: "Total!!Population of one race!!White alone"
 * P001004: "Total!!Population of one race!!Black or African American alone"
 * P001005: "Total!!Population of one race!!American Indian and Alaska Native alone"
 * P001006: "Total!!Population of one race!!Asian alone"
 * P001007: "Total!!Population of one race!!Native Hawaiian and Other Pacific Islander alone"
 * P001008: "Total!!Population of one race!!Some Other Race alone"
 * P001009: "Total!!Two or More Races"
 */

/**
 * Constructor for the RaceBarChart
 */
 function RaceBarChart(data){
    var self = this;
    self.init(data);
};
/**
 * Initializes the svg elements required to lay the bars
 */
 RaceBarChart.prototype.init = function(rawData){
    var raw2010Data = rawData[0][1]; 
    //var raw2010DataLabels = rawData[0][0]; 

    var raw2020Data = rawData[1][1]; 
    //var raw2020DataLabels = rawData[1][0]; 

    var processed2010Data = {
        "White alone" : +raw2010Data.P001003,
        "Black or African American alone" : +raw2010Data.P001004,
        "American Indian and Alaska Native alone" : +raw2010Data.P001005, 
        "Asian alone" : +raw2010Data.P001006, 
        "Native Hawaiian and Other Pacific Islander" : +raw2010Data.P001007, 
        "Two or more races" : +raw2010Data.P001009
    }

    var processed2020Data = {
        "White alone" : +raw2020Data.P1_003N,
        "Black or African American alone" : +raw2020Data.P1_004N,
        "American Indian and Alaska Native alone" : +raw2020Data.P1_005N, 
        "Asian alone" : +raw2020Data.P1_006N, 
        "Native Hawaiian and Other Pacific Islander" : +raw2020Data.P1_007N, 
        "Two or more races" : +raw2020Data.P1_009N
    }

    var labels = [
        "White alone",
        "Black or African American alone",
        "American Indian and Alaska Native alone",
        "Asian alone",
        "Native Hawaiian and Other Pacific Islander",
        "Two or more races"
    ]
    var data2010 = [
        +raw2010Data.P001003,
        +raw2010Data.P001004,
        +raw2010Data.P001005, 
        +raw2010Data.P001006, 
        +raw2010Data.P001007, 
        +raw2010Data.P001009
    ]
    var data2020 = [
        +raw2020Data.P1_003N,
        +raw2020Data.P1_004N,
        +raw2020Data.P1_005N, 
        +raw2020Data.P1_006N, 
        +raw2020Data.P1_007N, 
        +raw2020Data.P1_009N
    ]

    let max2010 = Math.max(...(Object.values(processed2010Data)))
    let max2020 = Math.max(...(Object.values(processed2010Data)))
    let max = (Math.max(max2010, max2020))

    var self = this;
    //Gets access to the div element created for this chart and legend element from HTML
    var divRaceBarChart = d3.select("#race").classed("content", true);
    self.margin = {top: 30, right: 20, bottom: 30, left: 50};

    self.svg = divRaceBarChart.append("svg")
        .attr("width",1000)
        .attr("height",600)
        .attr("transform", "translate(" + self.margin.left + ",0)")

    var xScale = d3.scaleLinear()
        .range([0, 15000])
        .domain([0, max]);
    var yScale = d3.scaleBand()
        .range([ 0, 600 ])
        .domain(data.map(function(d, i) { 
            return labels[i]; 
        }))
        .padding(.1);

    self.svg.selectAll("myRect")
        .data(data2010)
        .enter()
        .append("rect")
        .attr("x", xScale(0))
        .attr("y", function(d, i) { 
            console.log(labels[i])
            return yScale(labels[i]); 
        })
        .attr("width", function(d, i) { 
            console.log(labels[i], d)
            return (xScale(d)); 
        })
        .attr("height", yScale.bandwidth())
        .attr("fill", "#69b3a2")

    
}

