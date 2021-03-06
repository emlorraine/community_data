$(document).ready(function(){
  $('.nav-tabs a[href="#intro"]').tab('show')});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href").substring(1) // activated tab

    //Add in age svgs:
    if(target !== "intro" && target != "regional-data"){
      $("#age2010").empty()
      $("#age2010").prepend("<img id='age-svg' src=./data/age_svgs/" + target +".svg width='1000' height='1200'>")
    }

    if(target !== "intro" && target !=="regional-data" && target !== "data-sources"){
      // console.log("appended")
      $('#viz-wrapper').appendTo(`#${target}`);

    }

    if(target == "regional-data"){
      $("#regional-data-content").empty()
      html_header = `<h1>Download regional data anaylsis:</h1>`
      $("#regional-data-content").append(html_header)
      html = `<button class="btn btn-secondary" id="download-Buder-data">Download Buder Region Handout</button>
                <br>
                <br>
              <button class="btn btn-secondary" id="download-Carpenter-data">Download Carpenter Region Handout</button>
              <br>
              <br>
            <button class="btn btn-secondary" id="download-Central-data">Download Central Region Handout</button>
            <br>
            <br>
          <button class="btn btn-secondary" id="download-Julia-Davis-data">Download Julia Davis Region Handout</button>
          <br>
          <br>
          <button class="btn btn-secondary" id="download-Schlafly-data">Download Schlafly Region Handout</button>
              `
      $("#regional-data-content").append(html)

      document.getElementById("download-Buder-data").addEventListener("click", function(e){
        if(target !=="intro"){
          var data = "./handouts/regional/buder/buder.pdf"
          window.open(data)
        }
      })

      document.getElementById("download-Carpenter-data").addEventListener("click", function(e){
        if(target !=="intro"){
          var data = "./handouts/regional/Carpenter/Carpenter-region.pdf"
          window.open(data)
        }
      })

      document.getElementById("download-Central-data").addEventListener("click", function(e){
        if(target !=="intro"){
          var data = "./handouts/regional/Central/Central-region.pdf"
          window.open(data)
        }
      })

      document.getElementById("download-Julia-Davis-data").addEventListener("click", function(e){
        if(target !=="intro"){
          var data = "./handouts/regional/julia_davis/julia-davis-regional.pdf"
          window.open(data)
        }
      })

      document.getElementById("download-Schlafly-data").addEventListener("click", function(e){
        if(target !=="intro"){
          var data = "./handouts/regional/Schlafly/Schlafly.pdf"
          window.open(data)
        }
      })


    }

     // Call datasets for branch:
    data2010FileName = "./data/" + target +"/2010/2010/Sheet1-Table 1.csv"
    data2020FileName = "./data/" + target +"/2019/2019/Sheet1-Table 1.csv"
    if(d3.csv(data2010FileName) && d3.csv(data2020FileName)){
      Promise.all([
          d3.csv(data2010FileName),
          d3.csv(data2020FileName),
          ]).then((values) => {
              var raceBarChart = new RaceBarChart(values);
              // var raceTreeMap = new RaceTreeChart(values);
              var educationalAttainmentChart = new EducationalAttainmentChart(values);
              // var ageChart = new AgeChart(values);
              var povertyChart = new PovertyChart(values);          
        });
    } else{
      console.log("Can't find files:", data2020FileName, data2010FileName)
    }

    document.getElementById("download-2010-data").addEventListener("click", function(e){
      if(target !=="intro" && target != "regional-data"){
        var data10 = "./data/" + target +"/2010/2010/Sheet1-Table 1.csv"
        window.open(data10)
      }
    })
    document.getElementById("download-2019-data").addEventListener("click", function(e){
      if(target !=="intro" && target != "regional-data"){
        var data19 = "./data/" + target +"/2019/2019/Sheet1-Table 1.csv"
        window.open(data19)
      }
    })

  });

  $("#state-race").change(function(){
    if ($(this).is(':checked'))
    var html = 
    `<div class="vstack gap-2">
    <h2> Race in Missouri </h2>
    <div id="race-missouri"></div>
    </div>`
      //Add div to race-block
      $('#pills-race').append($("<div id='race-state'></div>"))
      $('#race-state').html(html)
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
    var html = 
    `<div class="vstack gap-2">
    <h2> Race in St. Louis </h2>
    <div id="race-city"></div>
    </div>`
    //Add div to race-block
    $('#pills-race').append($("<div id='race-stl'></div>"))
    $('#race-stl').html(html)

    //Generate d3:
    Promise.all([
      d3.csv("../data/st-louis/2010/2010/Sheet1-Table 1.csv"),
      d3.csv("../data/st-louis/2019/2019/Sheet1-Table 1.csv"),
    ]).then((values) => {
      var raceCityBarChart = new RaceCityBarChart(values); 
    })
  });

  $("#state-race").change(function(){
    if (!$(this).is(':checked'))
      $("#race-state").remove();
  });
  $("#city-race").change(function(){
    if (!$(this).is(':checked'))
    $( "#race-stl" ).remove();
  });



  $("#state-education").change(function(){
    if ($(this).is(':checked'))
      //Generate d3 here 
      var html = 
      `<div id="education-state-block">
        <div id="educationData2010" style="transform: scale(1.25)">
        <div class="vstack gap-2" style="margin-right: 150px;">
          <h3 class = "education-text" id = "collegeOrHigher2010Text">2010</h3><br>
          <div id="educationState2010"></div>
        </div>
        <div class="vstack gap-2">
          <h3 class = "education-text" id = "collegeOrHigher2010Text">2019</h3><br>
          <div id="educationState2020"></div>
        </div>
        </div>
      </div>`
      //Add div to education-block
      $('#pills-education').append($("<div id='education-state'></div>"))
      $('#education-state').html(html)
      Promise.all([
        d3.csv("../data/missouri/2010/2010/Sheet1-Table 1.csv"),
        d3.csv("../data/missouri/2019/2019/Sheet1-Table 1.csv"),
      ]).then((values) => {
        var educationalStateAttainmentChart = new EducationalStateAttainmentChart(values); 
      })

  });
  $("#city-education").change(function(){
    if ($(this).is(':checked'))
      var html = 
      `<div id="education-city-block">
        <div id="educationData2010" style="transform: scale(1.25)">
        <div class="vstack gap-2" style="margin-right: 150px;">
          <h3 class = "education-text" id = "collegeOrHigher2010Text">2010</h3><br>
          <div id="educationCity2010"></div>
        </div>
        <div class="vstack gap-2">
          <h3 class = "education-text" id = "collegeOrHigher2010Text">2019</h3><br>
          <div id="educationCity2020"></div>
        </div>
        </div>
      </div>`
    //Add div to education-block
    $('#pills-education').append($("<div id='education-city'></div>"))
    $('#education-city').html(html)
    Promise.all([
      d3.csv("../data/st-louis/2010/R13001301/Sheet1-Table 1.csv"),
      d3.csv("../data/st-louis/2019/2019/Sheet1-Table 1.csv"),
    ]).then((values) => {
      var educationalCityAttainmentChart = new EducationalCityAttainmentChart(values); 
    })
  });

  $("#city-education").change(function(){
    if (!$(this).is(':checked'))
      $("#education-city").remove();
  });

  $("#state-education").change(function(){
    if (!$(this).is(':checked'))
      $("#education-state").remove();
  });

  //Import raw svgs here!
  $("#state-age").change(function(){
    $('#age-block').append($("<div id='age-state'></div>"))
    $("#age-state").prepend("<img id='age-svg' src=./data/age_svgs/missouri.png>")
    //for d3:
    // if ($(this).is(':checked'))
    //   var html = 
    //   `<div id="age-state-block">
    //     <h2> Age Distribution in the state of Missouri </h2>
    //         <div id="age-state-container">
    //           <div id="age-state-2010"></div>
    //           <div id="age-state-2020"></div>
    //         </div>
    //   </div>
    //   `
    //   $('#pills-age').append($("<div id='age-state'></div>"))
    //   $('#age-state').html(html)
      // Promise.all([
      //   d3.csv("../data/missouri/2010/R13001299/Sheet1-Table 1.csv"),
      //   d3.csv("../data/missouri/2019/R13001295/Sheet1-Table 1.csv"),
      // ]).then((values) => {
      //   var ageStateChart = new AgeStateChart(values); 
      // })
  });
  $("#city-age").change(function(){


    $('#age-block').append($("<div id='age-city'></div>"))
    $("#age-city").prepend("<img id='age-svg' src=./data/age_svgs/st-louis.png>")

    // if ($(this).is(':checked'))
    // var html = 
    //   `<div id="age-city-block">
    //   <h2> Age Distribution in St. Louis </h2>
    //       <div id="age-city-2010"></div>
    //       <div id="age-city-2020"></div>
    //   </div>`
    //   $('#pills-age').append($("<div id='age-city'></div>"))
    //   $('#age-city').html(html)
    //   Promise.all([
    //     d3.csv("../data/st-louis/2010/R13001301/Sheet1-Table 1.csv"),
    //     d3.csv("../data/st-louis/2019/2019/Sheet1-Table 1.csv"),
    //   ]).then((values) => {
    //     var ageCityChart = new AgeCityChart(values); 
    //   })
  });

  $("#city-age").change(function(){
    if (!$(this).is(':checked'))
      $("#age-city").remove();
  });

  $("#state-age").change(function(){
    if (!$(this).is(':checked'))
      $("#age-state").remove();
  });

  $("#state-poverty").change(function(){
    if ($(this).is(':checked'))
      var html = 

      `<h2>Poverty in the state of Missouri</h2>
      <div id="poverty-state-block"><div class="vstack gap-3" id="povertyBlock2010">
        <h3>2010</h3>
        <div id="poverty-state-2010"></div>
      </div>
      <div class="vstack gap-3" id="povertyBlock2019">
        <h3>2019</h3>
        <div id="poverty-state-2019"></div>
      </div>
      </div>`
    //Add div to poverty-block
    $('#pills-poverty').append($("<div id='poverty-state'></div>"))
    $('#poverty-state').html(html)
      //Generate d3:
      Promise.all([
        d3.csv("../data/missouri/2010/R13001299/Sheet1-Table 1.csv"),
        d3.csv("../data/missouri/2019/R13001295/Sheet1-Table 1.csv"),
      ]).then((values) => {
        var povertyStateChart = new PovertyStateChart(values); 
      })

  });
  $("#city-poverty").change(function(){
    if ($(this).is(':checked'))
      var html = 
      `<h2>Poverty in St. Louis</h2><div id="poverty-city-block"><div class="vstack gap-3" id="povertyBlock2010">
        <h3>2010</h3>
        <div id="poverty-city-2010"></div>
      </div>
      <div class="vstack gap-3" id="povertyBlock2019">
        <h3>2019</h3>
        <div id="poverty-city-2019"></div>
      </div>

      </div>`
    //Add div to poverty-block
    $('#pills-poverty').append($("<div id='poverty-city'></div>"))
    $('#poverty-city').html(html)

    //Generate d3:
    Promise.all([
      d3.csv("../data/st-louis/2010/R13001301/Sheet1-Table 1.csv"),
      d3.csv("../data/st-louis/2019/2019/Sheet1-Table 1.csv"),
    ]).then((values) => {
      var povertyCityChart = new PovertyCityChart(values); 
    })
  });

  $("#state-poverty").change(function(){
    if (!$(this).is(':checked'))
      $("#poverty-state").remove();
  });

  $("#city-poverty").change(function(){
    if (!$(this).is(':checked'))
      $("#poverty-city").remove();
  });

  