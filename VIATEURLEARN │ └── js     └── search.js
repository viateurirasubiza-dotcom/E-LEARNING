// =======================================
// VIATEURLEARN SMART SEARCH SYSTEM
// =======================================



// Search Database Sample
// Later tuzayihuza na Firebase


let searchData = [


{
type:"course",
title:"Full Stack Web Development",
category:"Programming",
level:"Beginner",
teacher:"Viateur Irasubiza"
},



{
type:"course",
title:"Python Programming",
category:"Programming",
level:"Intermediate",
teacher:"VIATEURLEARN Academy"
},



{
type:"course",
title:"Artificial Intelligence",
category:"AI",
level:"Advanced",
teacher:"AI Instructor"
},



{
type:"lesson",
title:"Introduction to JavaScript",
category:"Programming",
level:"Beginner",
teacher:"Viateur Irasubiza"
},



{
type:"lesson",
title:"Machine Learning Basics",
category:"AI",
level:"Advanced",
teacher:"AI Instructor"
}


];









// =======================================
// SMART SEARCH
// =======================================


function smartSearch(){


let input =

document.getElementById(
"searchInput"
);





let resultBox =

document.getElementById(
"searchResults"
);





if(!input || !resultBox)
return;





let value =

input.value
.toLowerCase();





resultBox.innerHTML="";






let results =

searchData.filter(item=>


item.title
.toLowerCase()
.includes(value)

||

item.category
.toLowerCase()
.includes(value)

||

item.teacher
.toLowerCase()
.includes(value)



);






if(results.length===0){


resultBox.innerHTML=

`
<p>
No results found 😔
</p>
`;

return;

}







results.forEach(item=>{



resultBox.innerHTML += `


<div class="search-card">


<h3>

${item.title}

</h3>


<p>

📚 ${item.type}

</p>


<p>

Category:
${item.category}

</p>



<p>

👨‍🏫 ${item.teacher}

</p>


<button onclick="openSearchItem('${item.title}')">

View

</button>


</div>



`;



});





}









// =======================================
// OPEN RESULT
// =======================================


function openSearchItem(title){



localStorage.setItem(

"selectedItem",

title

);



window.location.href=

"course-details.html";


}










// =======================================
// FILTER CATEGORY
// =======================================



function filterCategory(category){



let results =

searchData.filter(item=>

item.category===category

);





displaySearchResults(results);



}









// =======================================
// DISPLAY RESULTS
// =======================================


function displaySearchResults(results){



let box =

document.getElementById(
"searchResults"
);





box.innerHTML="";





results.forEach(item=>{


box.innerHTML +=`


<div class="search-card">


<h3>
${item.title}
</h3>


<p>
${item.category}
</p>


</div>


`;


});



}










// =======================================
// RECOMMENDED COURSES
// =======================================



function loadRecommendations(){



let box =

document.getElementById(
"recommendations"
);





if(!box)return;





box.innerHTML="";





searchData

.filter(item=>

item.type==="course"

)

.forEach(course=>{



box.innerHTML += `


<div class="recommend-card">


<h3>

${course.title}

</h3>


<p>

Recommended for you 🚀

</p>


</div>


`;



});



}









document.addEventListener(

"DOMContentLoaded",

()=>{


loadRecommendations();


}

);







console.log(
"🔍 VIATEURLEARN Search System Loaded"
);
