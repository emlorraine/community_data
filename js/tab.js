

function openBranch(evt, branchName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(branchName).style.display = "block";
  evt.currentTarget.className += " active";

  //Now we need to render the d3:
  // renderD3(branchName)

}

function openRaceViz(evt, vizName) {
  var race_block = document.getElementById('race-block');
  var education_block = document.getElementById('education-block');
  var age_block = document.getElementById('age-block');
  var poverty_block = document.getElementById('poverty-block');

  education_block.removeAttribute
  age_block.removeAttribute
  poverty_block.removeAttribute
}

function openEducationalAttainmentViz(evt, vizName) {
  var race_block = document.getElementById('race-block');
  var education_block = document.getElementById('education-block');
  var age_block = document.getElementById('age-block');
  var poverty_block = document.getElementById('poverty-block');

  race_block.removeAttribute
  age_block.removeAttribute
  poverty_block.removeAttribute
}

function openAgeViz(evt, vizName) {
  var race_block = document.getElementById('race-block');
  var education_block = document.getElementById('education-block');
  var age_block = document.getElementById('age-block');
  var poverty_block = document.getElementById('poverty-block');

  race_block.removeAttribute
  education_block.removeAttribute
  poverty_block.removeAttribute

  document.getElementById('viz-structure').style.height = "1500px";
}

function openPovertyViz(evt, vizName) {
  var race_block = document.getElementById('race-block');
  var education_block = document.getElementById('education-block');
  var age_block = document.getElementById('age-block');
  var poverty_block = document.getElementById('poverty-block');

  race_block.removeAttribute
  education_block.removeAttribute
  age_block.removeAttribute

  document.getElementById('viz-structure').style.height = "500px";
}
function renderD3(branchName){
  var div = document.createElement('div');
  div.innerHTML = document.getElementById('viz-structure').innerHTML;

  document.getElementById(branchName).appendChild(div);

  data2010FileName = "./data/" + branchName +"/2010/2010/Sheet1-Table 1.csv"
  data2020FileName = "./data/" + branchName +"/2019/2019/Sheet1-Table 1.csv"
    // Creating instances for each visualization
    Promise.all([
        d3.csv(data2010FileName),
        d3.csv(data2020FileName),
        ]).then((values) => {
        var raceBarChart = new RaceBarChart(values);
        var educationalAttainmentChart = new EducationalAttainmentChart(values);
        var ageChart = new AgeChart(values);
        var povertyChart = new PovertyChart(values);
      });
}

