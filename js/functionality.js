const cat_show = document.getElementById("show-cat");
const dog_show = document.getElementById("show-dog");
const cow_show = document.getElementById("show-cow");
const cat_hide = document.getElementById("hide-cat");
const dog_hide = document.getElementById("hide-dog");
const cow_hide = document.getElementById("hide-cow");

// Add event listeners to the buttons
// We just alter the style property of visibility on each of them to ensure they keep their space on the page while hidden
cat_show.addEventListener("click", () => {
  document.querySelector(".columns .box.cat").style.visibility = "visible";
});

dog_show.addEventListener("click", () => {
  document.querySelector(".columns .box.dog").style.visibility = "visible";
});

cow_show.addEventListener("click", () => {
  document.querySelector(".columns .box.cow").style.visibility = "visible";
});

cat_hide.addEventListener("click", () => {
  document.querySelector(".columns .box.cat").style.visibility = "hidden";
});

dog_hide.addEventListener("click", () => {
  document.querySelector(".columns .box.dog").style.visibility = "hidden";
});

cow_hide.addEventListener("click", () => {
  document.querySelector(".columns .box.cow").style.visibility = "hidden";
});
