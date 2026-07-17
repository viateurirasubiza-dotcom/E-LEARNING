// =======================================
// VIATEURLEARN CERTIFICATE SYSTEM
// =======================================



// Generate Unique Certificate ID


function generateCertificateID(){


return "VTL-" +
Date.now()
.toString()
.slice(-8);


}









// =======================================
// CREATE CERTIFICATE
// =======================================


function createCertificate(){



let user =

JSON.parse(

localStorage.getItem(
"currentUser"

)

);





let result =

JSON.parse(

localStorage.getItem(
"quizResult"

)

);





let course =

localStorage.getItem(
"completedCourse"

);





if(!user){

alert(
"Please login first"
);

return;

}







if(!result){

alert(
"Complete a course quiz first"
);

return;

}





if(result.percentage <70){


alert(
"You need 70% or above to get certificate"
);


return;


}







let certificate = {



id:
generateCertificateID(),



student:

user.name,



course:

course ||
"VIATEURLEARN Course",



score:

result.percentage+"%",



date:

new Date()
.toLocaleDateString()



};






let certificates =

JSON.parse(

localStorage.getItem(
"certificates"

)

)
||
[];





certificates.push(
certificate
);





localStorage.setItem(

"certificates",

JSON.stringify(certificates)

);







showCertificate(
certificate
);



}











// =======================================
// SHOW CERTIFICATE
// =======================================



function showCertificate(data){



let box =

document.getElementById(
"certificate"
);





if(!box)return;





box.innerHTML = `


<div class="certificate-card">


<h1>
🎓 VIATEURLEARN
</h1>


<h2>
Certificate of Completion
</h2>



<p>
This certificate is proudly presented to
</p>



<h1>
${data.student}
</h1>



<p>
For successfully completing
</p>



<h2>
${data.course}
</h2>




<p>

Score:
<b>
${data.score}
</b>

</p>



<p>

Certificate ID:

<b>

${data.id}

</b>

</p>



<p>

Issued:
${data.date}

</p>



<button onclick="printCertificate()">

Print Certificate 🖨️

</button>



</div>


`;



}










// =======================================
// PRINT CERTIFICATE
// =======================================



function printCertificate(){


window.print();


}










// =======================================
// LOAD MY CERTIFICATES
// =======================================



function loadCertificates(){



let container =

document.getElementById(
"certificateList"
);





if(!container)return;





let certificates =

JSON.parse(

localStorage.getItem(
"certificates"

)

)
||
[];





container.innerHTML="";





certificates.forEach(cert=>{


container.innerHTML += `


<div class="certificate-item">


<h3>
🏆 ${cert.course}
</h3>


<p>
Student:
${cert.student}
</p>


<p>
Score:
${cert.score}
</p>


<p>
ID:
${cert.id}
</p>


<p>
Date:
${cert.date}
</p>


</div>


`;


});



}








// =======================================
// VERIFY CERTIFICATE
// =======================================



function verifyCertificate(){



let id =

document.getElementById(
"certificateID"
)
.value;




let certificates =

JSON.parse(

localStorage.getItem(
"certificates"

)

)
||
[];






let found =

certificates.find(

c=>

c.id===id

);







if(found){


document.getElementById(
"verificationResult"

)
.innerHTML=

`

<h2>
✅ Valid Certificate
</h2>

<p>

Student:
${found.student}

</p>


<p>

Course:
${found.course}

</p>


<p>

Score:
${found.score}

</p>

`;



}

else{


document.getElementById(
"verificationResult"

)
.innerHTML=

`

<h2>
❌ Certificate Not Found
</h2>

`;



}



}








console.log(
"🏆 VIATEURLEARN Certificate System Loaded"
);
