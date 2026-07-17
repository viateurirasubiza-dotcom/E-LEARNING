//
// =======================================
// VIATEURLEARN COURSE MANAGEMENT SYSTEM
// =======================================
//



// Course Database (Temporary)
// Later tuzayihuza na Firebase


const courses = [


{
id:1,

title:"Full Stack Web Development",

category:"Programming",

teacher:"Viateur Irasubiza",

image:
"https://images.unsplash.com/photo-1498050108023-c5249f4df085",

students:1500,

rating:"4.9",

price:"Free",

description:
"Learn HTML, CSS, JavaScript and build modern websites."

},



{
id:2,

title:"Python Programming",

category:"Programming",

teacher:"VIATEURLEARN Academy",

image:
"https://images.unsplash.com/photo-1526379095098-d400fd0bf935",

students:900,

rating:"4.8",

price:"$20",

description:
"Master Python programming from beginner to advanced."

},




{
id:3,

title:"Artificial Intelligence",

category:"AI",

teacher:"AI Instructor",

image:
"https://images.unsplash.com/photo-1485827404703-89b55fcc595e",

students:700,

rating:"4.9",

price:"$30",

description:
"Learn AI, Machine Learning and modern technologies."

},





{
id:4,

title:"Mathematics Master Class",

category:"Mathematics",

teacher:"Mathematics Teacher",

image:
"https://images.unsplash.com/photo-1635070041078-e363dbe005cb",

students:500,

rating:"5.0",

price:"Free",

description:
"Improve your mathematics skills."

},





{
id:5,

title:"Computer Systems",

category:"Computer Science",

teacher:"VIATEURLEARN",

image:
"https://images.unsplash.com/photo-1518770660439-4636190af475",

students:400,

rating:"4.7",

price:"$15",

description:
"Understand computer hardware and software."

}


];









// =================================
// DISPLAY COURSES
// =================================



function loadCourses(){



let container =
document.getElementById(
"courseContainer"
);



if(!container)return;




container.innerHTML="";



courses.forEach(course=>{



container.innerHTML += `


<div class="course-card search-item">


<img src="${course.image}">



<h2>

${course.title}

</h2>


<p>
👨‍🏫 ${course.teacher}
</p>


<p>

⭐ ${course.rating}

</p>


<p>

👨‍🎓 ${course.students} Students

</p>


<p>

${course.description}

</p>


<button onclick="enrollCourse(${course.id})">

Enroll Now 🚀

</button>


</div>


`;



});


}









// =================================
// SEARCH COURSES
// =================================



function searchCourses(){



let value =

document.getElementById(
"courseSearch"
)
.value
.toLowerCase();




let cards =

document.querySelectorAll(
".course-card"
);



cards.forEach(card=>{


if(
card.innerText
.toLowerCase()
.includes(value)

){


card.style.display="block";


}

else{


card.style.display="none";


}



});



}









// =================================
// FILTER CATEGORY
// =================================



function filterCourses(category){



let cards =

document.querySelectorAll(
".course-card"
);



cards.forEach(card=>{


if(
category==="all"
||
card.innerText
.includes(category)

){


card.style.display="block";


}

else{


card.style.display="none";


}



});



}










// =================================
// ENROLL COURSE
// =================================




function enrollCourse(id){



let user =

JSON.parse(

localStorage.getItem(
"currentUser"

)

);





if(!user){


alert(
"Please login first"
);


window.location.href=
"login.html";


return;


}






let enrolled =

JSON.parse(

localStorage.getItem(
"enrolledCourses"

)

)
||
[];







let course =

courses.find(
c=>c.id===id
);






let already =

enrolled.find(

c=>
c.id===id

);






if(already){


showMessage(
"You already enrolled",
"error"
);


return;


}






enrolled.push(course);





localStorage.setItem(

"enrolledCourses",

JSON.stringify(enrolled)

);






showMessage(

"Course enrolled successfully 🎓"

);



}









// =================================
// COURSE DETAILS
// =================================



function openCourse(id){



localStorage.setItem(

"selectedCourse",

id

);



window.location.href=
"course-details.html";


}











// AUTO LOAD


document.addEventListener(

"DOMContentLoaded",

()=>{


loadCourses();


}

);





console.log(
"📚 VIATEURLEARN Courses Loaded"
);
