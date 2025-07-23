const modalCloceButton = document.querySelector(".popup__x-popup");
const popup = document.querySelector(".overlay");
const modalOpenButton = document.querySelector(".profile__button-edit-name");

function closeModal() {

   popup.classList.remove("popup-isOclose");
}

modalCloceButton.addEventListener("click", closeModal);

function openModal() {

    popup.classList.add("popup-isOclose");
}

modalOpenButton.addEventListener("click", openModal);
