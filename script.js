//added a f(x) to save data
function saveData()
{

//block scope #1 variable below
let name,email,message;

//3 below will retrieve the info you need...GET GET GET!
name=document.getElementById("name").value;
email=document.getElementById("email").value;
message=document.getElementById("message").value;





//I don't want my txt file to have duplicate entries so include array to prevent
//block scope #2 variable added below as an array
//https://www.geeksforgeeks.org/how-to-convert-json-string-to-array-of-json-objects-using-javascript/


//feature #1
let client_responses= Array();
client_responses=JSON.parse(localStorage.getItem("clients"))?JSON.parse(localStorage.getItem("clients")):[]
if(client_responses.some((v)=>{return v.email==email}))

//Feature #4 are below with the 2 alerts
{
    alert("duplicate data");
    
}

if(client_responses.some((v)=>{return v.email==email}))

{
    alert("You have entered an invalid email!");
    
}


else
{
    client_responses.push({
        "name":name,
        "email":email,
        "message":message
    })
    
    
    localStorage.setItem("clients",JSON.stringify(client_responses));
}

showData();

function showData()
{
    //added below line to only allow a new line to be added instead of resending entire batch and then the new message
    document.getElementById("showCustomers").innerHTML="";

    //Feature #3 is below
    let client_responses= Array();
    client_responses=JSON.parse(localStorage.getItem("clients"))?JSON.parse(localStorage.getItem("clients")):[]
    if(client_responses)
    {
      for(let i=0; i < client_responses.length; i++)  
      {
        let addDiv=document.createElement('div');
        addDiv.className="row";
        addDiv.innerHTML=' <div class="col-sm-4" style="padding: 10px;">'+client_responses[i].name+'</div><div class="col-sm-4" style="padding: 10px;">'+client_responses[i].email+'</div><div class="col-sm-4" style="padding: 10px;">'+client_responses[i].message+'</div>';
        document.getElementById("showCustomers").appendChild(addDiv);
      }
    }

  
}


}

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', ()=> {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.getElementsByClassName.animation) {
        link.getElementsByClassName.animation = '';
      } else {
        link.getElementsByClassName.animation = 'navLinkFade 0.5s ease forwards ${index / 5 + 1}s'; 
      }  
});

burger.classList.toggle('toggle');


});




}

navSlide();

//Feature #5 below showing doughnut graph

const doughnut = document.getElementById('myChart');
const myChart = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['Chicken', 'Beef', 'Pork'],
        datasets: [{
            
            data: [10, 20, 30],
            backgroundColor: [
                'rgba(245, 40, 145, 0.8)',
                'rgba(67, 182, 182, 0.8)',
                'rgba(255, 144, 54, 0.85)',
                
            ],
            borderColor: [
                'rgba()',
                'rgba(18, 11, 5, 0.55)',
                'rgba(18, 11, 5, 0.55)',
                
            ],
            borderWidth: 2
        }]
    },
    options: {
        title: {
          display: true,
          text:'Customer Favorite',
            fontColor: 'rgba(51, 133, 221)',
            fontSize:40,
            fontFamily: 'sans-serif '
        }
    }
});







