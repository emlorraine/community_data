
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

    console.log(socialExplorer2020Data)



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

    console.log(data2010, data2020)
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

    console.log(fullGrid2020)



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
    console.log(gridData2020)

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

        console.log(gridData2010)

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
                    return "#purple"; 
                }
                else if(d==6){
                    return "#pink"; 
                }
                else{
                    return "D3D3D3"; 
                }
            })

        var lessThanHighSchool2020Div = d3.select("#lessThanHighSchool2020")
        self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        self.svg = lessThanHighSchool2020Div.append("svg")
            .attr("width",500)
            .attr("height",500)
            // .attr("transform", "translate(" + self.margin.left + ",0)")

        console.log(gridData2010)

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
                    return "#purple"; 
                }
                else if(d==6){
                    return "#pink"; 
                }
                else{
                    return "D3D3D3"; 
                }
            })

        //High school or equivalent, 2010 
        // var highSchoolOrEquivalent2010Div = d3.select("#highSchoolOrEquivalent2010")
        // self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        // self.svg = highSchoolOrEquivalent2010Div.append("svg")
        //     .attr("width",500)
        //     .attr("height",500)
        //     // .attr("transform", "translate(" + self.margin.left + ",0)")

        // self.svg.selectAll("rect")
        //     .data(hsOrEquiv2010Array.reverse())
        //     .enter()
        //     .append("rect")
        //     .attr("width", 30)
        //     .attr("height", 30)
        //     .attr("x", function(d,i){
        //         return Math.floor(i%10) * 50
        //     })
        //     .attr("y", function(d,i){
        //     return Math.floor(i/10)%10 * 50
        //     })
        //     .attr("fill", function(d){
        //         if(d=="O"){
        //             return "#D3D3D3"; 
        //         }
        //         else{
        //             return "#1F7A8C"; 
        //         }
        //     })

        //College or higher, 2010 
        // var collegeOrHigher2010 = d3.select("#collegeOrHigher2010")
        // self.margin = {top: 30, right: 20, bottom: 30, left: 50};
        // self.svg = collegeOrHigher2010.append("svg")
        //     .attr("width",500)
        //     .attr("height",500)
        //     // .attr("transform", "translate(" + self.margin.left + ",0)")

        // self.svg.selectAll("rect")
        //     .data(bachelorsOrHigher2020Array.reverse())
        //     .enter()
        //     .append("rect")
        //     .attr("width", 30)
        //     .attr("height", 30)
        //     .attr("x", function(d,i){
        //         return Math.floor(i%10) * 50
        //     })
        //     .attr("y", function(d,i){
        //     return Math.floor(i/10)%10 * 50
        //     })
        //     .attr("fill", function(d){
        //         if(d=="O"){
        //             return "#D3D3D3"; 
        //         }
        //         else{
        //             return "#1F7A8C"; 
        //         }
        //     })

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
