// const { response } = require("express");

const url = 'http://jservice.io/api/random'
var points = 0;


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

async function nextQuestion(){
    response = await fetch(url);
    data = await response.json();
    document.getElementById("titleValue").textContent = data[0].category.title;
    document.getElementById("questionValue").textContent = data[0].question;   
}

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

//checks the answer from user input and compares the answer from the API
function checkAnswer(){
    //store user answer
    userAnswer = document.getElementById("userAnswer").value;
    
    if(userAnswer.toLowerCase() == data[0].answer.toLowerCase()){
        updatePoints();
        nextQuestion();
    }
    else{
        subtractPoints();
    }
}

getQuestion();
createPoints()

