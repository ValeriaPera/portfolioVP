const greetingAboutMe = document.querySelector(".greeting-about-me")
const greetingMyWork = document.querySelector(".greeting-my-work")
const greetingContactMe = document.querySelector(".greeting-contact-me")

function changeDOMContent(DOMelement, newContent, event) {
  DOMelement.addEventListener(event, () => {
    DOMelement.textContent = newContent;

  })
}

changeDOMContent(greetingAboutMe, "About me", "mouseover")
changeDOMContent(greetingAboutMe, "Hello", "mouseout")
changeDOMContent(greetingMyWork, "My work", "mouseover")
changeDOMContent(greetingMyWork, "I´m", "mouseout")
changeDOMContent(greetingContactMe, "Contact me", "mouseover")
changeDOMContent(greetingContactMe, "Valeria", "mouseout")

/* 
  {
    title:,
    URL:,
    IMG:,
    tags:,
  },
 */
const projects = [
  {
    title: "Cats",
    URL: "https://valeriapera.github.io/ADA-IT/JS/buscadorGatitosVale",
    IMG: "buscadorDeGatitos.png",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Movie App",
    URL: "https://movies-ada-vp.netlify.app/",
    IMG: "movieApp.png",
    tags: ["HTML", "CSS", "JS", "REACT"],
  },
  {
    title: "Huddle Landing Page",
    URL: "https://valeriapera.github.io/ADA-IT/HTML-CSS/TP12%20Huddle%20Landing%20page",
    IMG: "huddleLanding.png",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Comunidad Tekorá",
    URL: "https://valeriapera.github.io/ComunidadTekora/tekoraFinal.html",
    IMG: "tekora.png",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Piedra, Papel y Tijera",
    URL: "https://valeriapera.github.io/PiedraPapelTijera/",
    IMG: "piedraPapelTijera.png",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Tracking Landing Page",
    URL: "https://valeriapera.github.io/ADA-IT/HTML-CSS/TP8%20Proyect%20Trackig/",
    IMG: "trackingLanding.png",
    tags: ["HTML", "CSS"],
  },
]

const tagsStyles = {
  "HTML": "html-tag",
  "CSS": "css-tag",
  "JS": "js-tag",
  "REACT": "react-tag",


}
function createSpan(tags) {
  return tags.map((tag) => {
    return (
      `<span class="tag ${tagsStyles[tag]}">${tag}</span>`
    )

  })
}
function createProjectCard(projectInfo) {
  return (
    `<a href="${projectInfo.URL}"       class="project-link" target="_blank">
      <div class="my-project-card">
        <img class="project-img" src="images/projects-img/${projectInfo.IMG}" alt="${projectInfo.title}">
        <div class="project-info"> 
          <h3 class="project-title">${projectInfo.title}</h3>
          <div class="project-tags">
          ${createSpan(projectInfo.tags).join(" ")}
          </div>
        </div>
      </div>
    </a>`
  )
}


const projectsContainer = document.querySelector(".projects-container")

projectsContainer.innerHTML = projects.map((project) => {
  return createProjectCard(project)
}).join("")