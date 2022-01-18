
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

    var data2010 = rawData[0]
    var data2020 = rawData[1]

    var allOtherRacialGroups2010 = +(data2010[19].value.replace(",", "")) + +(data2010[21].value.replace(",", "")) + +(data2010[22].value.replace(",", "")); 
    var allOtherRacialGroups2020 = +(data2020[19].value.replace(",", "")) + +(data2020[21].value.replace(",", "")) + +(data2020[22].value.replace(",", "")); 

    var values = [
        //White alone:
        +(data2010[17].value.replace(",", "")),
        +(data2020[17].value.replace(",", "")), 

        //Black or African American alone
        +(data2010[18].value.replace(",", "")),
        +(data2020[18].value.replace(",", "")),
        
        // +(data2010[19].value.replace(",", "")),
        // +(data2020[19].value.replace(",", "")), 

        //Asian alone
        +(data2010[20].value.replace(",", "")),
        +(data2020[20].value.replace(",", "")),

        // +(data2010[21].value.replace(",", "")),
        // +(data2020[21].value.replace(",", "")), 

        //Two or more races
        +(data2010[23].value.replace(",", "")),
        +(data2020[23].value.replace(",", "")),

        //All other racial groups
        allOtherRacialGroups2010,
        allOtherRacialGroups2020,
    ]

    var data = [
        { 
          "key": "White alone",
          "values":[
            {"key": "2010", "value": +(data2010[17].value.replace(",", ""))},
            {"key": "2019", "value": +(data2020[17].value.replace(",", ""))}
          ]
        },
        { 
          "key": "Black or African American alone",
          "values":[
            {"key": "2010", "value":+(data2010[18].value.replace(",", ""))},
            {"key": "2019", "value":  +(data2020[18].value.replace(",", ""))}
          ]
        },
        { 
          "key": "Asian alone",
          "values":[
            {"key": "2010", "value":  +(data2010[20].value.replace(",", ""))},
            {"key": "2019", "value":  +(data2020[20].value.replace(",", ""))}
          ]
        },
        { 
          "key": "Two or more races",
          "values":[
            {"key": "2010", "value":  +(data2010[23].value.replace(",", ""))},
            {"key": "2019", "value":  +(data2020[23].value.replace(",", ""))}
          ]
        },
        { 
          "key": "All other racial groups",
          "values":[
            {"key": "2010", "value":  allOtherRacialGroups2010},
            {"key": "2019", "value":  allOtherRacialGroups2020}
          ]
        }
      ];

    var self = this;
    $('#race').empty();

    var width = 1200;
    var height = 750;

    var maxValue = Math.max(...values)

    var margin = {top: 30, right: 20, bottom: 30, left: 50};

    const svg = d3.select("#race")
        .append("svg")
        .attr("width", 1200 + margin.left + margin.right)
        .attr("height", 750 + margin.top + margin.bottom)
        // .append("g")
        // .attr("transform","translate(" + margin.left + "," + margin.top + ")");

        const colors = {
            all: '#CFDFA9',
            top: '#F2DA8E',
            audience: '#EA9485'
          }
          // 2. Append a g element into our SVG
          const main = svg.append('g')
            .attr('class', 'grouped-bars-main-group')
            .attr('transform', `translate(${margin.left},${margin.top})`);

            const xDomain = data.map(category => { return category.key });
            // xScale's domain will be our previously configured xDomain
            const xScale = d3.scaleBand().domain(xDomain);
            // xScale's range will be the width of our chart (minus the margin constraints)
            xScale.range([0, width - margin.left - margin.right]);
            // yScale will be a linear scale, with a domain [0, 1]
            // This domain is defined like this since ratings go from 0 to 1
            const yScale = d3.scaleLinear().domain([0, maxValue]);
            // yScale's range will be the height of our chart (minus the margin constraints)
            yScale.range([height - margin.top - margin.bottom, 0]);
            // ratingsScale's domain is just the array of ratings for a movie
            const subCategories = d3.scaleBand().domain(['2010', '2019']);
            // ratingsScale's range will be the bandwidth of our xScale
            subCategories.range([0, xScale.bandwidth()]);
            // ratingsScale's options
            subCategories.round(true).paddingInner(0.15).paddingOuter(0.95);

    // Create an axis for our movies axis
    const xAxis = d3.axisBottom(xScale);
    // Create an axis for our rating's values
    const yAxis = d3.axisLeft(yScale);
    // Ugly way to create gridlines
    const yGrid = d3.axisLeft(yScale).tickSize(-width + margin.left + margin.right);
    // Render gridlines
    main.append('g')
    .attr('class', 'grouped-bar-chart grid y-grid')
    .attr('transform', `translate(0, 0)`)
    .call(yGrid)
    .selectAll('text') // Remove all the text elements from this g
    .remove();
    // Render xAxis - movie names
    main.append('g')
    .attr('class', 'grouped-bar-chart axis x-axis')
    // Translate our x-axis to the bottom of our chart
    .attr('transform', `translate(0, ${height - margin.top - margin.bottom})`)
    .call(xAxis);
    // Render yAxis - rating's values
    main.append('g')
    .attr('class', 'grouped-bar-chart axis y-axis')
    .attr('transform', `translate(0, 0)`)
    .call(yAxis);

    const labelsArr = [
        { key: '2010', name: '2010' },
        { key: '2019', name: '2019' },
      ];
      // 2. Create the container of the labels
      const labels = main.append('g')
        .attr('class', 'grouped-bar-chart labels-container')
        .attr('transform', `translate(${width - margin.left - margin.right}, 0)`)
        .selectAll('.label-container') // Start data binding
        .data(labelsArr) // bind with our labels array
        .enter() // "for each entry"
        .append('g') // append a g element
        .attr('class', label => { // transform our node as we desire
          return `label-container label-container--${dasherize(label.key)}`
        });
    //   // 3. For each .label-container append a rect
      labels.append('rect')
        .attr('fill', label => { return colors[label.key]; }) // use our color mappings
        .attr('width', 10)
        .attr('height', 10)
        .attr('transform', (label, index) => {
          return `translate(5, ${index * 20})` // translate each rect by index
        });
    //   // 3. For each .label-container append a text
      labels.append('text')
        .attr('transform', (label, index) => {
          return `translate(18, ${index * 20})` // translate each rect by index
        })
        .attr('dy', '.75em')
        .attr('font-size', '12px')
        .text(label => { return label.name });  
    //   // Create a helper function to normalize our keys
      function dasherize(str) {
        return str.trim().replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
      };
      const dataContainer = main.append('g')
      .attr('class', 'grouped-bar-chart data-container');
    // 2. Create g elements with data binding to contain our rating's elements
    const movies = dataContainer.selectAll('.movie-container')
      .data(data)
      .enter()
      .append('g')
      .attr('class', movie => {
        return `movie-container movie-container--${dasherize(movie.key)}`
      })
      .attr('transform', movie => {
        // Position the element with our xScale
        const offset = xScale(movie.key);
        return `translate(${offset}, 0)`;
      });
    // 3. Append reference rects
    movies.append('rect')
      .attr('width', xScale.bandwidth())
      .attr('height', height - margin.top - margin.bottom)
      .attr('fill', 'none')
      .attr('stroke', '#000')
      .attr('stroke-dasharray', '2,2');

      const ratings = movies.selectAll('.rating-container')
      .data(movie => { return movie.values; })
      .enter()
      .append('g')
      .attr('class', movie => {
        return `rating-container rating-container--${dasherize(movie.key)}`
      })
      .append('rect')
      .attr('height', rating => {
        const h = height - margin.top - margin.bottom;
        return h - yScale(rating.value);
      })
      .attr('width', subCategories.bandwidth())
      .attr('transform', rating => {
        const offset = subCategories(rating.key);
        return `translate(${offset}, ${yScale(rating.value)})`;
      })
      .attr('fill', rating => { return colors[rating.key] });
    }


    //   // 1. Create a g element to contain our bars
    // const dataContainer = main.append('g')
    //     .attr('class', 'grouped-bar-chart data-container');
    // // 2. Create g elements with data binding to contain our rating's elements
    // const d3Groups = dataContainer.selectAll('.group-container')
    //     .data(data)
    //     .enter()
    //     .append('g')
    //     .attr('class', point => {
    //         return `group-container group-container--${dasherize(point.key)}`
    //     })
    //     .attr('transform', name => {
    //     // Position the element with our xScale
    //     const offset = xScale(name.key);
    //     return `translate(${offset}, 0)`;
    // });
    // // 3. Append reference rects
    // d3Groups.append('rect')
    //     .attr('width', xScale.bandwidth())
    //     .attr('height', height - margin.top - margin.bottom)
    //     .attr('fill', 'none')
    //     .attr('stroke', '#000')
    //     .attr('stroke-dasharray', '2,2');
    // }

    // const population = d3Groups.selectAll('.population-container')
    //     .data(group => { return group.values; })
    //     .enter()
    //     .append('g')
    //     .attr('class', populationValue => {
    //     return `population-container population-container--${dasherize(populationValue.key)}`
    //     })
    //     .append('rect')
    //     .attr('height', number => {
    //         const h = height - margin.top - margin.bottom;
    //         return h - yScale(number.value);
    //     })
    //     .attr('width', ratingsScale.bandwidth())
    //     .attr('transform', number => {
    //         const offset = ratingsScale(number.key);
    //         return `translate(${offset}, ${yScale(number.value)})`;
    //     })
    //     .attr('fill', number => { return colors[number.key] });


    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // let groupedData = [
    //     {
    //     "Year": "2010",
    //     "Data": 
    //         [
    //             {category: "White alone", number: values[0]},
    //             {category: "Black or African American alone", number: values[2]},
    //             // {category: "American Indian and Alaska Native alone", number: values[4]},
    //             {category: "Asian alone", number: values[4]}, 
    //             // {category: "Native Hawaiian and Other Pacific Islander alone", number: values[8]}, 
    //             {category: "Two or more races", number: values[8]},
    //             {category: "All other racial groups", number: values[6]},
    //         ]
    //     },
    //     {
    //         "Year": "2020",
    //         "Data": 
    //             [
    //                 {category: "White alone", number: values[1]},
    //                 {category: "Black or African American alone", number: values[3]},
    //                 // {category: "American Indian and Alaska Native alone", number: values[5]}, 
    //                 {category: "Asian alone", number: values[5]}, 
    //                 // {category: "Native Hawaiian and Other Pacific Islander alone", number: values[9]}, 
    //                 {category: "Two or more races", number: values[9]},
    //                 {category: "All other racial groups", number: values[7]},
    //             ]
    //         }
    // ]

   

    // var container = d3.select("#race").append("svg").attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    // var groups = container.append('g')
    //     .selectAll('g')
    //     .data(finalData, d => d.groupKey)
    //     .join("g")
    //     .attr("transform", (d) => "translate(" + x0(d.groupKey) + ",0)");



    // var x0  = d3.scaleBand().rangeRound([0, 1000], .5);
    // var x1  = d3.scaleBand();
    // var y   = d3.scaleLinear().rangeRound([600, 0]);

    // var xScale = d3.scaleBand().range ([0, 1000]).padding(0)
    // xScale.domain(labels)
    
    


    // var xAxis = d3.axisBottom().scale(xScale)
    //             .ticks(10)
    //             .tickValues(yearLabels)

    // var yAxis = d3.axisLeft().scale(yScale)
    //             .ticks(10)
    //             .tickFormat(d3.format(",")); 

                
    

    // self.svg = divRaceBarChart.append("svg")
    //     .attr("width",1200)
    //     .attr("height",750)
        // .attr("transform", "translate(" + self.margin.left + ",0)")

    // var years = groupedData.map(function(d) { return d.Year; });
    // var categories = []
    // let racialCategories = groupedData.map(function(d){
    //     (d.Data.map(function(i){
    //         categories.push(i.category)
    //     }))
    // });
    // x0.domain(years);
    // x1.domain(categories).rangeRound([0, x0.bandwidth()]);
    // y.domain([0, d3.max(groupedData, function(key) { 
    //     return d3.max(key.Data, function(d) { 
    //         return d.number; }); 
    //     })
    // ]);

    // // var insertLinebreaks = function (d) {
    // //     var el = d3.select(this);
    // //     var words = d.split(' ');
    // //     el.text('');
    // //     for (var i = 0; i < words.length; i++) {
    // //         var tspan = el.append('tspan').text(words[i]);
    // //         if (i > 0)
    // //             tspan.attr('x', 0).attr('dy', '15');
    // //     }
    // // };

    // self.svg.append("g")
    // .attr("transform", "translate(100," + 600 + ")")
    // // .call(xAxis)
    // // .selectAll("text")
    // // .each(function(d,i){
    // //     // .attr("transform", "translate(0," + 50 + ")")
    // // })	

    // self.svg.append("g")
    // .attr("transform", "translate(100, 0)") 
    // .call(yAxis)


        
    // // var groupSpacing = 6;

    // var slice = self.svg.selectAll(".slice")
    //   .data(values)
    //   .enter().append("g")
    //   .attr("class", "g")
    // //   .attr("transform",function(d, i) {
    // //       console.log(x1(labels[i]))
    // //       return "translate(" + x1(labels[i]) + ",0)"; 
    // //     });

    //   slice.selectAll("rect")
    //   .data(values)
    //     .enter().append("rect")
    //         .attr("width", xScale.bandwidth())
    //         .attr("x", function(d, i) {
    //             return xScale(labels[i]); 
    //         })
    //         .style("fill",function(d, i){
    //             if(i % 2 == 0){
    //                 return "#1F7A8C"
    //             } else {
    //                 return "#B9314F"
    //             }
    //         }) 
    //         .attr("y", function(d) {
    //             return yScale(d); 
    //         })
    //         .attr("height", function(d, i) {
    //             return 600 - yScale(d); 
    //         })
    //         .attr("transform", "translate(100, 0)") 
            // .style("margin-top", "10px")

      
        
        // var textLabels = self.svg.selectAll("barLabels")
        //     .data(values)
        //     .enter()
        //     .append("text")
        //     .attr("x", function(d, i) {
        //         return (xScale(labels[i]) + 27); 
        //     })  
        //     .attr("y", function(d) {
        //         if(yScale(d)<=0){
        //             return (yScale(d)+20);
        //         } else{
        //             return (yScale(d)-5); 
        //         }
        //     })
        //     .attr("transform", "translate(100, 0)") 
        //     .text(function(d){
        //         return d; 
        //     })





