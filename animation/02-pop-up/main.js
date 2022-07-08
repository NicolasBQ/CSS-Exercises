const openBtn = document.querySelector("[data-open-btn]");
const closeBtn = document.querySelector("[data-close-btn]");
const popUp = document.querySelector("[data-pop-up]");
const overlay = document.querySelector("[data-overlay]");

const openPopUp = (e) => {
  popUp.classList.add("pop-up_active");
  overlay.classList.add("overlay-active");
};

const closePopUp = () => {
  popUp.classList.remove("pop-up_active");
  overlay.classList.remove("overlay-active");
};

openBtn.addEventListener("click", openPopUp);
closeBtn.addEventListener("click", closePopUp);
