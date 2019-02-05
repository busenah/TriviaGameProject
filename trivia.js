/*  
create a container for the Question 
create a container for State
create a container for the capital

*/

let states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas","Kentucky", "Louisiana", "Maine", 
    "Maryland", "Massachusetts", "Michigan","Minnesota", "Mississippi" ]


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