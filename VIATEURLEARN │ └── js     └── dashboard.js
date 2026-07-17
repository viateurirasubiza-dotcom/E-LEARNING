//
// =======================================
// VIATEURLEARN DASHBOARD SYSTEM
// =======================================
//




// ===============================
// LOAD USER DATA
// ===============================


function loadUserDashboard(){



let user =

JSON.parse(

localStorage.getItem(
"currentUser"

)

);





if(!user){

window.location.href =
"login.html";

return;

}






let name =

document.getElementById(
"userName"
);




let role =

document.getElementById(
"userRole"
);





if(name){

name.innerHTML =
user.name;

}




if(role){

role.innerHTML =
user.role
.toUpperCase();

}




}









// ===============================
// STUDENT DASHBOARD
// ===============================



function loadStudentDashboard(){



let courses =

JSON.parse(

localStorage.getItem(
"enrolledCourses"

)

)
||
[];





let result =

JSON.parse(

localStorage.getItem(
"quizResult"

)

)
||
null;





let certificates =

JSON.parse(

localStorage.getItem(
"certificates"

)

)
||
[];







let courseCount =

document.getElementById(
"courseCount"
);



let certificateCount =

document.getElementById(
"certificateCount"
);





let score =

document.getElementById(
"score"
);






if(courseCount){

courseCount.innerHTML =
courses.length;

}



if(certificateCount){

certificateCount.innerHTML =
certificates.length;

}




if(score){

score.innerHTML =

result ?

result.percentage+"%"

:

"0%";

}





displayMyCourses(courses);



}









// ===============================
// SHOW MY COURSES
// ===============================



function displayMyCourses(courses){



let box =

document.getElementById(
"myCourses"
);




if(!box)return;





box.innerHTML="";






if(courses.length===0){


box.innerHTML=

`

<p>
You have no courses yet.
</p>

`;

return;

}





courses.forEach(course=>{


box.innerHTML +=

`

<div class="course-card">


<h3>

${course.title}

</h3>


<p>

👨‍🏫 ${course.teacher}

</p>


<p>

⭐ ${course.rating}

</p>



<button onclick="continueCourse(${course.id})">

Continue Learning

</button>


</div>


`;


});



}









// ===============================
// CONTINUE COURSE
// ===============================


function continueCourse(id){



localStorage.setItem(

"currentCourse",

id

);




window.location.href =
"lesson.html";



}










// ===============================
// TEACHER DASHBOARD
// ===============================



function loadTeacherDashboard(){



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







let courseNumber =

document.getElementById(
"teacherCourses"
);




let studentNumber =

document.getElementById(
"studentNumber"
);






if(courseNumber){

courseNumber.innerHTML =
courses.length;

}




if(studentNumber){

studentNumber.innerHTML =
students.length;

}




}










// ===============================
// SAVE COURSE
// ===============================



function saveCourse(){



let title =

document.getElementById(
"courseTitle"
).value;




let description =

document.getElementById(
"courseDescription"
).value;






let courses =

JSON.parse(

localStorage.getItem(
"teacherCourses"

)

)
||
[];







courses.push({


id:Date.now(),


title:title,


description:description,


date:

new Date()
.toLocaleDateString()


});






localStorage.setItem(

"teacherCourses",

JSON.stringify(courses)

);






showMessage(

"Course created successfully 🚀"

);





}









// ===============================
// LOGOUT
// ===============================


function logoutUser(){


localStorage.removeItem(
"currentUser"
);



window.location.href =
"login.html";


}










// ===============================
// AUTO LOAD
// ===============================



document.addEventListener(

"DOMContentLoaded",

()=>{


loadUserDashboard();



if(
document.body
.classList.contains(
"student-page"
)

){

loadStudentDashboard();


}




if(
document.body
.classList.contains(
"teacher-page"
)

){

loadTeacherDashboard();


}



}

);





console.log(
"🎓 VIATEURLEARN Dashboard Loaded"
);
