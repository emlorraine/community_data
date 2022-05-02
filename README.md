# Community Data

## Introduction: 

This tool is intended for use to St. Louis Public Library employees to better understand the communities they serve. Development of this project took place from September 2021 through May 2022. Data analysis and development was led by Emma Baker (emma.baker@wustl.edu) and work was overseen by Joe Monahan. Any questions about the scope of this project or bugs can be directed to jmonahan@slpl.org.  

## Data Sources: 
Data for this project is from the Census Bureau’s 5-year estimates from the American Community Survey for 2010 and 2019. Information on the American Community Survey and data collection methods are found here.  

*Note: 5-year census estimates for 2020 were unavailable until April 2022 due to data collection delays related to the COVID-19 pandemic.*

All data for the map and visualizations are derived from these tables: 

*   Population and Age Data:
    *   Table name: S0101: Age and Sex
    *   Data Level: Census tracts
*   Racial Composition Data:
    *   Table name: P1: Race
    *   Data Level: Census tracts
*   Ethnicity Data:
    *   Table name: P2: Hispanic or Latino, and Not Hispanic or Latino by Race
    *   Data Level: Census tracts
*   Educational Attainment Data:
    *   Table name: S1501: Educational Attainment
    *   Data Level: Census tracts
*   Median Income Data:
    *   Table name: S1903: Median Income in the Past 12 Months (inflation-adjusted dollars)
    *   Data Level: Census tracts
*   Poverty Status Data:
    *   Table name:Poverty Status in the Past 12 Months
    *   Data Level: Census tracts
*   Labor Force Data:
    *   Table name: S2301: Employment Status
    *   Data Level: Census tracts
*   Language Data:
    *   Table name: S1601: Language Spoken at Home
    *   Data Level: St. Louis City, Missouri
*   Transportation and Commute Data:
    *   Table name: C08301: Means of Transportation to Work
    *   Data Level: St. Louis City, Missouri

## Technical Specifications:
This is a Node.js project. Layout was templatized with Bootstrap and all visualizations were made with d3.js. Additionally, the interactive map was made using Leaflet.

