/*  
create a variable for the the questions
create a variable for answers
create a variable for State and their capitals
create a container for inputting the capital

*/

/*let question = statesAndTheirCapitals[0].state
console.log(question)
statesAndTheirCapitals[0].capital
*/

let statesAndTheirCapitals = [
                                                                 
    { state: "Alabama", capital: "Montgomery" },
    { state: "Alaska", capital: "Juneau" },
    { state: "Arizona", capital: "Phoenix" },
    { state: "Arkansas", capital: "Little Rock" },
    { state: "California", capital: "Sacramento" },
    { state: "Colorado", capital: "Denver" },
    { state: "Connecticut", capital: "Hartford" },
    { state: "Delaware", capital: "Dover" },
    { state: "Florida", capital: "Tallahassee" },
    { state: "Georgia", capital: "Atlanta" },
    { state: "Hawaii", capital: "Honolulu" },
    { state: "Idaho", capital: "Boise" },
    { state: "Illinois", capital: "Springfield" },
    { state: "Indiana", capital: "Indianapolis" },
    { state: "Iowa", capital: "Des Moines" },
    { state: "Kansas", capital: "Topeka" },
    { state: "Kentucky", capital: "Frankfort" },
    { state: "Louisiana", capital: "Baton Rouge" },
    { state: "Maine", capital: "Augusta" },
    { state: "Maryland", capital: "Annapolis" },
    { state: "Massachusetts", capital: "Boston" },
    { state: "Michigan", capital: "Lansing" },
    { state: "Minnesota", capital: "St. Paul" },
    { state: "Mississippi", capital: "Jackson" },
    { state: "Missouri", capital: "Jefferson City" },
    { state: "Montana", capital: "Helena" },
    { state: "Nebraska", capital: "Lincoln" },
    { state: "Nevada", capital: "Carson City" },
    { state: "New Hampshire", capital: "Concord" },
    { state: "New Jersey", capital: "Trenton" },
    { state: "New Mexico", capital: "Santa Fe" },
    { state: "New York", capital: "Albany" },
    { state: "North Carolina", capital: "Raleigh" },
    { state: "North Dakota", capital: "Bismarck" },
    { state: "Ohio", capital: "Columbus" },
    { state: "Oklahoma", capital: "Oklahoma City" },
    { state: "Oregon", capital: "Salem" },
    { state: "Pennsylvania", capital: "Harrisburg" },
    { state: "Rhode Island", capital: "	Providence" },
    { state: "South Carolina", capital: "Columbia" },
    { state: "South Dakota", capital: "Pierre" },
    { state: "Tennessee", capital: "Nashville" },
    { state: "Texas", capital: "Austin" },
    { state: "Utah", capital: "Salt Lake City" },
    { state: "Vermont", capital: "Montpelier" },
    { state: "Virginia", capital: "Richmond" },
    { state: "Washington", capital: "Olympia" },
    { state: "West Virginia", capital: "Charleston" },
    { state: "Wisconsin", capital: "Madison" },
    { state: "Wyoming", capital: "Cheyenne" },
    { state: "District of Columbia", capital: "Washington DC" }

];

let question = statesAndTheirCapitals[0].state
console.log(question)

let grabQuestion = document.querySelector('.state')
grabQuestion.innerHTML = question
console.log(grabQuestion);

let answer = statesAndTheirCapitals[0].capital
console.log(answer)

let grabAnswer = document.querySelector('#capital')
grabAnswer.innerHTML = answer
console.log(grabAnswer);


