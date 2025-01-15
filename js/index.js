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
copyright.textContent = ` &copy; Cesar Martinez ${thisYear}`

// adding copyright to footer
footer.appendChild(copyright);

