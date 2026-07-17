// =======================================
// VIATEURLEARN ANALYTICS SYSTEM
// =======================================



// =======================================
// STUDENT ANALYTICS
// =======================================


function getStudentAnalytics(){



let courses =

JSON.parse(

localStorage.getItem(
"enrolledCourses"

)

)
||
[];




let completed =

JSON.parse(

localStorage.getItem(
"completedLessons"

)

)
||
[];





let results =

JSON.parse(

localStorage.getItem(
"quizResult"

)

)
||
null;






let data = {



totalCourses:

courses.length,



completedLessons:

completed.length,



quizScore:

results ?

results.percentage

:

0,



completionRate:

courses.length > 0 ?

Math.round(

(completed.length /
courses.length)
*
100

)

:

0



};





return data;


}









// =======================================
// DISPLAY STUDENT ANALYTICS
// =======================================


function showStudentAnalytics(){



let data =
getStudentAnalytics();






let courseBox =

document.getElementById(
"analyticsCourses"
);



let lessonBox =

document.getElementById(
"analyticsLessons"
);



let scoreBox =

document.getElementById(
"analyticsScore"
);





if(courseBox)

courseBox.innerHTML =
data.totalCourses;




if(lessonBox)

lessonBox.innerHTML =
data.completedLessons;




if(scoreBox)

scoreBox.innerHTML =
data.quizScore+"%";



}









// =======================================
// TEACHER ANALYTICS
// =======================================



function getTeacherAnalytics(){



let courses =

JSON.parse(

localStorage.getItem(
"teacherCourses"

)

)
||
[];




let students =

JSON.parse(

localStorage.getItem(
"students"

)

)
||
[];






return {



courses:

courses.length,



students:

students.length



};



}









// =======================================
// ADMIN ANALYTICS
// =======================================


function getPlatformAnalytics(){



let users =

JSON.parse(

localStorage.getItem(
"users"

)

)
||
[];




let courses =

JSON.parse(

localStorage.getItem(
"courses"

)

)
||
[];




let payments =

JSON.parse(

localStorage.getItem(
"payments"

)

)
||
[];








return {



users:

users.length,



courses:

courses.length,



payments:

payments.length



};



}









// =======================================
// CHART DATA
// =======================================


function createLearningChart(){



let canvas =

document.getElementById(
"learningChart"
);





if(!canvas)return;






new Chart(

canvas,

{


type:"doughnut",


data:{


labels:[

"Completed",

"Remaining"

],


datasets:[

{

data:[

70,

30

]


}

]


}



}

);



}









// =======================================
// SAVE ACTIVITY
// =======================================


function saveActivity(action){



let activities =

JSON.parse(

localStorage.getItem(
"activities"

)

)
||
[];






activities.push({


action:action,


date:

new Date()
.toLocaleString()



});






localStorage.setItem(

"activities",

JSON.stringify(activities)

);



}









document.addEventListener(

"DOMContentLoaded",

()=>{


showStudentAnalytics();

createLearningChart();


}

);





console.log(
"📊 VIATEURLEARN Analytics Loaded"
);
