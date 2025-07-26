const modalCloseButton = document.querySelector(".popup__x-popup");
const popup = document.querySelector(".overlay");
const modalOpenButton = document.querySelector(".profile__button-edit-name");

function closeModal() {
  popup.classList.remove("popup-isOpen");
}

modalOpenButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);

const inputName = document.querySelector(".popup__input-name");
const inputOccupation = document.querySelector(".popup__input-occupation");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const form = document.querySelector(".popup__form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;

  popup.classList.remove("popup-isOpen");
});

function openModal() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  popup.classList.add("popup-isOpen");
}

inputName.value = profileName.textContent;
inputOccupation.value = profileOccupation.textContent;




