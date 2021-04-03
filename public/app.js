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
  const error = document.getElementById("error");

  state = false;
  for (i in pages) {
    if (animalName.value.toLowerCase() === pages[i]) {
      state = "valid";
      break;
    } else if (animalName.value.trim() === "") {
      state = "empty";
    }
  }
  if (state === "valid") {
    location.href = "pages/" + animalName.value + ".html";
  } else if (state === "empty") {
    animalName.value = "";
    error.innerText = "Enter something";
  } else {
    animalName.value = "";
    error.innerText = "Not Found";
  }
}
