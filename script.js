window.addEventListener("scroll", (e) => {
  // console.log(window.scrollY);
});

var initialStyle = "";

let skillsContainer = document.querySelector(".cardContain");

let skills = [
  {
    title: "Full-Stack Developer",
    description: `Passionate about software development, as a result
     has years of experience in Software development, having worked 
     in web technologies and Back-end 
     technologies, Also has expirience in Mobile Development `,
  },
  {
    title: "3D Animator",
    description: `Started out in the technology universe as a 3D animator,
     using mostly <b>Blender</b> which is an Open-Source 3D animation, Texturing,
      Motion-Graphics tool and used for several other purposes`,
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
