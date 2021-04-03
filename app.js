let pages = ["dinosaur", "elephant", "penguin"];
function redirect() {
  const animalName = document.getElementById("animal");

  state = false;
  for (i in pages) {
    if (animalName.value === pages[i]) {
      state = true;
      break;
    }
  }
  if (state) {
    location.href = "pages/" + animalName.value + ".html";
  } else {
    animalName.value = "";
  }
}
