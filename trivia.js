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
  { state: "Alabama", capital: "Montgomery", optionsKey: "q1" },
  { state: "Alaska", capital: "Juneau", optionsKey: "q2" },
  { state: "Arizona", capital: "Phoenix", optionsKey: "q3" },
  { state: "Arkansas", capital: "Little Rock", optionsKey: "q4" },
  { state: "California", capital: "Sacramento", optionsKey: "q3" },
  { state: "Colorado", capital: "Denver", optionsKey: "q3" },
  { state: "Connecticut", capital: "Hartford", optionsKey: "q3" },
  { state: "Delaware", capital: "Dover", optionsKey: "q3" },
  { state: "Florida", capital: "Tallahassee", optionsKey: "q3" },
  { state: "Georgia", capital: "Atlanta", optionsKey: "q3" },
  { state: "Hawaii", capital: "Honolulu", optionsKey: "q3" },
  { state: "Idaho", capital: "Boise", optionsKey: "q3" },
  { state: "Illinois", capital: "Springfield", optionsKey: "q3" },
  { state: "Indiana", capital: "Indianapolis", optionsKey: "q3" },
  { state: "Iowa", capital: "Des Moines", optionsKey: "q3" },
  { state: "Kansas", capital: "Topeka", optionsKey: "q3" },
  { state: "Kentucky", capital: "Frankfort", optionsKey: "q3" },
  { state: "Louisiana", capital: "Baton Rouge", optionsKey: "q3" },
  { state: "Maine", capital: "Augusta", optionsKey: "q3" },
  { state: "Maryland", capital: "Annapolis", optionsKey: "q3" },
  { state: "Massachusetts", capital: "Boston", optionsKey: "q3" },
  { state: "Michigan", capital: "Lansing", optionsKey: "q3" },
  { state: "Minnesota", capital: "St. Paul", optionsKey: "q3" },
  { state: "Mississippi", capital: "Jackson", optionsKey: "q3" },
  { state: "Missouri", capital: "Jefferson City", optionsKey: "q3" },
  { state: "Montana", capital: "Helena", optionsKey: "q3" },
  { state: "Nebraska", capital: "Lincoln", optionsKey: "q3" },
  { state: "Nevada", capital: "Carson City", optionsKey: "q3" },
  { state: "New Hampshire", capital: "Concord", optionsKey: "q3" },
  { state: "New Jersey", capital: "Trenton", optionsKey: "q3" },
  { state: "New Mexico", capital: "Santa Fe", optionsKey: "q3" },
  { state: "New York", capital: "Albany", optionsKey: "q3" },
  { state: "North Carolina", capital: "Raleigh", optionsKey: "q3" },
  { state: "North Dakota", capital: "Bismarck", optionsKey: "q3" },
  { state: "Ohio", capital: "Columbus", optionsKey: "q3" },
  { state: "Oklahoma", capital: "Oklahoma City", optionsKey: "q3" },
  { state: "Oregon", capital: "Salem", optionsKey: "q3" },
  { state: "Pennsylvania", capital: "Harrisburg", optionsKey: "q3" },
  { state: "Rhode Island", capital: "	Providence", optionsKey: "q3" },
  { state: "South Carolina", capital: "Columbia", optionsKey: "q3" },
  { state: "South Dakota", capital: "Pierre", optionsKey: "q3" },
  { state: "Tennessee", capital: "Nashville", optionsKey: "q3" },
  { state: "Texas", capital: "Austin", optionsKey: "q3" },
  { state: "Utah", capital: "Salt Lake City", optionsKey: "q3" },
  { state: "Vermont", capital: "Montpelier", optionsKey: "q3" },
  { state: "Virginia", capital: "Richmond", optionsKey: "q3" },
  { state: "Washington", capital: "Olympia", optionsKey: "q3" },
  { state: "West Virginia", capital: "Charleston", optionsKey: "q3" },
  { state: "Wisconsin", capital: "Madison", optionsKey: "q3" },
  { state: "Wyoming", capital: "Cheyenne", optionsKey: "q3" }
];

let questionIndex = 0;

