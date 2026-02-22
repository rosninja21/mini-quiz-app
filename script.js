let questionContainer = document.querySelector("#question-container");
let optionsContainer = document.querySelector("#options-container");
let nextBtn = document.querySelector("#next-button");
let startBtn=document.querySelector("#start-button");
let footerP=document.querySelector("footer");



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

let currentQuestionIndex= 0;





startBtn.addEventListener("click", function () {
  questionContainer.innerHTML = "";
  optionsContainer.innerHTML = "";

  LoadQuestion();
    startBtn.style.display="none";
    footerP.style.display="none";

});


function LoadQuestion() {
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

// MY NOOBIE CODE

//   let questions = document.createElement("div");
//   questions.textContent = "Question 1: What is the capital of France?";
//   questionContainer.appendChild(questions);

//   let options = ["A.Berlin", "B.Madrid", "C.Paris", "D.Rome"];

//   for (let i = 0; i < options.length; i++) {
//     let option = document.createElement("button");
//     option.textContent = options[i];
//     optionsContainer.appendChild(option);


//     option.addEventListener("click", function(){
//       if(i==2){
//         let result = document.createElement("div");
//         result.textContent = "Correct!";
//         optionsContainer.appendChild(result);

//         let nextBtn = document.createElement("button");
//         nextBtn.textContent = "Next";
//         optionsContainer.appendChild(nextBtn);

//         nextBtn.addEventListener("click", function(){
//           questionContainer.innerHTML="";
//           optionsContainer.innerHTML="";

//           LoadQuestion();
//         })


//       }else{
//         let result = document.createElement("div");
//       result.textContent = "Wrong!";
//       optionsContainer.appendChild(result);

//       let tryBtn=document.createElement("button");
//       tryBtn.textContent="Try Again";
//       optionsContainer.appendChild(tryBtn);

//       tryBtn.addEventListener("click", function(){
//         questionContainer.innerHTML= "";
//         optionsContainer.innerHTML="";

//         LoadQuestion();
//       })



//       }
//     })
//   }
  

  
  
// }