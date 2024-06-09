class information{
    constructor (name , desc , img , desc1){
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.desc1 = desc1;
    }
}
const contact1 = new information( "Mann Patel" , "Hello, I'm Mann Patel, a computer science student playing a key role in our energetic three-person team dedicated to an exciting web-based project." , "images/Image Mann.jpg", " I lead the creation of our \"About Us\" page, shaping a narrative that captures the essence of our project and communicates our team's mission and vision. Simultaneously, I contributed on designing our web pages, ensuring they boast an engaging and user-friendly interface for an enhanced user experience.");
const contact2 = new information("Ayan Nayak" , "Hello, I'm Ayan Nayak, a computer science student actively contributing to a collaborative web-based project within a three-person team. In this endeavor, my specific role focuses on coding the homepage and goal pages of the project." , "images/Image Ayan.jpg", "As a dedicated team member, my responsibilities include translating design concepts and project requirements into functional and visually appealing web pages. I bring my expertise in coding, web development, and programming to ensure that the user interface not only meets design specifications but also aligns seamlessly with the overall objectives of the project.");
const contact3 = new information("Nitya Patel" , "Hello, I'm Nitya Patel, a computer science student and a vital member of our three-person team working on a web-based project." , "images/Image Nitya.jpeg" , "In this collaborative effort, my primary responsibilities include crafting the user-friendly signup form, developing engaging and informative content for the web pages, and took the reigns of the overall design aesthetics of the project.");

const information1 = [];
information1.push(contact1);
information1.push(contact2);
information1.push(contact3);

const be = document.querySelector("#be");
function loadcontent(){
    let displayItem = information1.map((item)=> {
        return`
        <article class = maincontainer>
        <div class = "card">
        <figure class = "front">
        <figcaption>
        <img src="${item.img}" alt=""/>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        </figcaption>
        </figure>
        <div class = "back">
        <p>${item.desc1}<p>
        </div>
        </article>`;
});
displayItem = displayItem.join("");
be.innerHTML = displayItem;
};
window.addEventListener("DOMContentLoaded", loadcontent , false);
