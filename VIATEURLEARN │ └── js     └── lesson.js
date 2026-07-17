// =======================================
// VIATEURLEARN LESSON LEARNING SYSTEM
// =======================================



import {

db

}

from "./firebase.js";



import {

collection,
getDocs,
addDoc,
query,
where

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";






// Current course

let currentCourse =
localStorage.getItem(
"currentCourse"
);





let lessons=[];

let currentLesson=0;







// =======================================
// LOAD LESSONS
// =======================================


async function loadLessons(){



let box =

document.getElementById(
"lessonList"
);




if(!box)return;





box.innerHTML="Loading lessons...";





lessons=[];





const snapshot =

await getDocs(

collection(
db,
"lessons"

)

);






snapshot.forEach(doc=>{



let data=doc.data();



if(
data.course === currentCourse

){


lessons.push({

id:doc.id,

...data

});


}



});







box.innerHTML="";






lessons.forEach((lesson,index)=>{


box.innerHTML += `


<div class="lesson-item"
onclick="openLesson(${index})">


<h3>

${index+1}. ${lesson.title}

</h3>


<p>

${lesson.description}

</p>


</div>


`;



});





if(lessons.length>0){


openLesson(0);


}



}










// =======================================
// OPEN LESSON
// =======================================



function openLesson(index){



currentLesson=index;




let lesson =
lessons[index];





if(!lesson)return;





let video =

document.getElementById(
"lessonVideo"
);




let title =

document.getElementById(
"lessonTitle"
);





let pdf =

document.getElementById(
"lessonPDF"
);






if(video){


video.src =
lesson.video;


}




if(title){


title.innerHTML =
lesson.title;


}





if(pdf){


pdf.href =
lesson.pdf;


}




}










// =======================================
// COMPLETE LESSON
// =======================================



function completeLesson(){



let completed =

JSON.parse(

localStorage.getItem(
"completedLessons"

)

)
||
[];







let lesson =
lessons[currentLesson];






if(
!completed.includes(
lesson.id

)

){


completed.push(
lesson.id
);


}







localStorage.setItem(

"completedLessons",

JSON.stringify(completed)

);






updateProgress();






showMessage(

"Lesson Completed 🎉"

);



}









// =======================================
// COURSE PROGRESS
// =======================================



function updateProgress(){



let completed =

JSON.parse(

localStorage.getItem(
"completedLessons"

)

)
||
[];





let total =
lessons.length;





let progress = 0;




if(total>0){


progress =

Math.round(

(completed.length /
total)
*
100

);


}






let bar =

document.getElementById(
"progressBar"
);




let text =

document.getElementById(
"progressText"
);






if(bar){


bar.style.width =
progress+"%";

}



if(text){


text.innerHTML =
progress+"% Completed";


}



}










// =======================================
// NEXT LESSON
// =======================================



function nextLesson(){



if(
currentLesson <
lessons.length-1

){


openLesson(
currentLesson+1
);


}

else{


alert(
"Course Completed 🎓"
);


}


}









// =======================================
// PREVIOUS LESSON
// =======================================



function previousLesson(){



if(
currentLesson>0

){


openLesson(
currentLesson-1
);


}


}










document.addEventListener(

"DOMContentLoaded",

()=>{


loadLessons();


}

);



console.log(
"📚 VIATEURLEARN Lesson System Loaded"
);
