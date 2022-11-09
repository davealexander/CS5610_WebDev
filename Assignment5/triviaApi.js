// const { response } = require("express");
//Global Variables
const url = 'http://jservice.io/api/random'
var points = 0;
var strikes = 0;

// ## FETCH API SETUP ## //

//Fetch function to grab question and title of subject
async function getQuestion(){
    response = await fetch(url);
    data = await response.json();
    updateQuestionBox(data[0].category.title, data[0].question);
}

//Updates HTML with title and question text from the fetch of the API
function updateQuestionBox(title,question){
    //Stores values from the JSON object
    const titleNode =  document.createElement("h2");
    const titleText =  document.createTextNode(title.toUpperCase());
    const questionNode = document.createElement("h3");
    const questionText =  document.createTextNode(question);
    
    //assign ids to title and question 
    titleNode.setAttribute("id","titleValue")
    questionNode.setAttribute("id","questionValue")

    //Appends the HTML with the text received from the API
    titleNode.appendChild(titleText);
    questionNode.appendChild(questionText);

    //Targets spot in HTML to append text from API
    document.getElementById("questionTitle").appendChild(titleNode);
    document.getElementById("questionData").appendChild(questionNode);
}

//Grabs the next question and then updates the HTML with the new question
async function nextQuestion(){
    response = await fetch(url);
    data = await response.json();
    document.getElementById("titleValue").textContent = data[0].category.title;
    document.getElementById("questionValue").textContent = data[0].question;   
}

// ## POINT HANDLERS ## //

//Creates the point node with an id of pointValue
function createPoints(){
    const pointsNode =  document.createElement("p");
    pointsNode.setAttribute("id","pointValue")
    const pointsText = document.createTextNode(points);
    
    pointsNode.appendChild(pointsText)
    
    document.getElementById("pointsSection").appendChild(pointsNode);
}

//updates the DOM with points
function updatePoints(){
    points += 100;
    document.getElementById("pointValue").textContent = points;
}
// updates the DOM by subtracting points
function subtractPoints(){
    points -= 100;
    document.getElementById("pointValue").textContent = points;
}

// ## STRIKE HANDLERS ## //

//Creates a strikeNode that shows the amount of strikes a user has
function createStrikes(){
    const strikeNode =  document.createElement("p");
    strikeNode.setAttribute("id","strikeValue")
    const strikeText = document.createTextNode(strikes);
    
    strikeNode.appendChild(strikeText)
    
    document.getElementById("strikeHeader").appendChild(strikeNode);
}

// updates the DOM by adding points to the strike counter when an answer is answered incorrectly. 
function strikeCounter(){
    strikes++;
    document.getElementById("strikeValue").textContent = strikes;

}

// ## GAME LOGIC ## //

// checks and alerts the player if they won or loss the trivia game
function checkWinLoss(){
    if(points == 500){
        alert("Congratulations you win!");
        document.location.reload();
    }
    else if(strikes === 3){
        alert("Three strikes you're out");
        document.location.reload();
    }
}

//checks the answer from user input and compares the answer from the API
function checkAnswer(){
    //store user answer
    userAnswer = document.getElementById("userAnswer").value;
    questionAnswer = data[0].answer;
    sanitizedAnswer = questionAnswer.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')

    
    if(userAnswer.toLowerCase() == sanitizedAnswer.toLowerCase()){
        updatePoints();
        nextQuestion();
        checkWinLoss();
    }
    else{
        subtractPoints();
        strikeCounter();
        checkWinLoss();
    }
}

//INITIALIZE TRIVIA CONTENT

getQuestion();
createPoints();
createStrikes();

