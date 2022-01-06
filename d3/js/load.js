$(document).ready(function(){
  $('.nav-tabs a[href="#intro"]').tab('show')});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href").substring(1) // activated tab

    if(target !== "intro"){
      $('#viz-wrapper').appendTo(`#${target}`);
    }
     // Call datasets for branch:
    data2010FileName = "./data/" + target +"/2010/2010/Sheet1-Table 1.csv"
    data2020FileName = "./data/" + target +"/2019/2019/Sheet1-Table 1.csv"
    Promise.all([
        d3.csv(data2010FileName),
        d3.csv(data2020FileName),
        ]).then((values) => {
            var raceBarChart = new RaceBarChart(values);
            var educationalAttainmentChart = new EducationalAttainmentChart(values);
            var ageChart = new AgeChart(values);
            var povertyChart = new PovertyChart(values);          
      });

  });

  $("#state-race").change(function(){
    if ($(this).is(':checked'))
      //Add div to race-block
      $('#pills-race').append($("<div id='race-missouri'></div>"))
      //Generate d3:
      Promise.all([
        d3.csv("../data/missouri/2010/R13001299/Sheet1-Table 1.csv"),
        d3.csv("../data/missouri/2019/R13001295/Sheet1-Table 1.csv"),
      ]).then((values) => {
        var raceStateBarChart = new RaceStateBarChart(values); 
      })
  });
  $("#city-race").change(function(){
    if ($(this).is(':checked'))
    //Add div to race-block
    $('#pills-race').append($("<div id='race-city'></div>"))
    //Generate d3:
    Promise.all([
      d3.csv("../data/st-louis/2010/R13001301/Sheet1-Table 1.csv"),
      d3.csv("../data/st-louis/2019/R13001297/Sheet1-Table 1.csv"),
    ]).then((values) => {
      var raceCityBarChart = new RaceCityBarChart(values); 
    })
  });

  $("#state-race").change(function(){
    if (!$(this).is(':checked'))
      $("#race-missouri").remove();
  });
  $("#city-race").change(function(){
    if (!$(this).is(':checked'))
    $( "#race-city" ).remove();
  });



  $("#state-education").change(function(){
    if ($(this).is(':checked'))
      //Generate d3 here 
      console.log("Generate education d3 state")
      //Add div to education-block
      $('#pills-education').append($("<div id='education-missouri'></div>"))

  });
  $("#city-education").change(function(){
    if ($(this).is(':checked'))
    console.log("Generate education d3 city")
    //Add div to education-block
    $('#pills-education').append($("<div id='education-city'></div>"))
  });

  $("#state-age").change(function(){
    if ($(this).is(':checked'))
      //Generate d3 here 
      console.log("Generate age d3 state")
      //Add div to age-block
      $('#pills-age').append($("<div id='age-missouri-2010'></div>"))
      $('#pills-age').append($("<div id='age-missouri-2019'></div>"))


  });
  $("#city-age").change(function(){
    if ($(this).is(':checked'))
    console.log("Generate age d3 city")
    //Add div to age-block
    $('#pills-age').append($("<div id='age-city-2010'></div>"))
    $('#pills-age').append($("<div id='age-city-2019'></div>"))

  });

  $("#state-poverty").change(function(){
    if ($(this).is(':checked'))
      //Generate d3 here 
      console.log("Generate poverty d3 state")
      //Add div to poverty-block
      $('#pills-poverty').append($("<div id='poverty-missouri-2010'></div>"))
      $('#pills-poverty').append($("<div id='poverty-missouri-2019'></div>"))
      //Generate d3:
      Promise.all([
        d3.csv("../data/st-louis/2010/R13001301/Sheet1-Table 1.csv"),
        d3.csv("../data/st-louis/2019/R13001297/Sheet1-Table 1.csv"),
      ]).then((values) => {
        var povertyStateChart = new PovertyStateChart(values); 
      })

  });
  $("#city-poverty").change(function(){
    if ($(this).is(':checked'))
    console.log("Generate poverty d3 city")
    //Add div to poverty-block
    $('#pills-poverty').append($("<div id='poverty-city-2010'></div>"))
    $('#pills-poverty').append($("<div id='poverty-city-2019'></div>"))
    //Generate d3:
    Promise.all([
      d3.csv("../data/st-louis/2010/R13001301/Sheet1-Table 1.csv"),
      d3.csv("../data/st-louis/2019/R13001297/Sheet1-Table 1.csv"),
    ]).then((values) => {
      var povertyCityChart = new PovertyCityChart(values); 
    })
  });