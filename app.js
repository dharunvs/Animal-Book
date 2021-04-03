let pages = ["dinosaur", "elephant", "penguin", "giraffe", "bear"];

function createCard() {
  const wrapper = document.getElementById("links");

  for (i in pages) {
    const a = document.createElement("a");
    a.href = "pages/" + pages[i].toLowerCase() + ".html";
    const div = document.createElement("div");
    div.classList.add("link");
    div.innerText = pages[i].charAt(0).toUpperCase() + pages[i].slice(1);

    a.appendChild(div);
    wrapper.appendChild(a);
  }
}

createCard();

function redirect() {
  const animalName = document.getElementById("animal");

  state = false;
  for (i in pages) {
    if (animalName.value.toLowerCase() === pages[i]) {
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
