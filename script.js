// I'll explain briefly what I did here as much as I can

// Declared and stored all the necessary elements from the HTML code to be manipulated here in JS
let questionContainer = document.querySelector("#question-container"); //this line to 7 is selecting an element by id using query selector (a general selector)
let optionsContainer = document.querySelector("#options-container");
let nextBtn = document.querySelector("#next-button");
let startBtn=document.querySelector("#start-button");
let footerP=document.querySelector("footer"); //this one here is selecting a class, u can tell it cause it has nothing like a # or .


// these datas are stored in objects use in creating questions togther with its corresponding correct answers
const questions= [
  {
    text: "Which method is used to display a message in a browser popup in JavaScript?",
    options: ["console.log()", "alert()", "prompt()", "display()"],
    correctIndex: 1
  },
  {
    text: "Which CSS property is used to change text color?",
    options: ["font-color", "text-style", "color", "background-color"],
    correctIndex: 2
   },

  {
    text: "Which JavaScript keyword is used to declare a variable?",
    options: [" int","var", "define", "string"],
    correctIndex: 1
  },
  {
    text: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<hyper>"],
    correctIndex: 1
  },
  {
    text: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style System", "Cascading Style Sheets","Colorful Style Syntax"],
    correctIndex: 2
  },
  {
    text: "What does HTML stand for?",
    options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Machine Language"],
    correctIndex: 1
  },
  {
    text: "Which JavaScript method is used to select an element by its ID?",
    options: ["querySelectorAll()","getElementById()","getElementsByClass()","selectById()"], 
    correctIndex: 1
  }, 
  {
     text: "What will typeof null return in JavaScript?",
    options: [ "null", "object", "undefined", "boolean"],
    correctIndex: 1
  },
  {
    text: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "#", "//", "/* */"],
    correctIndex: 2
  },
  {
    text: "Which CSS layout system is best for one-dimensional layouts?",
    options: ["Grid","Flexbox","Float","Position"],
    correctIndex: 1
  }
]; 

// para ni nga makuha kung unsay current nga index sa question gamiton ni to display the question number para di na mano2 nga magbutang ug 1-100  nga mga numbers if taman 100 ang questions
let currentQuestionIndex= 0;




// this will lead you to the first question as long as it is triggered
startBtn.addEventListener("click", function () {

  // this is clears the innerHTML before loading the questions
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";
  
// then  this function will display the question and its options
  LoadQuestion();

  // these will remove start button and other contents like the footer
    startBtn.style.display="none";
    footerP.style.display="none";

});

// this function is made to handle the bigger task and will be called inside the start button event listener.
function LoadQuestion() {
  // clears html
  questionContainer.innerHTML="";
  optionsContainer.innerHTML="";

  
  const currentQuestion=questions[currentQuestionIndex];
  
  const questionDiv=document.createElement("div");
  questionDiv.textContent= `Question ${currentQuestionIndex + 1}: ${currentQuestion.text}`;
  questionContainer.appendChild(questionDiv);

  for(let i=0; i<currentQuestion.options.length; i++){
    const button=document.createElement("button");
    button.textContent=currentQuestion.options[i];
    optionsContainer.appendChild(button);


    button.addEventListener("click", function (){

        const oldResult = optionsContainer.querySelector(".result");
if (oldResult) oldResult.remove();

const oldActionBtn = optionsContainer.querySelector(".action-btn");
if (oldActionBtn) oldActionBtn.remove();

      if( i==currentQuestion.correctIndex){
        showResult(true);

          const nextBtn= document.createElement("button");
           nextBtn.textContent="Next";
           nextBtn.style.backgroundColor="green";
           nextBtn.style.color="white"; 
           nextBtn.classList.add("action-btn");
           optionsContainer.appendChild(nextBtn);

      nextBtn.addEventListener("click", function(){
       currentQuestionIndex++;
       

       

    if(currentQuestionIndex < questions.length){
      LoadQuestion();
    }else{
      questionContainer.innerHTML="";
      optionsContainer.innerHTML="";

      const completedDiv= document.createElement("div");
      completedDiv.textContent="Congratulations, you have completed the quiz!";
      completedDiv.style.textAlign="center";
      questionContainer.appendChild(completedDiv);


    }
    

  })


      }else{
        showResult(false);

        
  const tryBtn=document.createElement("button");
  tryBtn.textContent="Try Again";
  tryBtn.style.backgroundColor="red";
  tryBtn.style.color="white";
  tryBtn.classList.add("action-btn");
  optionsContainer.appendChild(tryBtn);

  tryBtn.addEventListener("click", function(){
    LoadQuestion();

    
  })

      }
    })
  }



function showResult(isCorrect){
  const result= document.createElement("div");
  result.textContent= isCorrect? "Correct!" : "Wrong!";
  result.classList.add("result")
  optionsContainer.appendChild(result);

}

}


