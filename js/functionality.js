const picture_box = document.querySelectorAll(".columns .hidden-box");
const cat_button = document.getElementById("cat");
const dog_button = document.getElementById("dog");
const cow_button = document.getElementById("cow");
 

// Add event listeners to the buttons
cat_button.addEventListener("click", () => {
    document.querySelector(".columns .hidden-box.cat").classList.remove("hidden");
});

dog_button.addEventListener("click", () => {
    document.querySelector(".columns .hidden-box.dog").classList.remove("hidden");
});

cow_button.addEventListener("click", () => {
    document.querySelector(".columns .hidden-box.cow").classList.remove("hidden");
});