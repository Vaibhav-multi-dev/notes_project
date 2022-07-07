const topics = document.querySelectorAll("[data-topic]");
const topicSelector = document.querySelector("#topic-selector");
const allTopics = document.querySelectorAll(".section-selector  a")
const topicSections = document.querySelectorAll(".section-selector section");

// topics[0].dataset.topic
// allTopics[0].dataset.topic

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
