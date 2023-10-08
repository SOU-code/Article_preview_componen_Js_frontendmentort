const share = document.querySelector(".share");
const shareClick = document.querySelector(".share-click");
const triangleDown = document.querySelector(".triangle-down");
const shareImg = document.querySelector(".shareImg");
const profile = document.querySelector(".profile");
const footer = document.querySelector(".footer");
const leftSide = document.querySelector(".left-side");
document.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    e.target == share ||
    e.target.parentElement == share ||
    e.target.parentElement.parentElement == share ||
    e.target == shareClick ||
      e.target.parentElement == shareClick
  ) {
    if (window.outerWidth < 768) {
        profile.style.display = "none";
        shareClick.classList.add("share-clicked");
        footer.style.backgroundColor = "hsl(217, 19%, 35%)";
    } else {
      shareClick.style.display = "flex";
      share.style.backgroundColor = "hsl(217, 19%, 35%)";
      shareImg.style.fill = "hsl(0, 0%, 89%)";
      triangleDown.style.display = "block";
    }
  } else {
    if (window.outerWidth < 768) {
        profile.style.display = "flex";
        shareClick.classList.remove("share-clicked");
        footer.style.backgroundColor = "hsl(255, 100%, 100%)";
    } else {
      shareClick.style.display = "none";
      share.style.backgroundColor = "hsl(0, 0%, 89%)";
      shareImg.style.fill = "hsl(217, 19%, 35%)";
      triangleDown.style.display = "none";
    }
  }
});
