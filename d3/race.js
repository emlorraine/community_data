
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
        {category: "White alone", number: +raw2010Data.P001003},
        {category: "Black or African American alone", number: +raw2010Data.P001004},
        {category: "American Indian and Alaska Native alone", number: +raw2010Data.P001005},
        {category: "Asian alone", number: +raw2010Data.P001006}, 
        {category: "Native Hawaiian and Other Pacific Islander alone", number: +raw2010Data.P001007}, 
        {category: "Two or more races", number: +raw2010Data.P001009},
    ]
    var data2020 = [
        {category: "White alone", number: +raw2020Data.P1_003N},
        {category: "Black or African American alone", number: +raw2020Data.P1_004N},
        {category: "American Indian and Alaska Native alone", number: +raw2020Data.P1_005N}, 
        {category: "Asian alone", number: +raw2020Data.P1_006N}, 
        {category: "Native Hawaiian and Other Pacific Islander alone", number: +raw2020Data.P1_007N}, 
        {category: "Two or more races", number: +raw2020Data.P1_009N}
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


    let xScale = d3.scaleBand()
        .range([0, 500])
        .domain(data2010.map(function(d){
            return d.category
        }))
        .padding(0.1)

    let yScale = d3.scaleLinear()
        .range([600, 0])
        .domain([0, 5000])

    var xAxis = d3.scaleBand()
        .range([ 0, 1000 ])
        .domain(data.map(function(d) { return d.category; }))
        .padding(0.2);
    self.svg.append("g")
        .attr("transform", "translate(0," + 600 + ")")
        .call(d3.axisBottom(xAxis))
        // .selectAll("text")
        //   .attr("transform", "translate(-10,0)rotate(-45)")
        //   .style("text-anchor", "end");    

    var yAxis = d3.scaleLinear()
        .domain([0, 5000])
        .range([ 600, 0]);


    self.svg.selectAll("rect")
        .data(data2010)
        .enter()
        .append("rect")
            .attr("x", function(d, i) { 
                return xScale(d.category); 
            })
            .attr("y", function(d) { 
                return yScale(d.number); 
            })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { 
                return 600 - yScale(d.number); 
            })
            .attr("fill", "#69b3a2")


    self.svg.selectAll("rect")
        .data(data2020)
        .enter()
        .append("rect")
            .attr("x", function(d, i) { 
                console.log(d.category)
                return xScale(d.category); 
            })
            .attr("y", function(d) { 
                return yScale(d.number); 
            })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { 
                return 600 - yScale(d.number); 
            })
            .attr("fill", "red")
        

    
}

