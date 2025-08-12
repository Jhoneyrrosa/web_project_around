const modalCloseButton = document.querySelector(".popup__x-popup");
const popup = document.querySelector(".overlay");
const modalOpenButton = document.querySelector(".profile__button-edit-name");
const addButton = document.querySelector(".profile__button-add");
const closeAddCardButton = document.querySelector(".popup-add-photo__x-popup");
const cardPopup = document.querySelector(".popup-add-photo");
const initialCards = [
  {
    name: "Praia de Itamambuca-Ubatuba-SP",
    image: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2023/01/Ubatuba-Melhores-Praias-Capa.jpg"
  },
  {
    name:"Isla del sol - Bolívia",
    image:"https://cdn.pixabay.com/photo/2013/11/09/02/11/bolivia-207674_1280.jpg"
  },
  {
    name:"Miami- USA",
    image:"https://cdn.pixabay.com/photo/2015/08/11/18/45/miami-885032_1280.jpg"
  },

  {
    name:"Ilha de Mallorca - Espanha",
    image:"https://cdn.pixabay.com/photo/2013/05/26/09/07/palma-113712_1280.jpg"
  },
  {
    name:"Owl City - Canadá",
    image:"https://cdn.pixabay.com/photo/2019/08/02/23/09/man-4380804_1280.jpg"
  },
  {
    name:"Swazland - Africa do sul",
    image:"https://cdn.pixabay.com/photo/2017/02/17/08/23/giraffe-2073609_1280.jpg"
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

function closeProfileModal() {
  popup.classList.remove("popup-isOpen");
}

function openProfileModal() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  popup.classList.add("popup-isOpen");
}

modalOpenButton.addEventListener("click", openProfileModal);
modalCloseButton.addEventListener("click", closeProfileModal);


function closeAddCardModal() {
  cardPopup.classList.remove("popup-add-photo-isOpen");
}

function openAddCardModal() {
  cardPopup.classList.add("popup-add-photo-isOpen");
}
addButton.addEventListener("click",  openAddCardModal);
closeAddCardButton.addEventListener("click", closeAddCardModal);

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


inputName.value = profileName.textContent;
inputOccupation.value = profileOccupation.textContent;

initialCards.forEach((card) => {
  renderCard(card, cardsWrapper)
})




