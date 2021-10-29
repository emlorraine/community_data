/*
 * Root file that handles instances of all the charts and loads the visualization
 */
(function(){
    var instance = null;
    /**
     * Creates instances for every chart (classes created to handle each chart;
     * the classes are defined in the respective javascript files.
     */
    function init() {
        //Creating instances for each visualization
        data = [] 
        Promise.all([
            d3.csv("./data/Baden/RawData/Race/2010.csv"),
            d3.csv("./data/Baden/RawData/Race/2020.csv")
            ]).then((values) => {
            var raceBarChart = new RaceBarChart(values);
          });

        Promise.all([
            d3.csv("./data/Baden/RawData/Educational_Attainment/2010.csv"),
            d3.csv("./data/Baden/RawData/Educational_Attainment/2020.csv")
            ]).then((values) => {
            var educationalAttainmentChart = new EducationalAttainmentChart(values);
        });

    }

    /**
     *
     * @constructor
     */
    function Main(){
        if(instance  !== null){
            throw new Error("Cannot instantiate more than one Class");
        }
    }

    /**
     *
     * @returns {Main singleton class |*}
     */
    Main.getInstance = function(){
        var self = this
        if(self.instance == null){
            self.instance = new Main();
            //called only once when the class is initialized
            init();
        }
        return instance;
    }

    Main.getInstance();

  
})();

