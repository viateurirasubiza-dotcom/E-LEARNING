// =======================================
// VIATEURLEARN CHAT SYSTEM
// =======================================



import {

db

}

from "./firebase.js";



import {

collection,
addDoc,
getDocs,
query,
where,
orderBy

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";








// =======================================
// SEND MESSAGE
// =======================================


async function sendMessage(){



let user =

JSON.parse(

localStorage.getItem(
"currentUser"

)

);





if(!user){


alert(
"Login first"
);


return;

}






let messageInput =

document.getElementById(
"messageInput"
);





let message =
messageInput.value.trim();






if(message===""){

return;

}







await addDoc(

collection(
db,
"messages"

),

{


sender:

user.name,


email:

user.email,


message:


message,



course:

localStorage.getItem(
"currentCourse"

)
||
"General",



date:

new Date()



}

);






messageInput.value="";





loadMessages();



}











// =======================================
// LOAD MESSAGES
// =======================================



async function loadMessages(){



let box =

document.getElementById(
"chatBox"
);





if(!box)return;





box.innerHTML =
"";







const snapshot =

await getDocs(

collection(
db,
"messages"

)

);








snapshot.forEach(item=>{


let data =
item.data();





box.innerHTML += `



<div class="message">


<strong>

${data.sender}

</strong>



<p>

${data.message}

</p>


<small>

${

new Date(
data.date.seconds*1000

)
.toLocaleString()

}

</small>


</div>


`;



});



}









// =======================================
// COURSE DISCUSSION
// =======================================



async function sendCourseMessage(text){



let user =

JSON.parse(

localStorage.getItem(
"currentUser"

)

);





await addDoc(

collection(
db,
"courseMessages"

),

{


course:

localStorage.getItem(
"currentCourse"

),


user:

user.name,


message:text,


date:

new Date()


}

);



}









// =======================================
// CREATE GROUP CHAT
// =======================================



async function createGroup(name){



await addDoc(

collection(
db,
"groups"

),

{


name:name,


created:

new Date()


}

);




alert(
"Group created successfully"
);



}









// =======================================
// LOAD GROUPS
// =======================================



async function loadGroups(){



let box =

document.getElementById(
"groupList"
);





if(!box)return;






const snapshot =

await getDocs(

collection(
db,
"groups"

)

);





box.innerHTML="";





snapshot.forEach(group=>{


let data =
group.data();





box.innerHTML += `


<div class="group">


<h3>

${data.name}

</h3>


<button>

Join Group

</button>


</div>


`;



});



}









document.addEventListener(

"DOMContentLoaded",

()=>{


loadMessages();

loadGroups();


}

);







console.log(
"💬 VIATEURLEARN Chat Loaded"
);
