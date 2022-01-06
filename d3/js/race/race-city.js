
/**
 * Constructor for the RaceBarChart
 */
 function RaceCityBarChart(data){
    var self = this;
    self.init(data);
};
/**
 * Initializes the svg elements required to lay the bars
 */
 RaceCityBarChart.prototype.init = function(rawData){

    var data2010 = rawData[0]
    var data2020 = rawData[1]

    var values = [
        +(data2010[17].value.replace(",", "")),
        +(data2020[17].value.replace(",", "")), 

        +(data2010[18].value.replace(",", "")),
        +(data2020[18].value.replace(",", "")),
        
        +(data2010[19].value.replace(",", "")),
        +(data2020[19].value.replace(",", "")),

        +(data2010[20].value.replace(",", "")),
        +(data2020[20].value.replace(",", "")),

        +(data2010[21].value.replace(",", "")),
        +(data2020[21].value.replace(",", "")),

        +(data2010[23].value.replace(",", "")),
        +(data2020[23].value.replace(",", ""))
    ]

    let groupedData = [
        {
        "Year": "2010",
        "Data": 
            [
                {category: "White alone", number: values[0]},
                {category: "Black or African American alone", number: values[2]},
                {category: "American Indian and Alaska Native alone", number: values[4]},
                {category: "Asian alone", number: values[6]}, 
                {category: "Native Hawaiian and Other Pacific Islander alone", number: values[8]}, 
                {category: "Two or more races", number: values[10]},
            ]
        },
        {
            "Year": "2020",
            "Data": 
                [
                    {category: "White alone", number: values[1]},
                    {category: "Black or African American alone", number: values[3]},
                    {category: "American Indian and Alaska Native alone", number: values[5]}, 
                    {category: "Asian alone", number: values[7]}, 
                    {category: "Native Hawaiian and Other Pacific Islander alone", number: values[9]}, 
                    {category: "Two or more races", number: values[11]}
                ]
            }
    ]
    var labels = [
        "\n White alone, 2010",
        "\n White alone, 2020",
        "\n Black or African American alone, 2010",
        "\n Black or African American alone, 2020",
        "\n American Indian and Alaska Native alone, 2010",
        "\n American Indian and Alaska Native alone, 2020",
        "\n Asian alone, 2010",
        "\n Asian alone, 2020",
        "\n Native Hawaiian and Other Pacific Islander alone, 2010",
        "\n Native Hawaiian and Other Pacific Islander alone, 2020",
        "\n Two or more races, 2010",
        "\n Two or more races, 2020"
    ]


    var self = this;
    $('#race-city').empty();
    var divRaceBarChart = d3.select("#race-city").classed("content", true);
    self.margin = {top: 30, right: 20, bottom: 30, left: 50};

    var x0  = d3.scaleBand().rangeRound([0, 1000], .5);
    var x1  = d3.scaleBand();
    var y   = d3.scaleLinear().rangeRound([600, 0]);

    var xScale = d3.scaleBand().range ([0, 1000]).padding(0)
    xScale.domain(labels)
    var yScale = d3.scaleLinear().range ([600, 0]);
    yScale.domain([0, d3.max(values)])


    var xAxis = d3.axisBottom().scale(xScale)
                .tickValues(labels)

    var yAxis = d3.axisLeft().scale(yScale)
                .ticks(10, ".0f"); 

                
    

    self.svg = divRaceBarChart.append("svg")
        .attr("width",1200)
        .attr("height",1000)
        // .attr("transform", "translate(" + self.margin.left + ",0)")

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

    var insertLinebreaks = function (d) {
        var el = d3.select(this);
        var words = d.split(' ');
        el.text('');
        for (var i = 0; i < words.length; i++) {
            var tspan = el.append('tspan').text(words[i]);
            if (i > 0)
                tspan.attr('x', 0).attr('dy', '15');
        }
    };

    self.svg.append("g")
    .attr("transform", "translate(100," + 600 + ")")
    .call(xAxis)
    .selectAll("text")
    .each(insertLinebreaks)	


    self.svg.append("g")
    .attr("transform", "translate(100, 0)") 
    .call(yAxis)

        
  

    var slice = self.svg.selectAll(".slice")
      .data(values)
      .enter().append("g")
      .attr("class", "g")
      .attr("transform",function(d, i) {
          return "translate(" + x1(labels[i]) + ",0)"; 
        });

      slice.selectAll("rect")
      .data(values)
        .enter().append("rect")
            .attr("width", xScale.bandwidth())
            .attr("x", function(d, i) {
                return xScale(labels[i]); 
            })
            .style("fill",function(d, i){
                if(i % 2 == 0){
                    return "#1F7A8C"
                } else {
                    return "#B9314F"
                }
            }) 
            .attr("y", function(d) {
                return yScale(d); 
            })
            .attr("height", function(d, i) {
                return 600 - yScale(d); 
            })
            .attr("transform", "translate(100, 0)") 

      
        
        var textLabels = self.svg.selectAll("barLabels")
            .data(values)
            .enter()
            .append("text")
            .attr("x", function(d, i) {
                return (xScale(labels[i]) + 27); 
            })  
            .attr("y", function(d) {
                if(yScale(d)<=0){
                    return (yScale(d)+20);
                } else{
                    return (yScale(d)-5); 
                }
            })
            .attr("transform", "translate(100, 0)") 
            .text(function(d){
                return d; 
            })

}


