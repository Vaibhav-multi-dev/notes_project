const sectionContainer = document.querySelector(".section-selector");
const sectionSelector = document.querySelector("#topic");
const htmlSections = document.querySelectorAll(".html-section");
const jokesPara = document.querySelector("#coding-jokes p")

sectionSelector.addEventListener('input', () => {
    console.log(sectionSelector.value);
    if (sectionSelector.value === "html") {
        for (section of htmlSections) {
        }
    }
})

config = { Accept: "application/json" }

//Jokes API setup
// axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
//     .then(elem => {
//         console.log(elem);
//         console.log(elem.data.joke);
//         jokesPara.innerText = elem.data.joke;
//     })


// Creating and adding a class dynamically
// const style = document.createElement('style');
// style.type = 'text/css';
// style.innerHTML = '.htmlSec { display: inline-block }';
// document.getElementsByTagName('head')[0].appendChild(style);

// document.getElementById('someElementId').className = 'htmlSec';



