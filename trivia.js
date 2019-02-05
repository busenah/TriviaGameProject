/*  
create a container for the Question 
create a container for State
create a container for inputting the capital

*/

let states = {
    "Alabama": "Montgomery",
    "Alaska": "Juneau",
    "Arizona": "Phoenix",
    "Arkansas": "Little Rock",
    "California": "Sacramento",
    "Colorado": "Denver",
    "Connecticut": "Hartford",
    "Delaware": "Dover",
    "Florida": "Tallahassee",
    "Georgia": "Atlanta",
    "Hawaii": "Honolulu",
    "Idaho": "Boise",
    "Illinois": "Springfield",
    "Indiana": "Indianapolis",
    "Iowa": "Des Moines",
    "Kansas": "Topeka",
    "Kentucky": "Frankfort",
    "Louisiana": "Baton Rouge",
    "Maine": "Augusta",
    "Maryland": "Annapolis",
    "Massachusetts": "Boston",
    "Michigan": "Lansing",
    "Minnesota": "St. Paul",
    "Mississippi": "Jackson",
    "Missouri": "Jefferson City",
    "Montana" : "Helena", 
    "Nebraska" : "Lincoln", 
    "Nevada" : "Carson City", 
    "New Hampshire" : "Concord", 
    "New Jersey" : "Trenton", 
    "New Mexico" : "Santa Fe",
    "New York" : "Albany", 
    "North Carolina" : "Raleigh", 
    "North Dakota": "Bismarck", 
    "Ohio" : "Columbus", 
    "Oklahoma" : "Oklahoma City", 
    "Oregon" : "Salem",
    "Pennsylvania" : "Harrisburg", 
    "Rhode Island", 
    "South Carolina", 
    "South Dakota",
    "Tennessee", 
    "Texas", 
    "Utah", 
    "Vermont", 
    "Virginia", 
    "Washington",
    "West Virginia", 
    "Wisconsin", 
    "Wyoming", 
    "District of Columbia"
}


let correct = document.querySelector(".correct")

/*
- If answer is correct, score and console.log("Excellent. You can move to the next question")
- If not correct, do not score and console.log("Sorry you failed. 
    Please try again or move to the next question")
    
*/


/*
At the end of the game, console.log("You have done incredibly well. Please see for youself 
how much you know about the United States of America")

*/

correct.addEventListener('click', () => {
    score++

    if (score  {
        score.innerText = score
    } else {
        declareScore()