let question = statesAndTheirCapitals[questionIndex].state;
console.log(question);

let grabQuestion = document.querySelector(".state");
grabQuestion.innerHTML = question;
console.log(grabQuestion);
//options.q1[2]
let options = {
  q1: ["Huntsville", "Alexander City", "Montgomery", "Adamsville"],
  q2: ["Anchorage", "Juneau", "Sitka", "Fairbanks"],
  q3: ["Bisbee", "Clifton", "Colorado City", "Phoenix"],
  q4: ["Little Rock", "Fort Smith", "North Little Rock", "Fayetteville"],
  q5: ["Los Angeles", "Sacramento", "Fresno", "San Francisco"],
  q6: ["Colorado Springs", "Leadville", "Georgetown", "Denver"],
  q7: ["Hartford", "New Have", "Stamford", "Greenwich"],
  q8: ["Dover", "New Castle", "Newark", "Wilmington"],
  q9: ["Miami", "Jacksonville", "Tallahassee", "Orlando"],
  q10: ["Columbus", "Atlanta", "Savannah", "Marietta"],
  q11: ["Honolulu", "Kailua", "Kapolei", "Lahaina"],
  q12: ["Coeur d'Alene", "Twin Falls", "Pocatello", "Boise"],
  q13: ["Chicago", "Springfield", "Rockford", "Naperville"],
  q14: ["Bloomigton", "Indianapolis", "Evansville", "Lafayette"],
  q15: ["Des Moines", "Cedar Rapids", "Waterloo", "Davenport"],
  q16: ["Wichita", "Lawrence", "Hatchinson", "Topeka"],
  q17: ["Louisville", "Lexington", "Frankfort", "Paducah"],
  q18: ["Baton Rouge", "New Orleans", "Shreveport", "Metairie"],
  q19: ["Lewiston", "Portland", "Augusta", "South Portland"],
  q20: ["Bethesda", "Annapolis", "Annapolisville", "Columbia"],
  q21: ["Cambrigde", "Springfield", "Worcester", "Boston"],
  q22: ["Detroit", "Lansing", "Ann Arbor", "Flint"],
  q23: ["Minneapolis", "Saint Paul", "Duluth", "Saint Cloud"],
  q24: ["Jackson", "Tupelo", "Bismarck", "Hattlesburg"],
  q25: ["Kansas City", "Springfield", "Jefferson City", "Branson"],
  q26: ["Missoula", "Helena", "Billings", "Bozeman"],
  q27: ["Kearney", "Omaha", "North Platte", "Lincoln"],
  q28: ["Las Vegas", "Carson City", "LAs Vegas Valley", "Henderson"],
  q29: ["Nashua", "Concord", "Portsmouth", "Keene"],
  q30: ["Princeton", "Trenton", "Paterson", "Hackensack"],
  q31: ["Albuquerque", "Deming", "Roswell", "Santa Fe"],
  q32: ["Syracuse", "Buffalo", "Albany", "Rochester"],
  q33: ["Raleigh", "Chapel Hill", "Salem", "Greensboro"],
  q34: ["Fargo", "Grand Forks", "Bismarck", "Williston"],
  q35: ["Columbus", "Cleveland", "Dayton", "Cincinnati"],
  q36: ["Oklahoma City", "Tulsa", "Enid", "Lawton"],
  q37: ["Salem", "Portland", "Beaverton", "Medford"],
  q38: ["Philadelphia", "Pittsburg", "Harrisburg", "Harrison"],
  q39: ["Warwick", "Providence", "Cranston", "Cumberland"],
  q40: ["Columbia", "Charleston", "Greenville", "Beaufort"],
  q41: ["Aberdeen", "Brookings", "Pierre", "Yankton"],
  q42: ["Memphis", "Nashville", "Gatlinburg", "Chattanooga"],
  q43: ["Houston", "Austin", "San Antonio", "Dallas"],
  q44: ["Salt Lake City", "Saint George", "Ogden", "Murray"],
  q45: ["Burlington", "Middlebury", "Bennington", "Montpelie"],
  q46: ["Roanoke", "Norfolk", "Richmond", "Charlotsville"],
  q47: ["Seattle", "Olympia", "Tacoma", "Spokane"],
  q48: ["Huntington", "Beckley", "Fairmont", "Charleston"],
  q49: ["Milwaukee", "Appleton", "Madison", "Green Bay"],
  q50: ["Cheyenne", "Lamarie", "Gillette", "Casper"]
};

