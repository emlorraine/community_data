$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    // var structure = $('.viz-structure')[0].innerHTML;
    // console.log(structure)

    //clear all instances of that tab structure
    console.log($( "#age2010" ).empty());





    var target = $(e.target).attr("href").substring(1) // activated tab
    console.log("Selected", target)
    console.log($('.vis-structure'))
    $('#viz-wrapper').appendTo(`#${target}`);
//     // Call datasets for branch:
    data2010FileName = "./data/" + target +"/2010/2010/Sheet1-Table 1.csv"
    data2020FileName = "./data/" + target +"/2019/2019/Sheet1-Table 1.csv"
    console.log(data2010FileName, data2010FileName)

//     //Make tabs for branch:

    // $("#"+target).append(structure)

//     // Call d3:
    Promise.all([
        d3.csv(data2010FileName),
        d3.csv(data2020FileName),
        ]).then((values) => {
          console.log(values)
        var raceBarChart = new RaceBarChart(values);
        var educationalAttainmentChart = new EducationalAttainmentChart(values);
        var ageChart = new AgeChart(values);
        var povertyChart = new PovertyChart(values);
      });

  });