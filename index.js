function displayRamens() {
  const ramenMenuDiv = document.getElementById("ramen-menu");

  ramens.forEach(function (ramen) {
    //
    const ramenImage = document.createElement("img"); //<img> element for each ramen
    ramenImage.src = ramen.image;

    ramenImage.classList.add("ramen-image"); //styling class
    ramenMenuDiv.appendChild(ramenImage);
  });
}
displayRamens();
