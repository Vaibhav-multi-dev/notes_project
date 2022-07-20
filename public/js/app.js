const topicSelector = document.querySelector("#topic-selector");
const topicSections = document.querySelectorAll(".section-selector section");

topicSelector.addEventListener('change', (e) => {
    console.log(e.target.value);
    if (e.target.value === "") return;
    for (section of topicSections) {
        if (section.dataset.topic === e.target.value) {
            section.style.display = "flex";
        }
        else {
            section.style.display = "none";
        }
    }
})
