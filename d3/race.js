
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
    var raw2020Data = rawData[1][1]; 
    let groupedData = [
        {
        "Year": "2010",
        "Data": 
            [
                {category: "White alone", number: +raw2010Data.P001003},
                {category: "Black or African American alone", number: +raw2010Data.P001004},
                {category: "American Indian and Alaska Native alone", number: +raw2010Data.P001005},
                {category: "Asian alone", number: +raw2010Data.P001006}, 
                {category: "Native Hawaiian and Other Pacific Islander alone", number: +raw2010Data.P001007}, 
                {category: "Two or more races", number: +raw2010Data.P001009},
            ]
        },
        {
            "Year": "2020",
            "Data": 
                [
                    {category: "White alone", number: +raw2020Data.P1_003N},
                    {category: "Black or African American alone", number: +raw2020Data.P1_004N},
                    {category: "American Indian and Alaska Native alone", number: +raw2020Data.P1_005N}, 
                    {category: "Asian alone", number: +raw2020Data.P1_006N}, 
                    {category: "Native Hawaiian and Other Pacific Islander alone", number: +raw2020Data.P1_007N}, 
                    {category: "Two or more races", number: +raw2020Data.P1_009N}
                ]
            }
    ]
    var self = this;
    var divRaceBarChart = d3.select("#race").classed("content", true);
    self.margin = {top: 30, right: 20, bottom: 30, left: 50};

    var x0  = d3.scaleBand().rangeRound([0, 1000], .5);
    var x1  = d3.scaleBand();
    var y   = d3.scaleLinear().rangeRound([600, 0]);

    var xAxis = d3.axisBottom().scale(x0)
                .tickValues(groupedData.map(d=>d.Year));

    var yAxis = d3.axisLeft().scale(y);

    self.svg = divRaceBarChart.append("svg")
        .attr("width",1000)
        .attr("height",600)
        .attr("transform", "translate(" + self.margin.left + ",0)")

    var years = groupedData.map(function(d) { return d.Year; });
    var categories = new Set()
    let racialCategories = groupedData.map(function(d){
        (d.Data.map(function(i){
            categories.add(i.category)
        }))
    });
    x0.domain(years);
    x1.domain(categories).rangeRound([0, x0.bandwidth()]);
    y.domain([0, d3.max(groupedData, function(key) { 
        return d3.max(key.Data, function(d) { 
            return d.number; }); 
        })
    ]);

    self.svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + 600 + ")")
    .call(xAxis);

    self.svg.append("g")
      .attr("class", "y axis")
      .style('opacity','100')
      .call(yAxis)
        .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .style('font-weight','bold')
            .text("Value"); //why are you not showing?
        

    
    var slice = self.svg.selectAll(".slice")
      .data(groupedData)
      .enter().append("g")
      .attr("class", "g")
      .attr("transform",function(d) { 
          return "translate(" + x0(d.Year) + ",0)"; 
        });

      slice.selectAll("rect")
      .data(function(d) { 
          return d.Data; 
        })
        .enter().append("rect")
            .attr("width", 100)
            .attr("x", function(d) {
                console.log(x1(d.category)) 
                return x1(d.category); 
            })
            .style("fill","red") 
            .attr("y", function(d) { 
                return y(d.number); 
            })
            .attr("height", function(d) {
                return 600 - y(d.number); 
            });
           
        
   


    
        

    
}

