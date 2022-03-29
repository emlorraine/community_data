
function TransportationChart(){
    var self = this;
    self.init();
 };
 /**
 * Initializes the svg elements required to lay the bars
 */

  TransportationChart.prototype.init = function(){

    let data2010Hierarchy = {
        "children": [
          {
            "name": "2010",
            "children": [
              {
                "name": "Drove alone",
                "value": 99141,
              },
              {
                "name": "Carpooled",
                "value": 11222,
              },
              {
                "name": "Public transport",
                "value": 15592,
              },
              {
                "name": "Walked",
                "value": 7830,
              },
              {
                "name": "Taxicab, motorcycle, bicycle, or other means",
                "value": 2944,
              },
              {
                "name": "Worked from home",
                "value": 4625,
              }
            ]
        }]
      }

      let data2019Hierarchy = {
        "children": [
          {
            "name": "2019",
            "children": [
              {
                "name": "Drove alone",
                "value": 116251,
              },
              {
                "name": "Carpooled",
                "value": 11639,
              },
              {
                "name": "Public transport",
                "value": 9031,
              },
              {
                "name": "Walked",
                "value": 6800,
              },
              {
                "name": "Taxicab, motorcycle, bicycle, or other means",
                "value": 3039,
              },
              {
                "name": "Worked from home",
                "value": 5892,
              }
            ]
        }]
      }

      $('#transportation-2010').empty();
      $('#transportation-2019').empty();

      //2010
    var root2010 = d3.hierarchy(data2010Hierarchy).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data
    
    var margin = {top: 10, right: 10, bottom: 10, left: 10},
    width = 445 - margin.left - margin.right,
    height = 445 - margin.top - margin.bottom;

    
    const svg = d3.select("#transportation-2010")
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
              return color(d.parent.data.children[i].name)
            } )
        //   .style("opacity", function(d){ return opacity(d.data.value)})
    
      // and to add the text labels
      // svg
      //   .selectAll("text")
      //   .data(root2010.leaves())
      //   .enter()
      //   .append("text")
      //     .attr("x", function(d){ return d.x0+5})    
      //     .attr("y", function(d){ return d.y0+20})    
      //     .text(function(d){ 
      //           return d.data.name 
      //       })
      //     .attr("font-size", "13px")
      //     .attr("fill", "white")

      //2019
      var root2019 = d3.hierarchy(data2019Hierarchy).sum(function(d){ return d.value}) // Here the size of each leave is given in the 'value' field in input data
    
      var margin = {top: 10, right: 10, bottom: 10, left: 10},
      width = 445 - margin.left - margin.right,
      height = 445 - margin.top - margin.bottom;
  
      
      const svg2019 = d3.select("#transportation-2019")
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
          (root2019)
  
          var color = d3.scaleOrdinal()
          .domain(["Drove alone", "Carpooled", "Public transport", "Walked", "Taxicab, motorcycle, bicycle, or other means", "Worked from home",])
          .range([ "#8f2d56", "#a4133c", "#c9184a", "#ff4d6d", "#ff758f", "#ffb3c1"])
      
          svg2019
          .selectAll("rect")
          .data(root2019.leaves())
          .enter()
          .append("rect")
            .attr('x', function (d) { return d.x0; })
            .attr('y', function (d) { return d.y0; })
            .attr('width', function (d) { return d.x1 - d.x0; })
            .attr('height', function (d) { return d.y1 - d.y0; })
            .style("stroke", "black")
            .style("fill", function(d, i){ 
                return color(d.parent.data.children[i].name)
              } )
          //   .style("opacity", function(d){ return opacity(d.data.value)})
      
        // and to add the text labels
        // svg2019
        //   .selectAll("text")
        //   .data(root2019.leaves())
        //   .enter()
        //   .append("text")
        //     .attr("x", function(d){ return d.x0+5})    
        //     .attr("y", function(d){ return d.y0+20})    
        //     .text(function(d){ 
        //           return d.data.name 
        //       })
        //     .attr("font-size", "13px")
        //     .attr("fill", "white")
 } 