function openNewPage(event) {
  let pageToOpen = event.currentTarget.getAttribute("data-page");

  if (pageToOpen) {
    window.open(pageToOpen, "_blank");
  } else {
    console.error("No page specified to open.");
  }
}

const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", openNewPage);
}
