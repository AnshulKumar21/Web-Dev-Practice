function showSignup() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}

function showLogin() {
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

/* LOGIN */
function loginUser() {
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "../homepage/index.html";
}

/* SIGNUP */
function createAccount() {
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "../homepage/index.html";
}
