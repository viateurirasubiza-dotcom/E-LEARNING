// =======================================
// VIATEURLEARN NOTIFICATION SYSTEM
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
updateDoc,
doc,
orderBy

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";









// =======================================
// CREATE NOTIFICATION
// =======================================



async function createNotification(data){



await addDoc(

collection(
db,
"notifications"

),

{


user:
data.user,


title:
data.title,


message:
data.message,


type:
data.type || "general",


read:false,


date:
new Date()


}

);





console.log(
"Notification Sent 🔔"
);



}









// =======================================
// LOAD USER NOTIFICATIONS
// =======================================



async function loadNotifications(){



let user =

JSON.parse(

localStorage.getItem(
"currentUser"

)

);






if(!user)return;





let box =

document.getElementById(
"notificationList"
);





if(!box)return;






box.innerHTML =
"Loading...";







const q =

query(

collection(
db,
"notifications"

),



where(
"user",
"==",
user.email
),



orderBy(
"date",
"desc"
)


);







const snapshot =

await getDocs(q);







box.innerHTML="";






snapshot.forEach(item=>{


let data =
item.data();




box.innerHTML += `



<div class="notification">


<h3>

${data.title}

</h3>



<p>

${data.message}

</p>


<small>

${data.read ? 
"Read":
"New 🔵"}

</small>


<button onclick="markRead('${item.id}')">

Mark Read

</button>


</div>



`;



});



}










// =======================================
// MARK NOTIFICATION READ
// =======================================



async function markRead(id){



await updateDoc(

doc(

db,

"notifications",

id

),

{


read:true


}

);





loadNotifications();



}










// =======================================
// QUICK ALERTS
// =======================================



function showNotification(message){



let alertBox =

document.createElement(
"div"
);



alertBox.innerHTML =
"🔔 "+message;




alertBox.style.position =
"fixed";


alertBox.style.top =
"30px";


alertBox.style.right =
"30px";


alertBox.style.background =
"#2563eb";


alertBox.style.color =
"white";


alertBox.style.padding =
"15px 25px";


alertBox.style.borderRadius =
"30px";



alertBox.style.zIndex =
"9999";





document.body.appendChild(
alertBox
);






setTimeout(()=>{


alertBox.remove();


},3000);



}









// =======================================
// SEND COURSE UPDATE
// =======================================



async function sendCourseNotification(
studentEmail,
courseName
){



await createNotification({

user:
studentEmail,


title:
"Course Updated 📚",


message:

courseName+
" has new lessons available",


type:
"course"


});



}









document.addEventListener(

"DOMContentLoaded",

()=>{


loadNotifications();


}

);






console.log(
"🔔 VIATEURLEARN Notification System Loaded"
);
