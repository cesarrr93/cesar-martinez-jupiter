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
//
// Message form Functionallity
//

// Selec the form, messages list container and message section
const form = document.querySelector(".message-form");
const messageList = document.getElementById("message-list");
const messageSection = document.getElementById("message-section");

// Empty Array to store messages
let messages = []; //Used let because size will change constantly

// Function to display messages
function displayMessages() {
  // // Clears current message list
  messageList.innerHTML = "";

  // if there are no messages, hide the message section
  if (messages.length === 0) {
    messageSection.style.display = "none";
  } else {
    //Show message section
    messageSection.style.display = "block";

    // llop through the messages array and create Html for each message
    messages.forEach((message, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("message-item");

      listItem.innerHTML = `
        <p><strong>${message.userName}</strong>: ${message.userMessage}</p>
        <button onclick="editMessage(${index})">Edit</button>
        <button onclick="removeMessage(${index})">Remove</button>
      `;
      messageList.appendChild(listItem);
    });
  }
}

// Function to handle form
form.addEventListener("submit", (event) => {
  //Prevents the form from submiting
  event.preventDefault();

  // Obtain form values
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userMessage = document.getElementById("userMessage").value;

  //Create a message object
  const message = {
    userName,
    userEmail,
    userMessage,
  };

  // Pushes message to message array
  messages.push(message);

  // Display the updated messages
  displayMessages();

  // clear form
  form.reset();
});

// console.log(messages);

// function to edit a message
function editMessage(index) {
  // Select message to be edited
  const messageToEdit = messages[index];

  // Populate updated info to correct message
  document.getElementById("userName").value = messageToEdit.userName;
  document.getElementById("userEmail").value = messageToEdit.userEmail;
  document.getElementById("userMessage").value = messageToEdit.userMessage;

  // Remove the message from the array
  messages.splice(index, 1);

  // update display messages
  displayMessages();
}

// function to remove message
function removeMessage(index) {
  // removes message from array
  messages.splice(index, 1);

  //Update the display messages
  displayMessages();
}

// Initially hide the message section if there are no messages
displayMessages();
