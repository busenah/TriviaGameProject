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

/*let statesAndTheirCapitals = [
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
  { state: "Wyoming", capital: "Cheyenne" }
];

let questionIndex = 0;

let question = statesAndTheirCapitals[questionIndex].state;
console.log(question);

let grabQuestion = document.querySelector(".state");
grabQuestion.innerHTML = question;
console.log(grabQuestion);
//options.q1[2]

*/

/*

let options = {
  q1: [
    "Alabama",
    "Huntsville",
    "Alexander City",
    "Montgomery",
    "Adamsville",
    3
  ],
  q2: ["Alaska", "Anchorage", "Juneau", "Sitka", "Fairbanks", 2],

  q3: ["Arizona", "Bisbee", "Clifton", "Colorado City", "Phoenix", 4],

  q4: [
    "Arkansas",
    "Little Rock",
    "Fort Smith",
    "North Little Rock",
    "Fayetteville",
    1
  ],

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
  var myOptions = document.querySelector(".options");
  myOptions.appendChild(myOption);
  console.log(myOptions);
}

*/

//iterate through elements of questionsObj
//each element can be referred to as "this"

for (i = 0; i < questionsObj.length; i++){
 let (currentQuestion = questionsObj[i])
 console.log(currentQuestion[0].state)
 print currentQuestion[1-4] (the answers)
 check if the index of the user's answer matches currentQuestion[5]
}

let questionsObj = {
q1: ["Alabama","City1","City2","Montgomery","City4",3],
  q2: ["Alaska", "Anchorage", "Juneau", "Sitka", "Fairbanks", 2],

  q3: ["Arizona", "Bisbee", "Clifton", "Colorado City", "Phoenix", 4],

  q4: [
    "Arkansas",
    "Little Rock",
    "Fort Smith",
    "North Little Rock",
    "Fayetteville",
    1
  ],
}

q1[0]
q[1]q[2]q[3]q[4]
1

1 === 3
true -> yay, give points
false -> nooooooo :(

/*let answers = {
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

document.querySelector(".options").addEventListener("click", function(evt) {
  const selection = evt.target.innerText;
  //   console.log(selection);
  //   console.log(
  //     `Is this the correct answer: ${selection ===
  //       statesAndTheirCapitals[0].capital}`
  //   );
  alert(
    `Is this the correct answer: ${selection ===
      statesAndTheirCapitals[questionIndex].capital}`
  );
  questionIndex++;
});
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
