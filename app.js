const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
/* New Modal attempt*/
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".container img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach(preview => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    original.classList.add("open");
    //dynamic change text and image
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./images/${originalSrc}` ;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener("click", (e) => {
  if(e.target.classList.contains('modal')){
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});