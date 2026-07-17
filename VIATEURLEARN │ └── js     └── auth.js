// =======================================
// VIATEURLEARN AUTHENTICATION SYSTEM
// =======================================



// Default Users Database (Temporary)
// Later tuzayihuza na Firebase Firestore

let users =
JSON.parse(
localStorage.getItem("viateurUsers")
)
|| [];






// ===============================
// REGISTER
// ===============================


function registerUser(){


let name =
document.getElementById("name").value;


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;


let role =
document.getElementById("role").value;



if(
name=="" ||
email=="" ||
password==""
){

showMessage(
"Please fill all fields",
"error"
);

return;

}




// Check existing user


let exist =
users.find(
user=>user.email===email
);



if(exist){

showMessage(
"Account already exists",
"error"
);

return;

}





let newUser={


id:Date.now(),

name:name,

email:email,

password:password,

role:role,

joined:
new Date()
.toLocaleDateString()


};





users.push(newUser);



localStorage.setItem(

"viateurUsers",

JSON.stringify(users)

);





showMessage(
"Account created successfully"
);



setTimeout(()=>{

window.location.href=
"login.html";

},1500);



}










// ===============================
// LOGIN
// ===============================



function loginUser(){



let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;





let user =
users.find(
u=>
u.email===email
&&
u.password===password

);





if(!user){


showMessage(
"Invalid email or password",
"error"
);


return;


}






// Save Session


localStorage.setItem(

"currentUser",

JSON.stringify(user)

);





showMessage(
"Welcome "+user.name
);






setTimeout(()=>{



if(user.role==="student"){


window.location.href=
"student-dashboard.html";


}



else if(
user.role==="teacher"
){


window.location.href=
"teacher-dashboard.html";


}




else if(
user.role==="admin"
){


window.location.href=
"admin-dashboard.html";


}




},1500);




}









// ===============================
// LOGOUT
// ===============================



function logout(){


localStorage.removeItem(
"currentUser"
);



window.location.href=
"login.html";


}









// ===============================
// GET CURRENT USER
// ===============================


function getCurrentUser(){


return JSON.parse(

localStorage.getItem(
"currentUser"
)

);


}










// ===============================
// PROTECT PAGES
// ===============================



function protectPage(role){



let user =
getCurrentUser();




if(!user){


window.location.href=
"login.html";


return;

}





if(role && user.role!==role){


alert(
"You don't have permission"
);


window.location.href=
"index.html";


}



}









// ===============================
// SHOW USER NAME
// ===============================



function showUserName(){



let user =
getCurrentUser();



let element =
document.getElementById(
"userName"
);



if(
element &&
user
){

element.innerHTML=
user.name;


}



}








console.log(
"🔐 VIATEURLEARN Auth Loaded"
);
