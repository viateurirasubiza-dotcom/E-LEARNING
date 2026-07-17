// =======================================
// VIATEURLEARN PAYMENT SYSTEM
// =======================================



// Course Pricing Database


const paymentCourses = [


{
id:1,

title:"Full Stack Web Development",

price:0,

type:"Free"

},



{
id:2,

title:"Python Programming",

price:20000,

type:"Premium"

},



{
id:3,

title:"Artificial Intelligence",

price:30000,

type:"Premium"

},



{
id:4,

title:"Computer Systems",

price:15000,

type:"Premium"

}


];








// =======================================
// SHOW COURSE PRICE
// =======================================


function showCoursePrice(id){



let course =

paymentCourses.find(

c=>c.id===id

);





let box =

document.getElementById(
"coursePrice"
);





if(!box)return;






if(course.price===0){



box.innerHTML =

`
<h2>
FREE 🎓
</h2>

<button onclick="enrollFreeCourse(${id})">

Start Learning

</button>
`;



}

else{



box.innerHTML =

`

<h2>

${course.price} RWF

</h2>


<button onclick="buyCourse(${id})">

Buy Course 💳

</button>


`;



}



}









// =======================================
// FREE COURSE ENROLLMENT
// =======================================



function enrollFreeCourse(id){



savePurchase(id,"FREE");



alert(
"Course enrolled successfully 🎓"
);



}









// =======================================
// BUY COURSE
// =======================================



function buyCourse(id){



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


window.location.href =
"login.html";


return;

}






// Payment simulation

let transaction = {


id:
"VTL-"+Date.now(),


course:id,


student:user.email,


amount:
paymentCourses.find(
c=>c.id===id
).price,


method:
"Mobile Money",


status:
"Pending",


date:
new Date()
.toLocaleDateString()


};







let payments =

JSON.parse(

localStorage.getItem(
"payments"

)

)
||
[];






payments.push(transaction);





localStorage.setItem(

"payments",

JSON.stringify(payments)

);







alert(

"Payment request created 📱"

);




}











// =======================================
// SAVE PURCHASE
// =======================================



function savePurchase(
courseId,
status
){



let user =

JSON.parse(

localStorage.getItem(
"currentUser"

)

);





let purchases =

JSON.parse(

localStorage.getItem(
"purchases"

)

)
||
[];






purchases.push({

student:user.email,

course:courseId,

status:status,

date:
new Date()
.toLocaleDateString()


});






localStorage.setItem(

"purchases",

JSON.stringify(purchases)

);



}











// =======================================
// LOAD PURCHASE HISTORY
// =======================================



function loadPurchases(){



let box =

document.getElementById(
"purchaseHistory"
);





if(!box)return;





let purchases =

JSON.parse(

localStorage.getItem(
"purchases"

)

)
||
[];





box.innerHTML="";





purchases.forEach(item=>{


box.innerHTML += `


<div class="purchase">


<h3>

Course ID:
${item.course}

</h3>


<p>

Status:
${item.status}

</p>


<p>

Date:
${item.date}

</p>


</div>


`;



});



}








console.log(
"💳 VIATEURLEARN Payment System Loaded"
);
