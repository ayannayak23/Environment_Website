//Ayan Nayak

class Info{

    constructor(id, title, desc){
        this.id = id;
        this.title = title;
        this.desc = desc;
    }
}

const info1 = new Info(1, "Goals-", "1)Achieve access for everyone to energy services that are affordable, dependable, and modern by the year 2030.<br> 2)Strengthen global collaboration so the research and technology for clean energy, encompassing renewables, energy efficiency, and advanced fossil-fuel technology can be used by all countries within the UN the aim is for it to be done by 2030.<br> 3)Significantly raise the proportion of renewable energy within the worldwide energy composition by the year 2030. ");

const info2 = new Info(2, "Why should we care?", "Imagine if we didn't have electricity. It powers everything, from our schools and hospitals to businesses and even our phones. In some places, though, not everyone has access to electricity, and we need to change that. Without electricity, life is harder. Imagine having to spend hours just to get water, or not being able to do homework after sunset. It even affects health clinics and businesses. If we do not fix this by 2030, a lot of people, especially women and kids, will still be breathing in harmful air, due to non-renewable forms of generating electricity.");

const info3 = new Info(3, " What are the consequences to lack of access to energy and what can we do to fix these issues? ", "Energy is super important for staying healthy and dealing with sickness outbreaks. It helps run hospitals, gives us clean water to stay clean, and lets us use phones and computers to stay connected without being too close to each other. Ways in which it can be fixed are countries can switch to clean and affordable energy by using more renewable sources, being energy-efficient, and using clean technologies; businesses can help by getting all their electricity from renewable sources and taking care of the environment. ");

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
            <p class="blue">${item.desc}</p>
        </article>
        `;
    });
    displayItem = displayItem.join("");
    navIndex.innerHTML = `<a href="index.html"><li class="nav">Home</li></a>`
    navIndex.innerHTML +=`<a href="Newsletter.html"><li class="nav" id="showNav">SignUp</li></a>`
    navIndex.innerHTML +=`<a href="clean_energy.html"><li class="nav-active">Clean Energy</li></a>`
    navIndex.innerHTML +=`<a href="climate_action.html"><li class="nav">Climate Action</li></a>`
    navIndex.innerHTML +=`<a href="life_on_land.html"><li class="nav">Life On Land</li></a>`
    navIndex.innerHTML +=`<a href="aboutus.html"><li class="nav">About Us</li></a>`
    sectionCenter.innerHTML = `<h3 id="title1"> Affordable and Clean Energy </h3>`;
    sectionCenter.innerHTML += displayItem;
    sectionCenter.innerHTML += `<button class="btn"><a href="aboutus.html"> About us </a></button>`;

};

window.addEventListener("DOMContentLoaded", loadContent, false);