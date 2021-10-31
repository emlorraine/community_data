/**
 * Constructor for the RaceBarChart
 * 
 * 
    //2010
    //Less than high school: S1501_C01_008E
    //High school or equivalent: S1501_C01_009E
    //Some college or associate's degree: S1501_C01_010E + S1501_C01_011E
    //Bachelor's degree or higher: S1501_C01_012E + S1501_C01_013E

    //2020
    //Less than high school: (S1501_C01_002E + S1501_C01_008E) / (S1501_C01_001E + S1501_C01_006E) 
    //High school or equivalent: (S1501_C01_003E + S1501_C01_009E) / (S1501_C01_001E + S1501_C01_006E)
    //Some college or associate's degree: (S1501_C01_004E + S1501_C01_010E + S1501_C01_011E) / (S1501_C01_001E + S1501_C01_006E)
    //Bachelor's degree or higher: (S1501_C01_005E + S1501_C01_012E + S1501_C01_013E) / (S1501_C01_001E + S1501_C01_006E)



 */
 function EducationalAttainmentChart(data){
    var self = this;
    self.init(data);
};
/**
 * Initializes the svg elements required to lay the bars
 */

 EducationalAttainmentChart.prototype.init = function(rawData){
    var raw2010Data = rawData[0][1]; 
    var raw2020Data = rawData[1][1]; 

    var values2010 = [
        +raw2010Data.S1501_C01_008E,
        +raw2010Data.S1501_C01_009E,
        (+raw2010Data.S1501_C01_010E + +raw2010Data.S1501_C01_011E),
        (+raw2010Data.S1501_C01_012E + +raw2010Data.S1501_C01_013E),
    ]

    var denom2020 = (+raw2020Data.S1501_C01_001E + +raw2020Data.S1501_C01_006E) 

    var values2020 = [
        (+raw2020Data.S1501_C01_002E + +raw2020Data.S1501_C01_008E)/denom2020,
        (+raw2020Data.S1501_C01_003E + +raw2020Data.S1501_C01_009E) / denom2020,
        (+raw2020Data.S1501_C01_004E + +raw2020Data.S1501_C01_010E + +raw2020Data.S1501_C01_011E) / denom2020,
        (+raw2020Data.S1501_C01_005E + +raw2020Data.S1501_C01_012E + +raw2020Data.S1501_C01_013E) / denom2020
    ]
    var labels = [
        "\n Less than high school",
        "\n High school or equivalent",
        "\n Some college or associate's degree",
        "\n Bachelor's degree or higher",
    ]

    var population2010 = +raw2010Data.S1501_C01_001E + +raw2010Data.S1501_C01_006E
    var population2020 = +raw2020Data.S1501_C01_001E + +raw2020Data.S1501_C01_006E

    var roundedPopulation2010 = Math.round(population2010/1000)*1000
    var roundedPopulation2020 = Math.round(population2020/1000)*1000

    var sqValue2010 = roundedPopulation2010 / 100
    var sqValue2020 = roundedPopulation2020 / 100

    var lessThanHS2010 = Math.round(values2010[0]/100 * roundedPopulation2010)/ roundedPopulation2010; 
    var lessThanHS2020 = Math.round(values2020[0] * roundedPopulation2020) /roundedPopulation2020; 

    var hsOrEquiv2010 = Math.round(values2010[1]/100 * roundedPopulation2010) /roundedPopulation2010; 
    var hsOrEquiv2020 = Math.round(values2020[1] * roundedPopulation2020)/roundedPopulation2020; 

    var someCollegeOrAssociates2010 = Math.round(values2010[2]/100 * roundedPopulation2010) /roundedPopulation2010;
    var someCollegeOrAssociates2020 = Math.round(values2020[2] * roundedPopulation2020)/roundedPopulation2020;

    var bachelorOrHigher2010 = Math.round(values2010[3]/100 * roundedPopulation2010) / roundedPopulation2010;
    var bachelorOrHigher2020 = Math.round(values2020[3] * roundedPopulation2020)/roundedPopulation2020;

    
    //2010
    //Less than high school:
    var lessthanHS2010Array = []
    var lessthanHS2010Ratio = lessThanHS2010 * 100; 
    for(var i = 0; i < 100; i++){
        if(i < lessthanHS2010Ratio){
            lessthanHS2010Array.push("X")
        } else{
            lessthanHS2010Array.push("O")
        }
    }
    console.log(lessthanHS2010Array)
    //High school or equivalent: 
    var hsOrEquiv2010Array = []
    var hsOrEquiv2010Ratio = hsOrEquiv2010 * 100; 
    for(var i = 0; i < 100; i++){
        if(i < hsOrEquiv2010Ratio){
            hsOrEquiv2010Array.push("X")
        } else{
            hsOrEquiv2010Array.push("O")
        }
    }
    console.log(hsOrEquiv2010Array)
    //Some college or associate's degree:
    var someCollegeOrAssociates2010Array = []
    var someCollegeOrAssociates2010Ratio = someCollegeOrAssociates2010 * 100; 
    for(var i = 0; i < 100; i++){
        if(i < someCollegeOrAssociates2010Ratio){
            someCollegeOrAssociates2010Array.push("X")
        } else{
            someCollegeOrAssociates2010Array.push("O")
        }
    }
    console.log(someCollegeOrAssociates2010Array)
    //Bachelor's degree or higher:
    var bachelorsOrHigher2010Array = []
    var bachelorsOrHigher2010Ratio = bachelorOrHigher2010 * 100; 
    for(var i = 0; i < 100; i++){
        if(i < bachelorsOrHigher2010Ratio){
            bachelorsOrHigher2010Array.push("X")
        } else{
            bachelorsOrHigher2010Array.push("O")
        }
    }
    console.log(bachelorsOrHigher2010Array)

    //2020
    //Less than high school:
    var lessthanHS2020Array = []
    var lessthanHS2020Ratio = lessThanHS2020 * 100; 
    for(var i = 0; i < 100; i++){
        if(i < lessthanHS2020Ratio){
            lessthanHS2020Array.push("X")
        } else{
            lessthanHS2020Array.push("O")
        }
    }
    console.log(lessthanHS2020Array)
    //High school or equivalent: 
    var hsOrEquiv2020Array = []
    var hsOrEquiv2020Ratio = hsOrEquiv2020 * 100; 
    for(var i = 0; i < 100; i++){
        if(i < hsOrEquiv2020Ratio){
            hsOrEquiv2020Array.push("X")
        } else{
            hsOrEquiv2020Array.push("O")
        }
    }
    console.log(hsOrEquiv2020Array)
    //Some college or associate's degree:
    var someCollegeOrAssociates2020Array = []
    var someCollegeOrAssociates2020Ratio = someCollegeOrAssociates2020 * 100; 
    for(var i = 0; i < 100; i++){
        if(i < someCollegeOrAssociates2020Ratio){
            someCollegeOrAssociates2020Array.push("X")
        } else{
            someCollegeOrAssociates2020Array.push("O")
        }
    }
    console.log(someCollegeOrAssociates2020Array)
    //Bachelor's degree or higher:
    var bachelorsOrHigher2020Array = []
    var bachelorsOrHigher2020Ratio = bachelorOrHigher2020 * 100; 
    for(var i = 0; i < 100; i++){
        if(i < bachelorsOrHigher2020Ratio){
            bachelorsOrHigher2020Array.push("X")
        } else{
            bachelorsOrHigher2020Array.push("O")
        }
    }
    console.log(bachelorsOrHigher2020Array)

    var self = this;
    var divEducationWaffleChart = d3.select("#education").classed("content", true);
    self.margin = {top: 30, right: 20, bottom: 30, left: 50};

    self.svg = divEducationWaffleChart.append("svg")
        .attr("width",500)
        .attr("height",500)
        .attr("transform", "translate(" + self.margin.left + ",0)")

        //Less than high school, 2010 
        self.svg.selectAll("rect")
        .data(lessthanHS2010Array.reverse())
        .enter()
        .append("rect")
        .attr("width", 30)
        .attr("height", 30)
        .attr("x", function(d,i){
            return Math.floor(i%10) * 50
        })
        .attr("y", function(d,i){
           return Math.floor(i/10)%10 * 50
        })
        .attr("fill", function(d){
            console.log(d)
            if(d=="O"){
                return "grey"; 
            }
            else{
                return "#1F7A8C"; 
            }
        })

        self.svg = divEducationWaffleChart.append("svg")
        .attr("width",500)
        .attr("height",500)
        .attr("transform", "translate(" + self.margin.left + ",0)")

        







 }
