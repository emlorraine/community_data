
 function EducationalAttainmentChart(data){
    var self = this;
    self.init(data);
};
/**
 * Initializes the svg elements required to lay the bars
 */

 EducationalAttainmentChart.prototype.init = function(rawData){
    //SOCIAL EXPLORER DATA: 
    var socialExplorer2010Data = rawData[0]
    var socialExplorer2020Data = rawData[1]

    data2010 = [
        socialExplorer2010Data[26],//Total population
        socialExplorer2010Data[27],//Less than high school
        socialExplorer2010Data[28],//High school or equivalent 
        socialExplorer2010Data[30]//Bachelor's degree or higher
    ]
    data2020 = [
        socialExplorer2020Data[26],//Total population
        socialExplorer2020Data[27],//Less than high school
        socialExplorer2020Data[28],//High school or equivalent 
        socialExplorer2020Data[29]//Bachelor's degree or higher
    ]
    var labels = [
        "\n Less than high school",
        "\n High school or equivalent",
        "\n Bachelor's degree or higher",
    ]

    var population2010 = +(data2010[0].value).replace(",", "")
    var population2020 = +(data2020[0].value).replace(",", "")

    var roundedPopulation2010 = Math.round(population2010/1000)*1000
    var roundedPopulation2020 = Math.round(population2020/1000)*1000

    var lessThanHS2010 = Math.round(+(data2010[1].value).replace(",", "")/100 * roundedPopulation2010)/ roundedPopulation2010; 
    var lessThanHS2020 = Math.round(+(data2020[1].value).replace(",", "")/100 * roundedPopulation2020) /roundedPopulation2020; 

    var hsOrEquiv2010 = Math.round(+(data2010[2].value).replace(",", "")/100 * roundedPopulation2010) /roundedPopulation2010; 
    var hsOrEquiv2020 = Math.round(+(data2020[2].value).replace(",", "")/100 * roundedPopulation2020)/roundedPopulation2020; 

    var bachelorOrHigher2010 = Math.round(+(data2010[3].value).replace(",", "")/100 * roundedPopulation2010) / roundedPopulation2010;
    var bachelorOrHigher2020 = Math.round(+(data2020[3].value).replace(",", "")/100 * roundedPopulation2020)/roundedPopulation2020;

    
    //2010
    //Less than high school:
    var lessthanHS2010Array = []
    var lessthanHS2010Ratio = lessThanHS2010; 
    for(var i = 0; i < 100; i++){
        if(i < lessthanHS2010Ratio){
            lessthanHS2010Array.push("X")
        } else{
            lessthanHS2010Array.push("O")
        }
    }
    //High school or equivalent: 
    var hsOrEquiv2010Array = []
    var hsOrEquiv2010Ratio = hsOrEquiv2010; 
    for(var i = 0; i < 100; i++){
        if(i < hsOrEquiv2010Ratio){
            hsOrEquiv2010Array.push("X")
        } else{
            hsOrEquiv2010Array.push("O")
        }
    }

    //Bachelor's degree or higher:
    var bachelorsOrHigher2010Array = []
    var bachelorsOrHigher2010Ratio = bachelorOrHigher2010; 
    for(var i = 0; i < 100; i++){
        if(i < bachelorsOrHigher2010Ratio){
            bachelorsOrHigher2010Array.push("X")
        } else{
            bachelorsOrHigher2010Array.push("O")
        }
    }

    //2020
    //Less than high school:
    var lessthanHS2020Array = []
    var lessthanHS2020Ratio = lessThanHS2020; 
    for(var i = 0; i < 100; i++){
        if(i < lessthanHS2020Ratio){
            lessthanHS2020Array.push("X")
        } else{
            lessthanHS2020Array.push("O")
        }
    }
    //High school or equivalent: 
    var hsOrEquiv2020Array = []
    var hsOrEquiv2020Ratio = hsOrEquiv2020; 
    for(var i = 0; i < 100; i++){
        if(i < hsOrEquiv2020Ratio){
            hsOrEquiv2020Array.push("X")
        } else{
            hsOrEquiv2020Array.push("O")
        }
    }

    //Bachelor's degree or higher:
    var bachelorsOrHigher2020Array = []
    var bachelorsOrHigher2020Ratio = bachelorOrHigher2020; 
    for(var i = 0; i < 100; i++){
        if(i < bachelorsOrHigher2020Ratio){
            bachelorsOrHigher2020Array.push("X")
        } else{
            bachelorsOrHigher2020Array.push("O")
        }
    }
    var self = this;

    $('#lessThanHighSchool2010').empty();
    $('#highSchoolOrEquivalent2010').empty();
    $('#collegeOrHigher2010').empty();

    $('#lessThanHighSchool2019').empty();
    $('#highSchoolOrEquivalent2019').empty();
    $('#collegeOrHigher2019').empty();

        //Less than high school, 2010 
        var lessThanHighSchool2010Div = d3.select("#lessThanHighSchool2010")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = lessThanHighSchool2010Div.append("svg")
            .attr("width",500)
            .attr("height",500)
            // .attr("transform", "translate(" + self.margin.left + ",0)")

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
                if(d=="O"){
                    return "#D3D3D3"; 
                }
                else{
                    return "#1F7A8C"; 
                }
            })

        //High school or equivalent, 2010 
        var highSchoolOrEquivalent2010Div = d3.select("#highSchoolOrEquivalent2010")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = highSchoolOrEquivalent2010Div.append("svg")
            .attr("width",500)
            .attr("height",500)
            // .attr("transform", "translate(" + self.margin.left + ",0)")

        self.svg.selectAll("rect")
            .data(hsOrEquiv2010Array.reverse())
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
                if(d=="O"){
                    return "#D3D3D3"; 
                }
                else{
                    return "#1F7A8C"; 
                }
            })

        //College or higher, 2010 
        var collegeOrHigher2010 = d3.select("#collegeOrHigher2010")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = collegeOrHigher2010.append("svg")
            .attr("width",500)
            .attr("height",500)
            // .attr("transform", "translate(" + self.margin.left + ",0)")

        self.svg.selectAll("rect")
            .data(bachelorsOrHigher2020Array.reverse())
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
                if(d=="O"){
                    return "#D3D3D3"; 
                }
                else{
                    return "#1F7A8C"; 
                }
            })

        //Less than high school, 2019
        var lessThanHighSchool2019Div = d3.select("#lessThanHighSchool2019")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = lessThanHighSchool2019Div.append("svg")
            .attr("width",500)
            .attr("height",500)
            // .attr("transform", "translate(" + self.margin.left + ",0)")

        self.svg.selectAll("rect")
            .data(lessthanHS2020Array.reverse())
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
                if(d=="O"){
                    return "#D3D3D3"; 
                }
                else{
                    return "#B9314F"; 
                }
            })

        //High school or equivalent, 2019 
        var highSchoolOrEquivalent2019Div = d3.select("#highSchoolOrEquivalent2019")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = highSchoolOrEquivalent2019Div.append("svg")
            .attr("width",500)
            .attr("height",500)
            // .attr("transform", "translate(" + self.margin.left + ",0)")

        self.svg.selectAll("rect")
            .data(hsOrEquiv2020Array.reverse())
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
                if(d=="O"){
                    return "#D3D3D3"; 
                }
                else{
                    return "#B9314F"; 
                }
            })

        //College or higher, 2019 
        var collegeOrHigher2019 = d3.select("#collegeOrHigher2019")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = collegeOrHigher2019.append("svg")
            .attr("width",500)
            .attr("height",500)
            // .attr("transform", "translate(" + self.margin.left + ",0)")

        self.svg.selectAll("rect")
            .data(bachelorsOrHigher2020Array)
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
                if(d=="O"){
                    return "#D3D3D3"; 
                }
                else{
                    return "#B9314F"; 
                }
            })



    }
