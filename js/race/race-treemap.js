
function RaceTreeChart(data){
    var self = this;
    self.init(data);
 };
 /**
 * Initializes the svg elements required to lay the bars
 */

  RaceTreeChart.prototype.init = function(data){

    $('#race-tree-2010').empty();
    $('#race-tree-2020').empty();


    var data2010 = data[0]
    var data2020 = data[1]
    var allOtherRacialGroups2010 = +(data2010[19].value.replace(",", "")) + +(data2010[21].value.replace(",", "")) + +(data2010[22].value.replace(",", "")); 
    var allOtherRacialGroups2020 = +(data2020[19].value.replace(",", "")) + +(data2020[21].value.replace(",", "")) + +(data2020[22].value.replace(",", "")); 
    
    var totalPopulation2010 = +data2010[16].value.replaceAll(",", "")
    var whitePercentage2010 = +(data2010[17].value.replace(",", "")) / totalPopulation2010
    var blackOrAfricanAmericanPercentage2010 = (data2010[18].value.replace(",", "")) / totalPopulation2010
    var asianPercentage2010 = +(data2010[20].value.replace(",", "")) / totalPopulation2010
    var twoOrMoreRacesPercentage2010 = +(data2010[23].value.replace(",", "")) / totalPopulation2010
    var allOtherRacialGroupsPercentage2010 = allOtherRacialGroups2010 / totalPopulation2010

    console.log(whitePercentage2010, blackOrAfricanAmericanPercentage2010, blackOrAfricanAmericanPercentage2010, asianPercentage2010, twoOrMoreRacesPercentage2010, allOtherRacialGroupsPercentage2010)

    let data2010Hierarchy = {
        "children": [
          {
            "name": "2010",
            "children": [
              {
                "name": "White",
                // "value": +(data2010[17].value.replace(",", "")),
                "value":whitePercentage2010
              },
              {
                "name": "Black or African American",
                // "value": (data2010[18].value.replace(",", "")),
                "value":blackOrAfricanAmericanPercentage2010

              },
              {
                "name": "Asian",
                // "value": +(data2010[20].value.replace(",", "")),
                "value":asianPercentage2010

              },
              {
                "name": "Two or more races",
                // "value": +(data2010[23].value.replace(",", "")),
                "value":twoOrMoreRacesPercentage2010

              },
              {
                "name": "All other racial groups",
                // "value": allOtherRacialGroups2010,
                "value":allOtherRacialGroupsPercentage2010

              }
            ]
        }]
      }

      let data2020Hierarchy = {
        "children": [
          {
            "name": "2020",
            "children": [
              {
                "name": "White",
                "value": +(data2020[17].value.replace(",", "")),
              },
              {
                "name": "Black or African American",
                "value": (data2020[18].value.replace(",", "")),
              },
              {
                "name": "Asian",
                "value": +(data2020[20].value.replace(",", "")),
              },
              {
                "name": "Two or more races",
                "value": +(data2020[23].value.replace(",", "")),
              },
              {
                "name": "All other racial groups",
                "value": allOtherRacialGroups2020,
              }
            ]
        }]
      }

      //2010
    var root2010 = d3.hierarchy(data2010Hierarchy).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data
    
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 445 - margin.left - margin.right,
    height = 445 - margin.top - margin.bottom;

    
    const svg = d3.select("#race-tree-2010")
        .append("svg")
        .attr("width", 500 + margin.left + margin.right)
        .attr("height", 500 + margin.top + margin.bottom)

    d3.treemap()
        .size([width, height])
        .paddingTop(28)
        .paddingRight(7)
        .paddingInner(3)      // Padding between each rectangle
        //.paddingOuter(6)
        //.padding(20)
        (root2010)

        var color = d3.scaleOrdinal()
        .domain(["Drove alone", "Carpooled", "Public transport", "Walked", "Taxicab, motorcycle, bicycle, or other means", "Worked from home",])
        .range([ "#003355", "#005577", "#007799", "#31919d", "#62aba1", "#c5dfaa"])
    
      svg
        .selectAll("rect")
        .data(root2010.leaves())
        .enter()
        .append("rect")
          .attr('x', function (d) { return d.x0; })
          .attr('y', function (d) { return d.y0; })
          .attr('width', function (d) { return d.x1 - d.x0; })
          .attr('height', function (d) { return d.y1 - d.y0; })
          .style("stroke", "black")
          .style("fill", function(d, i){ 
              // console.log(d.parent.data.children[i].name, color(d.parent.data.children[i].name))
              return color(d.parent.data.children[i].name)
            } )
        //   .style("opacity", function(d){ return opacity(d.data.value)})
    
      // and to add the text labels
      svg
        .selectAll("text")
        .data(root2010.leaves())
        .enter()
        .append("text")
          .attr("x", function(d){ return d.x0+5})    
          .attr("y", function(d){ return d.y0+20})    
          .text(function(d){ 
                return d.data.name 
            })
          .attr("font-size", "13px")
          .attr("fill", "white")



//2020
var root2020 = d3.hierarchy(data2020Hierarchy).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data
    
var margin = {top: 10, right: 10, bottom: 10, left: 10},
width = 445 - margin.left - margin.right,
height = 445 - margin.top - margin.bottom;


const svg2020 = d3.select("#race-tree-2020")
    .append("svg")
    .attr("width", 500 + margin.left + margin.right)
    .attr("height", 500 + margin.top + margin.bottom)

d3.treemap()
    .size([width, height])
    .paddingTop(28)
    .paddingRight(7)
    .paddingInner(3)      // Padding between each rectangle
    //.paddingOuter(6)
    //.padding(20)
    (root2020)

    var color = d3.scaleOrdinal()
    .domain(["Drove alone", "Carpooled", "Public transport", "Walked", "Taxicab, motorcycle, bicycle, or other means", "Worked from home",])
    .range([ "#003355", "#005577", "#007799", "#31919d", "#62aba1", "#c5dfaa"])

    svg2020
    .selectAll("rect")
    .data(root2020.leaves())
    .enter()
    .append("rect")
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .style("stroke", "black")
      .style("fill", function(d, i){ 
          console.log(d.parent.data.children[i].name, color(d.parent.data.children[i].name))
          return color(d.parent.data.children[i].name)
        } )
    //   .style("opacity", function(d){ return opacity(d.data.value)})

  // and to add the text labels
  svg2020
    .selectAll("text")
    .data(root2020.leaves())
    .enter()
    .append("text")
      .attr("x", function(d){ return d.x0+5})    
      .attr("y", function(d){ return d.y0+20})    
      .text(function(d){ 
            return d.data.name 
        })
      .attr("font-size", "13px")
      .attr("fill", "white")
 } 