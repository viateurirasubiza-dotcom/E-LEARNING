// =====================================
// VIATEURLEARN MAIN JAVASCRIPT
// =====================================


// Mobile Menu

function toggleMenu(){

const menu =
document.getElementById("menu");


if(menu){

menu.classList.toggle("active");

}

}





// Show current year in footer

const year =
document.getElementById("year");


if(year){

year.innerHTML =
new Date().getFullYear();

}







// Smooth scrolling

document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
function(e){


e.preventDefault();


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){

target.scrollIntoView({

behavior:"smooth"

});

}


});


});








// Toast Notification


function showMessage(message,type="success"){


const toast =
document.createElement("div");


toast.innerHTML=message;


toast.style.position="fixed";
toast.style.bottom="30px";
toast.style.right="30px";
toast.style.padding="15px 25px";
toast.style.borderRadius="30px";
toast.style.color="white";
toast.style.zIndex="9999";
toast.style.fontWeight="bold";



if(type=="success"){

toast.style.background="#16a34a";

}

else{

toast.style.background="#dc2626";

}



document.body.appendChild(toast);



setTimeout(()=>{


toast.remove();


},3000);



}









// Loading Animation


window.onload=function(){


const loader =
document.getElementById(
"loader"
);


if(loader){

loader.style.display="none";

}


};









// Dark Mode


function darkMode(){


document.body.classList.toggle(
"dark"
);


localStorage.setItem(

"darkMode",

document.body.classList.contains(
"dark"
)

);


}




// Load Dark Mode Preference


if(
localStorage.getItem("darkMode")
==="true"
){

document.body.classList.add(
"dark"
);

}










// Search Function


function searchContent(){


let input =
document.getElementById(
"search"
);



if(!input)return;



let value =
input.value.toLowerCase();



let items =
document.querySelectorAll(
".search-item"
);



items.forEach(item=>{


if(
item.innerText
.toLowerCase()
.includes(value)
)

{

item.style.display="block";

}

else{

item.style.display="none";

}


});


}







console.log(
"🚀 VIATEURLEARN System Loaded"
);
