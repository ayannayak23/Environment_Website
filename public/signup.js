const complete = document.querySelector("#complete");

function loadContent(){
    complete.innerHTML = `<h1>Thanks for subscribing!</h1>`
    complete.innerHTML += `<p>Save The World!</p>`
    complete.innerHTML += `<a href="index.html"><button> Dismiss message </button></a>`
};

window.addEventListener("DOMContentLoaded", loadContent, false);