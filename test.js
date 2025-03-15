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

// form section

function addSubmitListener() {
  const form = document.getElementById("new-ramen-form");

  if (!form) {
    console.error("New ramen form not found!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const newRamen = {
      name: document.getElementById("name").value,
      restaurant: document.getElementById("restaurant").value,
      rating: document.getElementById("rating").value,
      comment: document.getElementById("comment").value,
      image: document.getElementById("image").value,
    };

    // Basic validation
    if (!newRamen.name || !newRamen.restaurant || !newRamen.image) {
      alert("Please fill out all required fields.");
      return;
    }

    const ramenMenuDiv = document.getElementById("ramen-menu");

    if (!ramenMenuDiv) {
      console.error("Ramen menu div not found!");
      return;
    }

    const ramenImage = document.createElement("img");
    ramenImage.src = newRamen.image;
    ramenImage.classList.add("ramen-image");
    ramenImage.addEventListener("click", () => handleClick(newRamen));
    ramenMenuDiv.appendChild(ramenImage);

    form.reset(); // Reset the form after submission
  });
}

displayRamens();
addSubmitListener();
