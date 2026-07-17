// =======================================
// VIATEURLEARN FIREBASE CONFIGURATION
// =======================================


// Import Firebase SDK
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { 
getAuth 
} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



import { 

getFirestore,
collection,
addDoc,
getDocs,
doc,
setDoc,
getDoc,
updateDoc,
deleteDoc

}

from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



import {

getStorage

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";





// =======================================
// FIREBASE CONFIG
// =======================================


// Aha ushyiramo config yawe ya Firebase


const firebaseConfig = {


apiKey:
"YOUR_API_KEY",


authDomain:
"YOUR_PROJECT.firebaseapp.com",


projectId:
"YOUR_PROJECT_ID",


storageBucket:
"YOUR_PROJECT.appspot.com",


messagingSenderId:
"YOUR_SENDER_ID",


appId:
"YOUR_APP_ID"


};








// Initialize Firebase


const app =
initializeApp(firebaseConfig);





// Services


const auth =
getAuth(app);



const db =
getFirestore(app);



const storage =
getStorage(app);








// =======================================
// USER FUNCTIONS
// =======================================



async function saveUser(user){



await setDoc(

doc(
db,
"users",
user.uid
),

{


name:user.name,

email:user.email,

role:user.role,

created:
new Date()


}

);



}









// GET USER


async function getUser(uid){


const snap =

await getDoc(

doc(
db,
"users",
uid

)

);



if(snap.exists()){


return snap.data();


}


return null;


}









// =======================================
// COURSE FUNCTIONS
// =======================================




async function addCourse(course){



await addDoc(

collection(
db,
"courses"

),

{


title:
course.title,


description:
course.description,


teacher:
course.teacher,


created:
new Date()


}

);



}









async function loadCourses(){



let data=[];



const snapshot =

await getDocs(

collection(
db,
"courses"

)

);





snapshot.forEach(doc=>{


data.push({

id:doc.id,

...doc.data()

});


});





return data;


}











// =======================================
// ENROLLMENT
// =======================================



async function enrollStudent(data){



await addDoc(

collection(
db,
"enrollments"

),

{


student:
data.student,


course:
data.course,


date:
new Date()


}

);



}









// =======================================
// QUIZ RESULTS
// =======================================




async function saveQuizResult(result){



await addDoc(

collection(
db,
"quizResults"

),

{


student:
result.student,


course:
result.course,


score:
result.score,


date:
new Date()


}

);



}










// =======================================
// NOTIFICATIONS
// =======================================



async function sendNotification(notification){



await addDoc(

collection(
db,
"notifications"

),

{


title:
notification.title,


message:
notification.message,


user:
notification.user,


date:
new Date()


}

);



}










export {


app,

auth,

db,

storage,


saveUser,

getUser,

addCourse,

loadCourses,

enrollStudent,

saveQuizResult,

sendNotification


};
