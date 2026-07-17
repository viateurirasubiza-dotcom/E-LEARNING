// =======================================
// VIATEURLEARN ADMIN DASHBOARD SYSTEM
// =======================================



import {

db

}

from "./firebase.js";



import {

collection,
getDocs,
deleteDoc,
doc,
addDoc

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";







// =======================================
// ADMIN CHECK
// =======================================


function checkAdmin(){


let user =

JSON.parse(

localStorage.getItem(
"currentUser"

)

);




if(!user || user.role !== "admin"){


alert(
"Access denied 🚫"
);


window.location.href =
"login.html";


return false;


}


return true;


}









// =======================================
// LOAD STATISTICS
// =======================================



async function loadAdminStats(){



if(!checkAdmin())return;





let users =

await getDocs(

collection(
db,
"users"

)

);





let courses =

await getDocs(

collection(
db,
"courses"

)

);





let students=0;

let teachers=0;





users.forEach(user=>{


let data=user.data();



if(data.role==="student"){

students++;

}


if(data.role==="teacher"){

teachers++;

}



});







document.getElementById(
"totalStudents"
).innerHTML =
students;




document.getElementById(
"totalTeachers"
).innerHTML =
teachers;




document.getElementById(
"totalCourses"
).innerHTML =
courses.size;



}









// =======================================
// LOAD COURSES
// =======================================



async function loadAdminCourses(){



let box =

document.getElementById(
"adminCourses"
);





box.innerHTML="";





const snapshot =

await getDocs(

collection(
db,
"courses"

)

);






snapshot.forEach(course=>{


let data =
course.data();




box.innerHTML += `


<div class="admin-course">


<h3>

${data.title}

</h3>



<p>

${data.description}

</p>



<button onclick="deleteCourse('${course.id}')">

Delete 🗑️

</button>



</div>


`;



});



}









// =======================================
// DELETE COURSE
// =======================================



async function deleteCourse(id){



let confirmDelete =

confirm(
"Delete this course?"
);





if(!confirmDelete)return;





await deleteDoc(

doc(
db,
"courses",
id

)

);






alert(
"Course deleted successfully"
);





loadAdminCourses();



}









// =======================================
// SEND ANNOUNCEMENT
// =======================================



async function sendAnnouncement(){



let title =

document.getElementById(
"announcementTitle"
).value;





let message =

document.getElementById(
"announcementMessage"
).value;







await addDoc(

collection(
db,
"notifications"

),

{


title:title,


message:message,


date:
new Date()


}

);






alert(
"Announcement sent 🚀"
);



}










// =======================================
// LOAD USERS
// =======================================



async function loadUsers(){



let table =

document.getElementById(
"userTable"
);





table.innerHTML="";





const snapshot =

await getDocs(

collection(
db,
"users"

)

);





snapshot.forEach(user=>{


let data=user.data();




table.innerHTML += `


<tr>


<td>

${data.name}

</td>


<td>

${data.email}

</td>



<td>

${data.role}

</td>



</tr>


`;



});



}









// AUTO START


document.addEventListener(

"DOMContentLoaded",

()=>{


loadAdminStats();

loadAdminCourses();

loadUsers();


}

);





console.log(
"👑 VIATEURLEARN Admin System Loaded"
);
