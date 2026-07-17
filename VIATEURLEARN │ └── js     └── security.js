// =======================================
// VIATEURLEARN SECURITY SYSTEM
// =======================================



// =======================================
// GET CURRENT USER
// =======================================


function getCurrentUser(){



return JSON.parse(

localStorage.getItem(
"currentUser"

)

)
||
null;


}









// =======================================
// CHECK LOGIN
// =======================================



function requireLogin(){



let user =

getCurrentUser();






if(!user){



alert(
"Please login first 🔐"
);



window.location.href =
"login.html";



return false;



}





return true;


}









// =======================================
// ROLE PROTECTION
// =======================================



function requireRole(role){



let user =

getCurrentUser();





if(!user){


window.location.href =
"login.html";


return false;


}






if(user.role !== role){



alert(

"Access denied 🚫"

);





window.location.href =
"index.html";



return false;


}





return true;


}









// =======================================
// PAGE SECURITY
// =======================================



function protectPage(){



let page =

document.body
.dataset
.role;





if(!page)return;





requireRole(page);



}









// =======================================
// ROLE CHECK
// =======================================



function isStudent(){



let user =
getCurrentUser();



return user &&
user.role==="student";


}







function isTeacher(){



let user =
getCurrentUser();



return user &&
user.role==="teacher";


}







function isAdmin(){



let user =
getCurrentUser();



return user &&
user.role==="admin";


}









// =======================================
// SECURE LOGOUT
// =======================================



function secureLogout(){



localStorage.removeItem(
"currentUser"

);



localStorage.removeItem(
"currentCourse"

);





alert(
"You have logged out safely 🔐"
);



window.location.href =
"login.html";


}









// =======================================
// HIDE ADMIN BUTTONS
// =======================================



function controlInterface(){



let adminElements =

document.querySelectorAll(
".admin-only"

);



let teacherElements =

document.querySelectorAll(
".teacher-only"

);







if(!isAdmin()){


adminElements.forEach(

item=>{

item.style.display="none";

}

);


}








if(!isTeacher()){


teacherElements.forEach(

item=>{

item.style.display="none";

}

);


}



}









document.addEventListener(

"DOMContentLoaded",

()=>{


protectPage();

controlInterface();


}

);







console.log(
"🔐 VIATEURLEARN Security Loaded"
);
