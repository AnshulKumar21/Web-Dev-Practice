let email = document.querySelector("#email")
let password  = document.querySelector("#password");
let form = document.querySelector("#loginForm")

form.addEventListener("submit",function(dets){
  dets.preventDefault();
  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passwordError").textContent = "";
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let emailans = emailRegex.test(email.value)

  let passans = passwordRegex.test(password.value)
let isValid = true;
if(!emailans){
  document.querySelector("#emailError").textContent= "Email is incorrect";
   document.querySelector("#emailError").style.display="initial";
   isValid = false;
}
if(!passans){
  document.querySelector("#passwordError").textContent= "Password is incorrect";
   document.querySelector("#passwordError").style.display="initial";
   isValid = false;
}
if(isValid){
  document.querySelector("#successMsg").textContent = "Everything is Correct"
}
})