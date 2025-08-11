const modalCloseButton = document.querySelector(".popup__x-popup");
const popup = document.querySelector(".overlay");
const modalOpenButton = document.querySelector(".profile__button-edit-name");
const initialCards = [
  {
    name: "Praia de Itamambuca-Ubatuba-SP",
    image: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2023/01/Ubatuba-Melhores-Praias-Capa.jpg"
  }
];

const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardsWrapper = document.querySelector(".photo-grid");

function createCard(data){
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".photo-grid__name");
  const cardImage = cardElement.querySelector(".photo-grid__item");
console.log(cardElement)
console.log(cardImage)
  cardImage.src = data.image;
  cardImage.alt = data.name;

  cardTitle.textContent = data.name;

  return cardElement;
}

function renderCard(data, wrap) {
  wrap.prepend(createCard(data))
  console.log(wrap)
}

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

initialCards.forEach((card) => {
  renderCard(card, cardsWrapper)
})




