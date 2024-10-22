const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    // Add more temple objects here...
    {
        templeName: "Curitiba Brazil",
        location: "Curitiba, Brazil",
        dedicated: "2008, June, 1",
        area: 27850,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg",
    },
    {
        templeName: "Porto Alegre Brazil",
        location: "Porto Alegre, Brazil",
        dedicated: "2000, December, 17",
        area: 13325,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-14267-main.jpg",
    },
    {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg",
    },
];

const headerNav = document.querySelector("header nav");
const headerButton = document.querySelector("header button");
headerButton.addEventListener("click", onMenuClick);

function onMenuClick(event) {
    headerNav.classList.toggle("hide");
    headerButton.classList.toggle("hide");
}

//
// WEEK 04
//

const homeButton = document.querySelector("#homeButton");
const oldButton = document.querySelector("#oldButton");
const newButton = document.querySelector("#newButton");
const largeButton = document.querySelector("#largeButton");
const smallButton = document.querySelector("#smallButton");

oldButton.addEventListener("click", () => {
    showTempleCards(temples.filter(t => Number(t.dedicated.split(",")[0]) < 1900));
});

newButton.addEventListener("click", () => {
    showTempleCards(temples.filter(t => Number(t.dedicated.split(",")[0]) >= 2000));
});

largeButton.addEventListener("click", () => {
    showTempleCards(temples.filter(t => Number(t.area) >= 90000));
});

smallButton.addEventListener("click", () => {
    showTempleCards(temples.filter(t => Number(t.area) < 10000));
});

homeButton.addEventListener("click", () => {
    showTempleCards(temples);
});

showTempleCards(temples);

function createTempleCard(templeData) {
    const card = document.createElement("article");
    card.classList.add("templeCard");
    card.innerHTML = `
        <h2>${templeData.templeName}</h2>
        <ul>
            <li><span class="dataName">Location:</span> ${templeData.location}</li>
            <li><span class="dataName">Dedicated:</span> ${templeData.dedicated}</li>
            <li><span class="dataName">Size:</span> ${templeData.area} sq ft</li>
        </ul>
        <img src="${templeData.imageUrl}" alt="Photo of ${templeData.templeName} Temple" loading="lazy">
    `;

    return card;
}

function showTempleCards(temples) {
    const mainElement = document.querySelector("main");
    mainElement.innerHTML = "";

    temples.forEach(temple => mainElement.appendChild(createTempleCard(temple)));
}
