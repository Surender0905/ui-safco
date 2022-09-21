const icons = document.querySelector(".hamburger");
icons.addEventListener("click", (event) => {
  document.querySelector(".nav").classList.toggle("nav-active");

  icons.classList.toggle("open");
});

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

// const image = document.getElementById("abt-img");

// window.addEventListener("load", image.classList.add("full"));

///////////////////////////////word animation
// const heading = document.querySelector("#heading");
// const characters = heading.textContent.match(/[\w\W]/g); //Get the texts and create an array.
// heading.textContent = ""; //Empty the contents.

// // Loop through each character and push it inside heading element as a new span element.
// characters.forEach((char) => {
//   const span = document.createElement("span");
//   span.textContent = char;
//   heading.appendChild(span);
// });

// // Create charcter count variable and set timer with new function called setChar().
// let char = 0;
// let timer = setInterval(setChar, 100);

// //Stop the interval when all characters are rendered else set character span class to fade.
// function setChar() {
//   const spanChar = document.querySelectorAll("span")[char];
//   spanChar.className = "fade";
//   char++;
//   char === characters.length && clearInterval(timer);
// }

//////////////////////////////
