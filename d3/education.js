/**
 * Constructor for the RaceBarChart
 */
 function EducationalAttainmentChart(data){
    var self = this;
    self.init(data);
};
/**
 * Initializes the svg elements required to lay the bars
 */

 EducationalAttainmentChart.prototype.init = function(rawData){
    var raw2010Data = rawData[0][1]; 
    var raw2020Data = rawData[1][1]; 
    console.log(raw2010Data)
    console.log(raw2020Data)

    //2010
    //Less than high school: S1501_C01_008E
    //High school or equivalent: S1501_C01_009E
    //Some college or associate's degree: S1501_C01_010E + S1501_C01_011E
    //Bachelor's degree or higher: S1501_C01_012E + S1501_C01_013E

    //2020
    //Less than high school: (S1501_C01_002E + S1501_C01_008E) / (S1501_C01_001E + S1501_C01_006E) 
    //High school or equivalent: (S1501_C01_003E + S1501_C01_009E) / (S1501_C01_001E + S1501_C01_006E)
    //Some college or associate's degree: (S1501_C01_004E + S1501_C01_010E + S1501_C01_011E) / (S1501_C01_001E + S1501_C01_006E)
    //Bachelor's degree or higher: (S1501_C01_005E + S1501_C01_012E + S1501_C01_013E) / (S1501_C01_001E + S1501_C01_006E)


    var values2010 = [
        +raw2010Data.P001003,
        +raw2020Data.P1_003N,
        +raw2010Data.P001004,
        +raw2020Data.P1_004N,
        +raw2010Data.P001005,
        +raw2020Data.P1_005N,
        +raw2010Data.P001006,
        +raw2020Data.P1_006N,
        +raw2010Data.P001007,
        +raw2020Data.P1_007N,
        +raw2010Data.P001008,
        +raw2020Data.P1_008N
    ]

    var values2020 = [
        +raw2010Data.P001003,
        +raw2020Data.P1_003N,
        +raw2010Data.P001004,
        +raw2020Data.P1_004N,
        +raw2010Data.P001005,
        +raw2020Data.P1_005N,
        +raw2010Data.P001006,
        +raw2020Data.P1_006N,
        +raw2010Data.P001007,
        +raw2020Data.P1_007N,
        +raw2010Data.P001008,
        +raw2020Data.P1_008N
    ]

    var labels = [
        "\n Less than high school",
        "\n High school or equivalent",
        "\n Some college or associate's degree",
        "\n Bachelor's degree or higher",
    ]

 }
