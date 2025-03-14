function displayRamens() {
  const ramenMenuDiv = document.getElementById("ramen-menu");

  ramens.forEach(function (ramen) {
    //
    const ramenImage = document.createElement("img"); //<img> element for each ramen
    ramenImage.src = ramen.image;

    ramenImage.classList.add("ramen-image"); //styling class

    // event listener for click on the image
    ramenImage.addEventListener("click", () => handleClick(ramen));

    ramenMenuDiv.appendChild(ramenImage);
  });
}

// ramen detail display section
function handleClick(ramen) {
  const ramenDetailDiv = document.getElementById("ramen-detail");
  ramenDetailDiv.innerHTML = "";

  const ramenImage = document.createElement("img");
  ramenImage.src = ramen.image;
  ramenImage.classList.add("ramen-detail-image");
  ramenDetailDiv.appendChild(ramenImage);

  const ramenName = document.createElement("h3");
  ramenName.textContent = ramen.name;

  const ramenRestaurant = document.createElement("h3");
  ramenRestaurant.textContent = `Restaurant: ${ramen.restaurant}`;

  const ramenRating = document.createElement("p");
  ramenRating.textContent = `Rating: ${ramen.rating}`;

  const ramenComment = document.createElement("p");
  ramenComment.textContent = `Comment: ${ramen.comment}`;

  ramenDetailDiv.appendChild(ramenName);
  ramenDetailDiv.appendChild(ramenRestaurant);
  if (ramen.rating) ramenDetailDiv.appendChild(ramenRating);
  if (ramen.comment) ramenDetailDiv.appendChild(ramenComment);
}

displayRamens();