for (var i = 0; i < options.q1.length; i++) {
  var myOption = document.createElement("div");
  myOption.innerHTML = options.q1[i];
  console.log(myOption);
  myOption.classList.add("options");
  var myOptions = document.querySelector(".answer-options");
  myOptions.appendChild(myOption);
  console.log(myOptions);
}
addEventListeners();
//iterate through elements of questionsArray
//each element can be referred to as "this"

//for (i = 0; i < questionsArray.length; i++){
//  let currentQuestion = questionsArray[i]
//  on page, print currentQuestion[0] (the state)
//  print currentQuestion[1-4] (the answers)
//  check if the index of the user's answer matches currentQuestion[5]
//}

// let questionsArray = {
// q1: ["Alabama","City1","City2","Montgomery","City4",3]
//}

//q1[0]
//q[1]q[2]q[3]q[4]
//1

//1 === 3
//true -> yay, give points
//false -> nooooooo :(

let answers = {
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
  q21: "Boston",
  q22: "Lansing",
  q23: "Saint Paul",
  q24: "Jackson",
  q25: "Jefferson City",
  q26: "Helena",
  q27: "Lincoln",
  q28: "Carson City",
  q29: "Concord",
  q30: "Trenton",
  q31: "Santa Fe",
  q32: "Albany",
  q33: "Raleigh",
  q34: "Bismarck",
  q35: "Columbus",
  q36: "Oklahoma City",
  q37: "Salem",
  q38: "Harrisburg",
  q39: "Providence",
  q40: "Columbia",
  q41: "Pierre",
  q42: "Nashville",
  q43: "Austin",
  q44: "Salt Lake City",
  q45: "Montpelie",
  q46: "Richmond",
  q47: "Olympia",
  q48: "Charleston",
  q49: "Madison",
  q50: "Cheyenne"
};

let answer = statesAndTheirCapitals[questionIndex].capital;
console.log(answers);

let grabAnswers = document.querySelector(".capital");

function addEventListeners() {
  document.querySelectorAll(".options").forEach(option => {
    option.addEventListener("click", function(evt) {
      const selection = evt.target.innerText;
      //   console.log(selection);
      //   console.log(
      //     `Is this the correct answer: ${selection ===
      //       statesAndTheirCapitals[0].capital}`
      //   );
      console.log(statesAndTheirCapitals[questionIndex].capital);
      alert(
        `Is this the correct answer: ${selection ===
          statesAndTheirCapitals[questionIndex].capital}`
      );
      if (selection === statesAndTheirCapitals[questionIndex].capital) {
        //grabs next question's index of questions array
        questionIndex++;

        //change question and answer options in application
        nextQuestion(questionIndex);
      }
    });
  });
}

function nextQuestion(index) {
  // Changes State Name in question
  let stateName = statesAndTheirCapitals[index].state;
  console.log(stateName);

  let grabQuestion = document.querySelector(".state");
  grabQuestion.innerHTML = stateName;

  // Clear Potential Captial Options
  document.querySelector(".answer-options").innerHTML = "";
  // Change State Capital Options
  let optionsKey = statesAndTheirCapitals[index].optionsKey;
  for (var i = 0; i < options[optionsKey].length; i++) {
    var myOption = document.createElement("div");
    myOption.innerHTML = options[optionsKey][i];
    myOption.classList.add("options");
    console.log(myOption);
    var myOptions = document.querySelector(".answer-options");
    myOptions.appendChild(myOption);
    console.log(myOptions);
  }

  addEventListeners();
}
// grabAnswers.innerHTML = answers
// console.log("The correct answer is"+ ""+ grabCapital);

// for (let q = 1; q < options.length; q++);

// for (let q = 1; q < answers.length; q++);

/*
let create a variable that is "q" + i
options.variable
answers.variable
*/

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
