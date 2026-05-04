
let name = localStorage.getItem("username") || sessionStorage.getItem("username");

if ( !name ) {
    name = "User"; // Fallback
}


let welcomeName = document.getElementById("welcomeName");
welcomeName.textContent = name.toUpperCase();

// Nach  3 sekunden redirect zur dashboard seite
setTimeout(() => {
    window.location.href = "/html/index.html";
}, 3000);