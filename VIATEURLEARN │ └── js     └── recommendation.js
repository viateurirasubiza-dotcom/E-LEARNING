// =======================================
// VIATEURLEARN AI RECOMMENDATION SYSTEM
// =======================================



// Course Data
const recommendationCourses = [


{
id:1,
title:"Full Stack Web Development",
category:"Programming",
level:"Beginner",
students:1500
},


{
id:2,
title:"Python Programming",
category:"Programming",
level:"Intermediate",
students:900
},


{
id:3,
title:"Artificial Intelligence",
category:"AI",
level:"Advanced",
students:700
},


{
id:4,
title:"Mathematics Master Class",
category:"Mathematics",
level:"Beginner",
students:500
},


{
id:5,
title:"Computer Systems",
category:"Computer Science",
level:"Intermediate",
students:400
}


];







// =======================================
// GET USER INTEREST
// =======================================


function getUserPreference(){



let history =

JSON.parse(

localStorage.getItem(
"learningHistory"

)

)
||
[];





if(history.length===0){


return "Programming";


}





return history[0].category;



}









// =======================================
// GENERATE RECOMMENDATIONS
// =======================================



function generateRecommendations(){



let category =

getUserPreference();





let recommended =



recommendationCourses.filter(

course =>

course.category===category

);





if(recommended.length===0){


recommended =
recommendationCourses;


}






displayRecommendations(
recommended
);



}









// =======================================
// DISPLAY RECOMMENDATIONS
// =======================================



function displayRecommendations(data){



let box =

document.getElementById(
"recommendations"
);





if(!box)return;





box.innerHTML="";






data.forEach(course=>{


box.innerHTML += `


<div class="recommend-card">


<h3>

${course.title}

</h3>



<p>

📚 ${course.category}

</p>



<p>

👨‍🎓 ${course.students} Students

</p>



<button onclick="startRecommendedCourse(${course.id})">

Start Learning 🚀

</button>



</div>


`;



});



}









// =======================================
// SAVE LEARNING HISTORY
// =======================================



function saveLearningHistory(course){



let history =

JSON.parse(

localStorage.getItem(
"learningHistory"

)

)
||
[];





history.unshift(course);





localStorage.setItem(

"learningHistory",

JSON.stringify(history)

);



}









// =======================================
// POPULAR COURSES
// =======================================



function popularCourses(){



let sorted =

[...recommendationCourses]

.sort(

(a,b)=>

b.students-a.students

);





displayRecommendations(
sorted.slice(0,3)
);



}









// =======================================
// OPEN COURSE
// =======================================


function startRecommendedCourse(id){



localStorage.setItem(

"currentCourse",

id

);





window.location.href=

"course-details.html";


}








document.addEventListener(

"DOMContentLoaded",

()=>{


generateRecommendations();


}

);





console.log(
"🤖 VIATEURLEARN AI Recommendation Loaded"
);
