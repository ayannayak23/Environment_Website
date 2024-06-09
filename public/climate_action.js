//Ayan Nayak

class Info{

    constructor(id, title, desc){
        this.id = id;
        this.title = title;
        this.desc = desc;
    }
}

const info1 = new Info(1, "Goals-", "1)Enhance the ability of all countries to withstand and adapt to climate-related dangers and natural disasters.<br> 2)Include actions to address climate change in the policies, strategies, and plans of nations.<br>3)Improve education, awareness, and the ability of people and institutions to deal with climate change ");

const info2 = new Info(2, "Why should we care?", "Think about a farmer who's used to a regular schedule for planting and harvesting crops. But lately, the weather has been all over the place. It's messing up the usual plans, making it hard to predict when to do things. For this farmer and many others, it means not knowing how these changes will affect their lives and the food they grow. It's a simple example of how climate change can impact everyday people, showing why it's so important to deal with these issues for a better future. This also means that further down the line we won’t get food on our shelves like bread, due to crops being ruined.");

const info3 = new Info(3, "What would happen if no action was taken, and how can this be solved?", "If we don't do something about it, climate change could make the Earth much hotter, with global temperatures rising beyond 3°C. This would harm all kinds of environments. We're already experiencing how it makes storms and disasters worse, and it also brings problems like not having enough food and water, which can even lead to conflicts. A few things that could be done include increasing global investments in renewable energy sources like solar and wind to further reduce reliance on fossil fuels, aiming for a cleaner and more sustainable energy system; encourage businesses to actively lower their carbon emissions. This not only aligns with ethical responsibilities but also makes economic and business sense, fostering environmentally sustainable practices for long-term benefits and improve the rates of implementation of international agreements like the Paris Agreement by all countries.");

const information = []

information.push(info1);
information.push(info2);
information.push(info3);


const sectionCenter = document.querySelector("#section-info");
const navIndex = document.querySelector(".loadnav");

function loadContent(){
    let displayItem = information.map( (item) => {
        return `
        <article class="content">
            <h3>${item.title}</h3>
            <p class="grey">${item.desc}</p>
        </article>
        `;
    });
    displayItem = displayItem.join("");
    navIndex.innerHTML = `<a href="index.html"><li class="nav">Home</li></a>`
    navIndex.innerHTML +=`<a href="Newsletter.html"><li class="nav" id="showNav">SignUp</li></a>`
    navIndex.innerHTML +=`<a href="clean_energy.html"><li class="nav">Clean Energy</li></a>`
    navIndex.innerHTML +=`<a href="climate_action.html"><li class="nav-active">Climate Action</li></a>`
    navIndex.innerHTML +=`<a href="life_on_land.html"><li class="nav">Life On Land</li></a>`
    navIndex.innerHTML +=`<a href="aboutus.html"><li class="nav">About Us</li></a>`
    sectionCenter.innerHTML = `<h3 id="title"> Climate Action </h3>`;
    sectionCenter.innerHTML += displayItem;
    sectionCenter.innerHTML += `<button class="btn"><a href="aboutus.html"> About us </a></button>`;

};

window.addEventListener("DOMContentLoaded", loadContent, false);