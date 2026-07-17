// =======================================
// VIATEURLEARN SEO SYSTEM
// =======================================



// Dynamic Page Title


function setPageTitle(title){


document.title =

title +

" | VIATEURLEARN";


}








// Create Meta Description


function setSEODescription(description){



let meta =

document.querySelector(
'meta[name="description"]'
);





if(meta){


meta.content = description;


}

else{


meta = document.createElement(
"meta"
);


meta.name =
"description";


meta.content =
description;



document.head.appendChild(
meta
);


}



}








// Keywords


function setSEOKeywords(){



let keywords =

document.createElement(
"meta"
);



keywords.name =
"keywords";



keywords.content =

`
VIATEURLEARN,
online learning,
Rwanda education,
programming courses,
computer science,
mathematics,
AI courses,
e-learning platform
`;





document.head.appendChild(
keywords
);



}








// Open Graph


function createSocialSEO(){



let og = [


{
property:"og:title",
content:"VIATEURLEARN Online Learning Platform"
},


{
property:"og:description",
content:"Learn technology, programming and digital skills."
},


{
property:"og:type",
content:"website"
}



];







og.forEach(item=>{


let meta=document.createElement(
"meta"
);


meta.setAttribute(
"property",
item.property
);


meta.content=item.content;


document.head.appendChild(meta);


});



}







document.addEventListener(

"DOMContentLoaded",

()=>{


setPageTitle(
"Learn Skills Build Future"
);


setSEODescription(

"VIATEURLEARN provides online courses in programming, mathematics, computer science and technology."

);


setSEOKeywords();

createSocialSEO();



}

);



console.log(
"🌍 VIATEURLEARN SEO Loaded"
);S
