// =======================================
// VIATEURLEARN QUIZ SYSTEM
// =======================================



const quizQuestions = [

{
question:
"What does HTML stand for?",

options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language",
"Hyperlink Text Management Language"
],

answer:0

},



{
question:
"Which language is used for web styling?",

options:[
"Python",
"CSS",
"Java",
"SQL"
],

answer:1

},




{
question:
"Which keyword creates a variable in JavaScript?",

options:[
"var",
"print",
"define",
"create"
],

answer:0

},





{
question:
"Python is mainly used for?",

options:[
"Artificial Intelligence",
"Painting",
"Video Editing",
"Hardware Repair"
],

answer:0

},





{
question:
"Firebase is a service from which company?",

options:[
"Microsoft",
"Google",
"Apple",
"Amazon"
],

answer:1

}

];







let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let time = 60;

let timer;







// =======================================
// LOAD QUIZ
// =======================================


function loadQuestion(){



let questionBox =
document.getElementById(
"question"
);



let optionsBox =
document.getElementById(
"options"
);




if(!questionBox)return;





let q =
quizQuestions[currentQuestion];





questionBox.innerHTML =
`
<h2>
Question ${currentQuestion+1}/${quizQuestions.length}
</h2>

<p>
${q.question}
</p>
`;





optionsBox.innerHTML="";





q.options.forEach(
(option,index)=>{


optionsBox.innerHTML += `

<button 
class="option"
onclick="selectAnswer(${index})">

${option}

</button>

`;



});



}










// =======================================
// SELECT ANSWER
// =======================================



function selectAnswer(index){


selectedAnswer=index;



document.querySelectorAll(
".option"
)
.forEach(btn=>{

btn.style.background="#e2e8f0";

});



event.target.style.background="#2563eb";
event.target.style.color="white";


}









// =======================================
// NEXT QUESTION
// =======================================


function nextQuestion(){



if(selectedAnswer===null){

alert(
"Select an answer"
);

return;

}




if(
selectedAnswer ===
quizQuestions[currentQuestion].answer

){

score++;

}





currentQuestion++;

selectedAnswer=null;




if(
currentQuestion <
quizQuestions.length

){


loadQuestion();


}

else{


finishQuiz();


}


}










// =======================================
// FINISH QUIZ
// =======================================



function finishQuiz(){



clearInterval(timer);





let percentage =

Math.round(

(score /
quizQuestions.length)
*100

);





localStorage.setItem(

"quizResult",

JSON.stringify({

score:score,

percentage:percentage,

date:
new Date()
.toLocaleDateString()

})

);







document.getElementById(
"quizBox"
).innerHTML = `


<h1>
🎉 Quiz Completed
</h1>


<h2>

Score:
${score}/${quizQuestions.length}

</h2>



<h2>

${percentage}%

</h2>



<p>

${
percentage >=70

?

"Congratulations! You passed 🎓"

:

"Try again to improve your score"

}

</p>


`;




}









// =======================================
// TIMER
// =======================================



function startTimer(){



time=60;



timer=setInterval(()=>{


time--;



let timerBox =
document.getElementById(
"timer"
);



if(timerBox){

timerBox.innerHTML =
"⏱ "+time+" seconds";

}




if(time<=0){


finishQuiz();


}



},1000);



}










// =======================================
// LOAD START
// =======================================


document.addEventListener(

"DOMContentLoaded",

()=>{


loadQuestion();

startTimer();


}

);



console.log(
"📝 VIATEURLEARN Quiz Loaded"
);
