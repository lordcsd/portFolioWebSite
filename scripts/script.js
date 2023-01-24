var initialStyle = "";

let skillsContainer = document.querySelector(".cardContain");

let skills = [
  {
    title: "Full-Stack Developer: Backend Intensive",
    description: `Passionate about software development, as a result
     have years of experience in Software development, and have worked 
     on web frontend, mobile and Backend software products.`,
  },
];

skills.forEach((skill) => {
  let someCard = document.createElement("div");
  someCard.className = "someCard";
  let header = document.createElement("h1");
  let description = document.createElement("p");

  header.innerHTML = skill.title;
  description.innerHTML = skill.description;

  someCard.appendChild(header);
  someCard.appendChild(description);
  skillsContainer.appendChild(someCard);
});

let technologiesContain = document.querySelector(".technologies");

let technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "NestJS",
  "TypesScript",
  "Flutter",
  "MongoDB",
  "Git",
  "SQL",
  "inkscape",
];

technologies.forEach((each) => {
  let p = document.createElement("p");
  p.innerText = each;
  technologiesContain.append(p);
});

let initialHeaderStyle = ``;
