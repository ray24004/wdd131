const professional = {
    name: "Wesley Raymundo",
    title: "Game Developer",
    email: "contact@wesleyraymundo.dev",
    phone: "+55 41 99672 2591",
    location: "Colombo, Paraná, Brazil",
    linkedin: "wesley-raymundo"
}
fillProfessionalLabels(professional);

const games = [
    {
        title: "STEM Play",
        access: "Android",
        genre: "Educational Hub",
        company: "Happy S.A.",
        outcomes: [
            "Outcome 1",
            "Outcome 2",
            "Outcome 3"
        ],
        callActionLabel: "Watch Gameplay",
        callActionUrl: "#",
        imageUrl: ""
    }
]
fillGamesSection(games);

function fillProfessionalLabels(professionalData) {
    const nameLabels = document.querySelectorAll(".professionalName");
    const titleLabels = document.querySelectorAll(".professionalTitle");
    const emailLabels = document.querySelectorAll(".professionalEmail");
    const phoneLabels = document.querySelectorAll(".professionalPhone");
    const locationLabels = document.querySelectorAll(".professionalLocation");

    nameLabels.forEach(l => l.innerHTML = professionalData.name);
    titleLabels.forEach(l => l.innerHTML = professionalData.title);
    emailLabels.forEach(l => l.innerHTML = professionalData.email);
    phoneLabels.forEach(l => l.innerHTML = professionalData.phone);
    locationLabels.forEach(l => l.innerHTML = professionalData.location);

    const linkedInAnchors = document.querySelectorAll("a.professionalLinkedIn");
    linkedInAnchors.forEach(a => a.setAttribute("href", `https://www.linkedin.com/in/${professionalData.linkedin}`))
}

function fillGamesSection(gameDataArray) {
    const gamesSection = document.querySelector("#gamesSection");
    gameDataArray.forEach(g => {
        const article = document.createElement("article");
        article.classList.add("gameArticle")
    
        let outcomeItems = "";
        g.outcomes.forEach(o => {
            outcomeItems += `
                <li>${o}</li>
            `;
        });
    
        article.innerHTML = `
            <picture>
                <img src="${g.imageUrl}" alt="${g.title} image">
            </picture>
            <h2>${g.title}</h2>
            <p>[ ${g.access} ]</p>
            <p>${g.genre}</p>
            <p>- ${g.company} -</p>
            <p>Outcomes</p>
            <ul>
                ${outcomeItems}
            </ul>
            <a href="${g.callActionUrl}" class="gameCallAction">${g.callActionLabel}</a>
        `;
    
        gamesSection.appendChild(article);
    })
}

