/*  
create a variable for the the questions
create a variable for answers
create a variable for State and their capitals
create a container for inputting the capital

*/

let question = [0];

let answer = ["state"];
statesAndTheirCapitals[0].state
statesAndTheirCapitals[0].capital

let statesAndTheirCapitals = [
    { state: "Alabama", capital: "Montgomery" },
    { state: "Alaska", capital: "Juneau" },
    { state: "Arizona", capital: "Phoenix" },
    { state: "Arkansas", capital: "Little Rock"},
    { state: "California", capital: "Sacramento"},
    { state: "Colorado", capital: "Denver"},
    { state: "Connecticut", capital: "Hartford"},
    { state: "Delaware", capital: "Dover"},
    { state: "Florida", capital: "Tallahassee"},
    { state: "Georgia", capital: "Atlanta"},
    { state: "Hawaii", capital: "Honolulu"},
    { state: "Idaho", capital: "Boise"},
    { state: "Illinois", capital: "Springfield"},
    { state: "Indiana", capital: "Indianapolis"},
    { state: "Iowa", capital: "Des Moines"},
    { state: "Kansas", capital: "Topeka"},
    { state: "Kentucky", capital: "Frankfort"},
    { state: "Louisiana", capital: "Baton Rouge"},
    { state: "Maine", capital: "Augusta"},
    { state: "Maryland", capital: "Annapolis"},
    { state: "Massachusetts", capital: "Boston"},
    { state: "Michigan", capital: "Lansing"},
    { state: "Minnesota", capital: "St. Paul"},
    { state: "Mississippi", capital: "Jackson"},
    { state: "Missouri", capital: "Jefferson City"},
    { state: "Montana", capital: "Helena"},
    { state: "Nebraska", capital: "Lincoln"},
    { state: "Nevada", capital: "Carson City"},
    { state: "New Hampshire", capital: "Concord"},
    { state: "New Jersey", capital: "Trenton"},
    { state: "New Mexico", capital: "Santa Fe"},
    { state: "New York", capital: "Albany"},
    { state: "North Carolina", capital: "Raleigh"},
    { state: "North Dakota", capital: "Bismarck"},
    { state: "Ohio", capital: "Columbus"},
    { state: "Oklahoma", capital: "Oklahoma City"},
    { state: "Oregon", capital: "Salem"},
    { state: "Pennsylvania", capital: "Harrisburg"},
    { state: "Rhode Island", capital: "	Providence"},
    { state: "South Carolina", capital: "Columbia"},
    { state: "South Dakota", capital: "Pierre"},
    { state: "Tennessee", capital: "Nashville"},
    { state: "Texas", capital: "Austin"},
    { state: "Utah", capital: "Salt Lake City"},
    { state: "Vermont", capital: "Montpelier"},
    { state: "Virginia", capital: "Richmond"},
    { state: "Washington", capital: "Olympia"},
    { state: "West Virginia", capital: "Charleston"},
    { state: "Wisconsin", capital: "Madison"},
    { state: "Wyoming", capital: "Cheyenne"},
    { state: "District of Columbia", capital: "Washington DC"},

];

let grabQuestion = document.querySelector('#state')
grabQuestion.innerHTML = "submit"
console.log(grabQuestion);

const button = document.querySelector('.js-button')

submit.addEventListener('click', function () {
    // score = score + 1
    alert("You have submitted an answer!")
})

/*
- If answer is correct, display score, and 
display alert ("Hurray! You got it! Please move to the next question")
if $("capital")


else

add a (zero) 0 score and 
display alert ("Sorry! Please try again, or move to the next question")

then click to either the back or next button


* alert syntax:      alert(" ");

    
*/


/*
At the end of the game, console.log("You have done incredibly well. Please see for youself 
how much you know about the United States of America")

*/

button.addEventListener('click', () => {
    score++

    /*  if (score  {
          score.innerText = score
      } else {
          declareScore()
      
      }
       */
});
