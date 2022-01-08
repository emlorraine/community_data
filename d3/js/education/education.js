
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
        socialExplorer2010Data[29],//Some college
        socialExplorer2010Data[30],//Bachelor's degree 
        socialExplorer2010Data[31],//Master's degree 
        socialExplorer2010Data[32],//Professional school degree 
        socialExplorer2010Data[33]//Doctorate degree 
    ]

    data2020 = [
        socialExplorer2020Data[26],//Total population
        socialExplorer2020Data[27],//Less than high school
        socialExplorer2020Data[28],//High school or equivalent 
        socialExplorer2020Data[29],//Some college
        socialExplorer2020Data[30],//Bachelor's degree 
        socialExplorer2020Data[31],//Master's degree 
        socialExplorer2020Data[32],//Professional school degree 
        socialExplorer2020Data[33]//Doctorate degree 
    ]
    var labels = [
        "\n Less than high school",
        "\n High school or equivalent",
        "\n Some college",
        "\n Bachelor's degree",
        "\n Master's degree",
        "\n Professional School degree",
        "\n Doctorate degree",
    ]

    var population2010 = +(data2010[0].value).replace(",", "")
    var population2020 = +(data2020[0].value).replace(",", "")

    var roundedPopulation2010 = Math.round(population2010/100)*100
    var roundedPopulation2020 = Math.round(population2020/100)*100

    var lessThanHS2010 = Math.round((+(data2010[1].value).replace(",", "")/roundedPopulation2010)*100); 
    var lessThanHS2020 = Math.round(+(data2020[1].value).replace(",", "")/roundedPopulation2020*100); 

    var hsOrEquiv2010 = Math.round(+(data2010[2].value).replace(",", "")/roundedPopulation2010*100); 
    var hsOrEquiv2020 = Math.round(+(data2020[2].value).replace(",", "")/roundedPopulation2020*100);

    var someCollege2010 = Math.round(+(data2010[3].value).replace(",", "")/roundedPopulation2010*100); 
    var someCollege2020 = Math.round(+(data2020[3].value).replace(",", "")/roundedPopulation2020*100); 

    var bachelorOrHigher2010 = Math.round(+(data2010[4].value).replace(",", "")/roundedPopulation2010*100); 
    var bachelorOrHigher2020 = Math.round(+(data2020[4].value).replace(",", "")/roundedPopulation2020*100);

    var mastersDegree2010 = Math.round(+(data2010[5].value).replace(",", "")/roundedPopulation2010*100); 
    var mastersDegree2020 = Math.round(+(data2020[5].value).replace(",", "")/roundedPopulation2020*100);

    var professionalDegree2010 = Math.round(+(data2010[6].value).replace(",", "")/roundedPopulation2010*100); 
    var professionalDegree2020 = Math.round(+(data2020[6].value).replace(",", "")/roundedPopulation2020*100);

    var doctorateDegree2010 = Math.round(+(data2010[7].value).replace(",", "")/roundedPopulation2010*100); 
    var doctorateDegree2020 = Math.round(+(data2020[7].value).replace(",", "")/roundedPopulation2020*100);


    fullGrid2010 = [lessThanHS2010, hsOrEquiv2010, someCollege2010, bachelorOrHigher2010, mastersDegree2010, professionalDegree2010, doctorateDegree2010]
    gridData2010 = []

    fullGrid2020 = [lessThanHS2020, hsOrEquiv2020, someCollege2020, bachelorOrHigher2020, mastersDegree2020, professionalDegree2020, doctorateDegree2020]
    gridData2020 = []

    for(var i = 0; i < fullGrid2010[0]; i++){
        gridData2010.push(0)
    }
    for(var i = 0; i < fullGrid2010[1]; i++){
        gridData2010.push(1)
    }
    for(var i = 0; i < fullGrid2010[2]; i++){
        gridData2010.push(2)
    }
    for(var i = 0; i < fullGrid2010[3]; i++){
        gridData2010.push(3)
    }
    for(var i = 0; i < fullGrid2010[4]; i++){
        gridData2010.push(4)
    }
    for(var i = 0; i < fullGrid2010[5]; i++){
        gridData2010.push(5)
    }
    for(var i = 0; i < fullGrid2010[6]; i++){
        gridData2010.push(6)
    }
    for(var i = 0; i < fullGrid2010[7]; i++){
        gridData2010.push(7)
    }
    gridData2010.length = 100;

    for(var i = 0; i < fullGrid2020[0]; i++){
        gridData2020.push(0)
    }
    for(var i = 0; i < fullGrid2020[1]; i++){
        gridData2020.push(1)
    }
    for(var i = 0; i < fullGrid2020[2]; i++){
        gridData2020.push(2)
    }
    for(var i = 0; i < fullGrid2020[3]; i++){
        gridData2020.push(3)
    }
    for(var i = 0; i < fullGrid2020[4]; i++){
        gridData2020.push(4)
    }
    for(var i = 0; i < fullGrid2020[5]; i++){
        gridData2020.push(5)
    }
    for(var i = 0; i < fullGrid2020[6]; i++){
        gridData2020.push(6)
    }
    for(var i = 0; i < fullGrid2020[7]; i++){
        gridData2020.push(7)
    }
    gridData2020.length = 100;

    var keyLabels = [
        "Less than High School",
        "High School Graduate or Equivalents",
        "Some College",
        "Bachelor's Degree",
        "Master's Degree",
        "Professional School Degree",
        "Doctorate Degree"
    ]

    var self = this;

    $('#education2010').empty();
    $('#education2020').empty();
    // $('#collegeOrHigher2010').empty();

    // $('#lessThanHighSchool2019').empty();
    // $('#highSchoolOrEquivalent2019').empty();
    // $('#collegeOrHigher2019').empty();

        //Less than high school, 2010 
        var education2010Div = d3.select("#education2010")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = education2010Div.append("svg")
            .attr("width",500)
            .attr("height",750)
            // .attr("transform", "translate(" + self.margin.left + ",0)")

        self.svg.selectAll("rect")
            .data(gridData2010.reverse())
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
                if(d==0){
                    return "red"; 
                }
                else if(d==1){
                    return "orange"; 
                }
                else if(d==2){
                    return "yellow"; 
                }
                else if(d==3){
                    return "green"; 
                }
                else if(d==4){
                    return "blue"; 
                }
                else if(d==5){
                    return "purple"; 
                }
                else if(d==6){
                    return "pink"; 
                }
                else{
                    return "D3D3D3"; 
                }
            })
            self.svg.append("rect").attr("x",305).attr("y",500).attr("height", 30).attr("width", 30).style("fill", "black")
            self.svg.append("text").attr("x", 350).attr("y", 515).text("= approx. 100 people").style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",500).attr("height", 20).attr("width", 20).style("fill", "pink")
            self.svg.append("text").attr("x", 30).attr("y", 512).text(keyLabels[6]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",530).attr("height", 20).attr("width", 20).style("fill", "purple")
            self.svg.append("text").attr("x", 30).attr("y", 542).text(keyLabels[5]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",560).attr("height", 20).attr("width", 20).style("fill", "blue")
            self.svg.append("text").attr("x", 30).attr("y", 572).text(keyLabels[4]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",590).attr("height", 20).attr("width", 20).style("fill", "green")
            self.svg.append("text").attr("x", 30).attr("y", 602).text(keyLabels[3]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",620).attr("height", 20).attr("width", 20).style("fill", "yellow")
            self.svg.append("text").attr("x", 30).attr("y", 632).text(keyLabels[2]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",650).attr("height", 20).attr("width", 20).style("fill", "orange")
            self.svg.append("text").attr("x", 30).attr("y", 662).text(keyLabels[1]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",680).attr("height", 20).attr("width", 20).style("fill", "red")
            self.svg.append("text").attr("x", 30).attr("y", 692).text(keyLabels[0]).style("font-size", "15px").attr("alignment-baseline","middle")

        var lessThanHighSchool2020Div = d3.select("#education2020")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = lessThanHighSchool2020Div.append("svg")
            .attr("width",500)
            .attr("height",750)

        self.svg.selectAll("rect")
            .data(gridData2020.reverse())
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
                if(d==0){
                    return "red"; 
                }
                else if(d==1){
                    return "orange"; 
                }
                else if(d==2){
                    return "yellow"; 
                }
                else if(d==3){
                    return "green"; 
                }
                else if(d==4){
                    return "blue"; 
                }
                else if(d==5){
                    return "purple"; 
                }
                else if(d==6){
                    return "pink"; 
                }
                else{
                    return "D3D3D3"; 
                }
            })
            self.svg.append("rect").attr("x",305).attr("y",500).attr("height", 30).attr("width", 30).style("fill", "black")
            self.svg.append("text").attr("x", 350).attr("y", 515).text("= approx. 100 people").style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",500).attr("height", 20).attr("width", 20).style("fill", "pink")
            self.svg.append("text").attr("x", 30).attr("y", 512).text(keyLabels[6]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",530).attr("height", 20).attr("width", 20).style("fill", "purple")
            self.svg.append("text").attr("x", 30).attr("y", 542).text(keyLabels[5]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",560).attr("height", 20).attr("width", 20).style("fill", "blue")
            self.svg.append("text").attr("x", 30).attr("y", 572).text(keyLabels[4]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",590).attr("height", 20).attr("width", 20).style("fill", "green")
            self.svg.append("text").attr("x", 30).attr("y", 602).text(keyLabels[3]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",620).attr("height", 20).attr("width", 20).style("fill", "yellow")
            self.svg.append("text").attr("x", 30).attr("y", 632).text(keyLabels[2]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",650).attr("height", 20).attr("width", 20).style("fill", "orange")
            self.svg.append("text").attr("x", 30).attr("y", 662).text(keyLabels[1]).style("font-size", "15px").attr("alignment-baseline","middle")

            self.svg.append("rect").attr("x",0).attr("y",680).attr("height", 20).attr("width", 20).style("fill", "red")
            self.svg.append("text").attr("x", 30).attr("y", 692).text(keyLabels[0]).style("font-size", "15px").attr("alignment-baseline","middle")

 }
    
        
