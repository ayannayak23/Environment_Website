//Ayan Nayak

class Info{

    constructor(id, title, desc){
        this.id = id;
        this.title = title;
        this.desc = desc;
    }
}

const info1 = new Info(1, "Goals-", "1)Secure the preservation, restoration, and sustainable use of land and freshwater ecosystems, such as forests, wetlands, mountains, and drylands, aligning with international commitments.<br>2)Fight against desertification, rejuvenate damaged land and soil affected by desertification, drought, and floods, aiming for a world where land degradation is balanced by restoration efforts.<br>3)Take immediate action to halt poaching and trafficking of protected plant and animal species ");

const info2 = new Info(2, "Why should we care?", "Forests cover nearly 31 per cent of the world and are home to more than 80 per cent of all terrestrial species of animals, plants and insects. However, biodiversity is declining faster than at any other time in human history. Globally, one fifth of the Earth's land area are degraded, an area nearly the size of India and the Russian Federation combined.");

const info3 = new Info(3, "What does loss of forests mean?", "Lost forests mean the disappearance of livelihoods in rural communities, increased carbon emissions, diminished biodiversity and the degradation of land. While forest loss remains high, 2020 data show that the proportion of forests in protected areas and under long-term management plans increased or remained stable at the global level and in most regions of the world.");

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
            <p class="green">${item.desc}</p>
        </article>
        `;
    });
    displayItem = displayItem.join("");
    navIndex.innerHTML = `<a href="index.html"><li class="nav">Home</li></a>`
    navIndex.innerHTML +=`<a href="Newsletter.html"><li class="nav" id="showNav">SignUp</li></a>`
    navIndex.innerHTML +=`<a href="clean_energy.html"><li class="nav">Clean Energy</li></a>`
    navIndex.innerHTML +=`<a href="climate_action.html"><li class="nav">Climate Action</li></a>`
    navIndex.innerHTML +=`<a href="life_on_land.html"><li class="nav-active">Life On Land</li></a>`
    navIndex.innerHTML +=`<a href="aboutus.html"><li class="nav">About Us</li></a>`
    sectionCenter.innerHTML = `<h3 id="title"> Life On Land </h3>`;
    sectionCenter.innerHTML += displayItem;
    sectionCenter.innerHTML += `<button class="btn"><a href="aboutus.html"> About us </a></button>`;

};

window.addEventListener("DOMContentLoaded", loadContent, false);