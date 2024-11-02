const professional = {
    name: "Wesley Raymundo",
    title: "Game Developer",
    email: "contact@wesleyraymundo.dev",
    phone: "+55 41 99672 2591",
    location: "Colombo, Paraná, Brazil",
    linkedin: "wesley-raymundo"
}

const games = [
    {
        title: "STEM Play",
        access: "Android",
        genre: "Educational Hub",
        company: "Happy S.A.",
        outcomes: [
            "Colaborating with and supporting a team of 4 developers and 1 artist",
            "Design, prototype and collaborate with new gameplay mechanics and level designs",
            "Handle scrum dailies, plannings, reviews and retrospectives",
            "Communicate goals and needs between business, departments, and the development team",
            "Offer trainings for hard and soft skills, give feedbacks",
            "Present live trainings and reports"
        ],
        callActionLabel: "Watch Gameplay",
        callActionUrl: "#",
        imageUrl: "images/stemplay-large.webp"
    },
    {
        title: "Kukoos: Lost Pets",
        access: "Steam",
        genre: "3D Platformer",
        company: "Petit Fabrik",
        outcomes: [
            "Actor Setup and AI of 3 Enemy Characters",
            "Actor Setup and Piloting Experience of a Broadcast Chopper and Bomber Airplane",
            "General Gameplay and Level Design Improvements"
        ],
        callActionLabel: "Watch Teaser",
        callActionUrl: "#",
        imageUrl: "images/kukoos-large.webp"
    },
    {
        title: "A Jornada da Graciosa",
        access: "itch.io",
        genre: "Exploration and Turn Based Combat",
        company: "HoytHoy",
        outcomes: [
            "Dialog System, Tutorial System, Interactables, Highlighting",
            "Narrative Screen, General UI",
            "Models, Animations, and VFX setup",
            "General gameplay improvements",
            "Tools and shortcuts that eases and speed up team's work",
            "Version control through Git, Bitbucket and SourceTree"
        ],
        callActionLabel: "Watch Gameplay",
        callActionUrl: "#",
        imageUrl: "images/graciosa-large.webp"
    },
    {
        title: "Say It! - Game",
        access: "Microsoft Store",
        genre: "Voice-controlled Endless Runner",
        company: "Mustache Games",
        outcomes: [
            "Endless Runner Gameplay",
            "Access's to Windows Phone Voice Recognition",
            "Facebook Friends Ranking",
            "Player Level Progression",
            "In-app Purchases Store",
            "Mission System",
            "Camera Moves",
            "Mecanim Animation Setup",
            "UI Animations with Tweeners",
            "Particle System Effects",
            "FPS, Memory and Build Size Optmizations​",
            "Version Control through Visual Studio (TFVC - Team Foudation Version Control)",
            "( Art Assets: Alexandre Nowacki )",
        ],
        callActionLabel: "Watch Gameplay",
        callActionUrl: "#",
        imageUrl: "images/sayit-large.webp"
    }
]

setupMenu();
fillProfessionalLabels(professional);
fillGamesSection(games);

function setupMenu() {
    const menuButton = document.querySelector("#menuButton");
    const navElement = document.querySelector("header nav");

    menuButton.addEventListener("click", e => {
        navElement.classList.toggle("hidden");
    });
}

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
                <img src="${g.imageUrl}" alt="${g.title} image" lazy>
            </picture>
            <h3>${g.title}</h3>
            <p>[ ${g.access} ]</p>
            <p>${g.genre}</p>
            <p>- ${g.company} -</p>
            <p><b>Contributions:</b></p>
            <ul>
                ${outcomeItems}
            </ul>
            <a href="${g.callActionUrl}" class="gameCallAction">${g.callActionLabel}</a>
        `;
    
        gamesSection.appendChild(article);
    })
}

