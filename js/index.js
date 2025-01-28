console.log("js file is working");

// Creating Footer
const footer = document.createElement("footer");
// Selecting body
const body = document.querySelector("body");
// Adding footer to body
body.appendChild(footer);

// Create date
const today = new Date();
// Storing Current Year
const thisYear = today.getFullYear();

// Adding Copyright and year to footer
const copyright = document.createElement("p");
// adding text to p tag
copyright.textContent = `© Cesar Martinez ${thisYear}`;

// adding copyright to footer
footer.appendChild(copyright);

// Skill section

// Array of skills
const skills = ["HTML", "Java Script", "CSS"];
const skillSection = document.getElementById("skills");
const skillList = skillSection.querySelector("ul");

// Loop to populate skill section
for (i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.textContent = skills[i];
  skillList.appendChild(skill);
}
