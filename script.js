//Step 2 added a f(x) to save data
function saveData()
{

//Step 1
//something's wrong with 'name'...keeps saying 'deprecated'???
let name,email,message;


name=document.getElementById("name").value;
email = document.getElementById("email").value;
message = document.getElementById("message").value;

localStorage.setItem("name", name)
localStorage.setItem("email", email)
localStorage.setItem("message", message)
}
