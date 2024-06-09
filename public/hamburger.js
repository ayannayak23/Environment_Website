let hamburger = document.querySelector("#hamburger");

function toggleNav() {
    let links = document.querySelector(".mainNav");
    links.classList.toggle('showNav');
}

hamburger.addEventListener('click', toggleNav);