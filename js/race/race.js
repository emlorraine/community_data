
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
            2010: '#1F7A8C',
            2019: '#B9314F',
          }
          // 2. Append a g element into our SVG
          const main = svg.append('g')
            .attr('class', 'grouped-bars-main-group')
            .attr('transform', `translate(100,${margin.top})`);

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
            const subCategories = d3.scaleBand().domain(['2010', '2019']);
            subCategories.range([0, xScale.bandwidth()]);
            subCategories.round(true).paddingInner(0.15).paddingOuter(0.95);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    // Ugly way to create gridlines
    const yGrid = d3.axisLeft(yScale).tickSize(-width + margin.left + margin.right);
    // Render gridlines
    // main.append('g')
    // .attr('class', 'grouped-bar-chart grid y-grid')
    // .attr('transform', `translate(0, 0)`)
    // .call(yGrid)
    // .selectAll('text') // Remove all the text elements from this g
    // .remove();
    main.append('g')
    .attr('class', 'grouped-bar-chart axis x-axis')
    // Translate our x-axis to the bottom of our chart
    .attr('transform', `translate(0, ${height - margin.top - margin.bottom})`)
    .call(xAxis);
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
      labels.append('rect')
        .attr('fill', label => { return colors[label.key]; }) // use our color mappings
        .attr('width', 10)
        .attr('height', 10)
        .attr('transform', (label, index) => {
          return `translate(5, ${index * 20})` // translate each rect by index
        });
      labels.append('text')
        .attr('transform', (label, index) => {
          return `translate(18, ${index * 20})` // translate each rect by index
        })
        .attr('dy', '.75em')
        .attr('font-size', '12px')
        .text(label => { return label.name });  
      function dasherize(str) {
        return str.trim().replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
      };
      const dataContainer = main.append('g')
      .attr('class', 'grouped-bar-chart data-container');
    // 2. Create g elements with data binding to contain our elements
    const movies = dataContainer.selectAll('.movie-container')
      .data(data)
      .enter()
      .append('g')
      .attr('class', movie => {
        return `movie-container movie-container--${dasherize(movie.key)}`
      })
      .attr('transform', movie => {
        const offset = xScale(movie.key);
        return `translate(${offset}, 0)`;
      });
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
      .attr('fill', rating => { 
          return colors[rating.key] 
        });
    }






