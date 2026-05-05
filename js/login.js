console.log("Login logik geladen...");
// Holen der Id'S
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let rememberMe = document.getElementById("rememberMe");
let loginBtn = document.getElementById("loginBtn");
let loginMessage = document.getElementById("loginMessage");

// aktiviert funktion für die benutzer merken checkBox

// Mehrere Benutzer ermöglichen
let users = [
   { name: "NomicGDev", password: "999" },
   { name: "TestUser" , password: "1234" }
];

// redirect falls der benutzer schon eingeloggt ist
if ( localStorage.getItem("loggedIn") === "true" || sessionStorage.getItem("loggedIn") === "true" ) {
   window.location.href = "/html/welcome.html";
}


// Test loginBtn klick
loginBtn.addEventListener("click", function() {
   console.log(usernameInput.value);
   console.log(passwordInput.value);

   // Check ob leere eingaben getätigt werden
   for ( let i  = 0; i < users.length; i++) {
      
   

   if ( usernameInput.value === users[i].name  && passwordInput.value === users[i].password  ) {
      if (rememberMe.checked) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", usernameInput.value);
      } else {
         sessionStorage.setItem("loggedIn", "true");
         sessionStorage.setItem("username", usernameInput.value);
      }
    loginMessage.style.color = "lime-green";
    loginMessage.textContent = "Login erfolgreich!";
    window.location.href = "/html/welcome.html";
   } else if ( usernameInput.value === "" || passwordInput.value === "" ) {
    loginMessage.style.color = "orange";
    loginMessage.textContent = "Bitte alles ausfüllen!";
   } else {
    loginMessage.style.color = "Red";
    loginMessage.textContent = "Login fehlgeschlagen";
   }
   }
})

document.addEventListener("keydown", function(e) {
   if (e.key === "Enter" ) {
      loginBtn.click()
   }
})
