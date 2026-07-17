// =======================================
// VIATEURLEARN FILE UPLOAD SYSTEM
// =======================================


import {

storage,
db

}

from "./firebase.js";



import {

ref,
uploadBytes,
getDownloadURL

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";



import {

collection,
addDoc

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";








// =======================================
// UPLOAD COURSE IMAGE
// =======================================



async function uploadCourseImage(file){


try{


let fileName =
"courses/images/"
+
Date.now()
+
"_"
+
file.name;




let storageRef =
ref(
storage,
fileName
);





await uploadBytes(

storageRef,

file

);





let url =

await getDownloadURL(
storageRef
);





return url;



}

catch(error){


console.log(error);

return null;


}


}










// =======================================
// UPLOAD VIDEO LESSON
// =======================================



async function uploadLessonVideo(file){



try{


let fileName =

"lessons/videos/"
+
Date.now()
+
"_"
+
file.name;



let storageRef =

ref(

storage,

fileName

);






await uploadBytes(

storageRef,

file

);





let url =

await getDownloadURL(

storageRef

);





return url;


}


catch(error){


console.log(error);

return null;


}


}









// =======================================
// UPLOAD PDF NOTES
// =======================================



async function uploadPDF(file){



try{


let fileName =

"lessons/pdf/"
+
Date.now()
+
"_"
+
file.name;



let storageRef =

ref(

storage,

fileName

);





await uploadBytes(

storageRef,

file

);





let url =

await getDownloadURL(

storageRef

);





return url;


}


catch(error){


console.log(error);

return null;


}


}









// =======================================
// CREATE LESSON
// =======================================



async function createLesson(data){



let lesson = {


title:data.title,


description:data.description,


course:data.course,


video:data.video,


pdf:data.pdf,


created:

new Date()



};






await addDoc(

collection(
db,
"lessons"

),

lesson


);



console.log(

"Lesson Added Successfully"

);



}









// =======================================
// CREATE COURSE WITH IMAGE
// =======================================



async function createCourseWithUpload(){



let title =

document.getElementById(
"courseTitle"
).value;




let description =

document.getElementById(
"courseDescription"
).value;




let imageFile =

document.getElementById(
"courseImage"
).files[0];






let imageURL =

await uploadCourseImage(
imageFile
);







let courseData={


title:title,


description:description,


image:imageURL,


created:

new Date()


};





await addDoc(

collection(
db,
"courses"

),

courseData


);






alert(
"Course Created Successfully 🚀"
);



}










console.log(

"📤 VIATEURLEARN Upload System Loaded"

);
