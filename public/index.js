//Ayan Nayak

const sectionIndex = document.querySelector("#section-index");
const navIndex = document.querySelector(".loadnav");

function loadContent(){
    navIndex.innerHTML = `<a href="index.html"><li class="nav-active">Home</li></a>`
    navIndex.innerHTML +=`<a href="Newsletter.html"><li class="nav" id="showNav">SignUp</li></a>`
    navIndex.innerHTML +=`<a href="clean_energy.html"><li class="nav">Clean Energy</li></a>`
    navIndex.innerHTML +=`<a href="climate_action.html"><li class="nav">Climate Action</li></a>`
    navIndex.innerHTML +=`<a href="life_on_land.html"><li class="nav">Life On Land</li></a>`
    navIndex.innerHTML +=`<a href="aboutus.html"><li class="nav">About Us</li></a>`
    sectionIndex.innerHTML += `<article><div><h3> Single-Use <br> Sucks</h3><p>Act Efficient. Stop Global Warming. Plant a tree.</p><button class="btn"><a href="Newsletter.html">Newsletter</a></button></div><img src="images/Tree.jpg" alt=""></article>`;
    
};

window.addEventListener("DOMContentLoaded", loadContent, false);