options: {
    q1: ["", "", "Montgomery", ""],
    q2: ["", "Juneau", "", ""],
    q3: ["", "", "", "Phoenix"],
    q4: ["Little Rock", "", "", ""],
    q5: ["", "Sacramento", "", ""],
    q6: ["", "", "", "Denver"],
    q7: ["Hartford", "", "", ""], 
    q8: ["Dover", "", "", ""],
    q9: ["", "", "Tallahassee", ""],
    q11: ["", "Atlanta", "", ""],
    q12: ["Honolulu", "", "", ""],
    q13: ["", "", "", "Boise"],
    q14: ["", "Springfield", "", ""],
    q15: ["", "Indianapolis", "", ""],
    q16: ["Des Moines", "", "", ""],
    q17: ["", "", "", "Topeka"],
    q18: ["", "", "Frankfort", ""],
    q19: ["Baton Rouge", "", "", ""],
    q20: ["", "", "Augusta", ""],
    q21: ["", "Annapolis", "", ""],
    q22: ["", "", "", ""],
    q23: ["", "", "", "Boston"],
    q24: ["", "Lansing", "", ""],
    q25: ["", "Saint Paul", "", ""],
    q26: ["Jackson", "", "", ""],
    q26: ["", "", "Jefferson City", ""],
    q27: ["", "Helena", "", ""],
    q28: ["", "", "", "Lincoln"],
    q29: ["", "Carson City", "", ""],
    q30: ["Concord", "", "", ""],
    q31: ["", "Trenton", "", ""],
    q32: ["", "", "", "Santa Fe"],
    q33: ["", "", "Albany", ""],
    q34: ["Raleigh", "", "", ""],
    q35: ["", "", "Bismarck", ""],
    q36: ["Columbus", "", "", ""],
    q37: ["", "", "Oklahoma City", ""],
    q38: ["Salem", "", "", ""],
    q39: ["", "", "Harrisburg", ""],
    q40: ["", "Providence", "", ""],
    q41: ["Columbia", "", "", ""],
    q42: ["", "", "Pierre", ""],
    q43: ["", "Nashville", "", ""],
    q44: ["", "Austin", "", ""],
    q45: ["Salt Lake City", "", "", ""],
    q46: ["", "", "", "Montpelie"],
    q46: ["", "", "Richmond", ""],
    q47: ["", "Olympia", "", ""],
    q48: ["", "", "", "Charleston"],
    q49: ["", "", "Madison", ""],
    q50: ["Cheyenne", "", "", ""],
    q51: ["Washington DC", "", "", ""],
};

answers: {
    q1: "Montgomery",
    q2: "Juneau",
    q3: "Phoenix",
    q4: "Little Rock",
    q5: "Sacramento",
    q6: "Denver",
    q7: "Hartford", 
    q8: "Dover",
    q9: "Tallahassee",
    q10: "Atlanta",
    q11: "Honolulu",
    q12: "Boise",
    q13: "Springfield",
    q14: "Indianapolis",
    q15: "Des Moines",
    q16: "Topeka",
    q17: "Frankfort",
    q18: "Baton Rouge",
    q19: "Augusta",
    q20: "Annapolis",
    q21: ["", "", "", "Boston"],
    q22: ["", "Lansing", "", ""],
    q23: ["", "Saint Paul", "", ""],
    q24: ["Jackson", "", "", ""],
    q25: ["", "", "Jefferson City", ""],
    q26: ["", "Helena", "", ""],
    q27: ["", "", "", "Lincoln"],
    q28: ["", "Carson City", "", ""],
    q29: ["Concord", "", "", ""],
    q30: ["", "Trenton", "", ""],
    q31: ["", "", "", "Santa Fe"],
    q32: ["", "", "Albany", ""],
    q33: ["Raleigh", "", "", ""],
    q34: ["", "", "Bismarck", ""],
    q35: ["Columbus", "", "", ""],
    q36: ["", "", "Oklahoma City", ""],
    q37: ["Salem", "", "", ""],
    q38: ["", "", "Harrisburg", ""],
    q39: ["", "Providence", "", ""],
    q40: ["Columbia", "", "", ""],
    q41: ["", "", "Pierre", ""],
    q42: ["", "Nashville", "", ""],
    q43: ["", "Austin", "", ""],
    q44: ["Salt Lake City", "", "", ""],
    q45: ["", "", "", "Montpelie"],
    q46: ["", "", "Richmond", ""],
    q47: ["", "Olympia", "", ""],
    q48: ["", "", "", "Charleston"],
    q49: ["", "", "Madison", ""],
    q50: ["Cheyenne", "", "", ""],
    q51: ["Washington DC", "", "", ""],
};


// let answer = document.querySelector('#capital')
// answer.innerHTML = "submit"


/*if(inputAnswer.value === statesAndTheirCapitals[0].capital){
    alert('You Got the right answer!')
}
console.log(answer);

const button = document.querySelector('.js-button')

submit.addEventListener('click', function () {
    // score = score + 1
    alert("You have submitted an answer!")
})


nextQuestion: function() {
    for (q = 0; q < 51; q++);
        if 
}



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

// button.addEventListener('click', () => {
    // score++

    /*  if (score  {
          score.innerText = score
      } else {
          declareScore()
      
      }
       */
// });
 
