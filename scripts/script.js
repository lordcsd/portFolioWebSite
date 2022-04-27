var initialStyle = "";

let skillsContainer = document.querySelector(".cardContain");

let skills = [
  {
    title: "Full-Stack Developer",
    description: `Passionate about software development, as a result
     have years of experience in Software development, and have worked 
     on web frontend, mobile and Back-end software products.`,
  },
  {
    title: "3D Animator",
    description: `Started out in the technology world as a 3D animator,
     using mostly <b>Blender</b> which is an Open-Source 3D animation, Texturing,
      Motion-Graphics and etc tool, for over two years before a total switch
     to software development.`,
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
  "Blender 3D",
  "inkscape",
];

technologies.forEach((each) => {
  let p = document.createElement("p");
  p.innerText = each;
  technologiesContain.append(p);
});

let initialHeaderStyle = ``;
