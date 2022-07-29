window.addEventListener("DOMContentLoaded", () => {
  const photoContainer = document.querySelector(".photo-container");
  photoContainer.style.backgroundImage = `url(${images[0].file})`;

  const contentDiv = document.createElement("div");

  const contentTilte = document.createElement("h2");
  contentTilte.textContent = images[0].title;

  const contentText = document.createElement("p");
  contentText.textContent = images[0].description;

  contentDiv.setAttribute("class", "content-div"); // add class to div

  contentDiv.appendChild(contentTilte);
  contentDiv.appendChild(contentText);
  photoContainer.appendChild(contentDiv);

  const thumbnails = document.querySelector(".thumbnails"); // get thumbnails

  // create thumbnails by looping through images array and creating img elements for each image in array and adding them to thumbnails div
  for (let i = 0; i < images.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundImage = `url(${images[i].file})`;
    newDiv.setAttribute("class", "thumbnail-item");
    thumbnails.appendChild(newDiv);
  }

  document.querySelectorAll(".thumbnail-item")[0].classList.add("selected");

  // add event listener to thumbnails to listen for click
  document.querySelectorAll(".thumbnail-item").forEach((div, i) => {
    div.addEventListener("click", () => {
      photoContainer.style.backgroundImage = `url(${images[i].file})`;
      contentTilte.textContent = images[i].title;
      contentText.textContent = images[i].description;
      counter = i;
    });
  });

  // add event listener to left and right arrows to listen for click event and change background image and content
  document.querySelectorAll(".thumbnail-item").forEach((div) => {
    div.addEventListener("click", (e) => {
      const selected = document.querySelector(".selected");
      selected.classList.remove("selected");
      e.target.classList.add("selected");
    });
  });

  const previousButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let counter = 0;

  // add event listener to previous button
  nextButton.addEventListener("click", () => {
    counter++;
    // if counter is greater than images array length, set counter to 0
    if (counter === images.length) {
      counter = 0;
    }
    photoContainer.style.backgroundImage = `url(${images[counter].file})`;
    contentTilte.textContent = images[counter].title;
    contentText.textContent = images[counter].description;
    const selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    document.querySelectorAll(".thumbnail-item")[counter].classList.add("selected");
  });

  // add event listener to next button
  previousButton.addEventListener("click", () => {
    counter--;
    // if counter is less than 0, set counter to last image in array
    if (counter === -1) {
      counter = images.length - 1;
    }
    photoContainer.style.backgroundImage = `url(${images[counter].file})`;
    contentTilte.textContent = images[counter].title;
    contentText.textContent = images[counter].description;
    const selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    document.querySelectorAll(".thumbnail-item")[counter].classList.add("selected");
  });
});
