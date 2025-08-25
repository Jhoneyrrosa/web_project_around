// index.js — sem a lógica de mensagens (isso está no validate.js)

const modalCloseButton = document.querySelector(".popup__x-popup");
const popup = document.querySelector(".overlay");
const modalOpenButton = document.querySelector(".profile__button-edit-name");
const addButton = document.querySelector(".profile__button-add");
const closeAddCardButton = document.querySelector(".popup-add-photo__x-popup");
const cardPopup = document.querySelector(".popup-add-photo");
const popupImage = document.querySelector(".popup-image");
const popupImageFull = document.querySelector(".popup-image__full");
const popupImageClose = document.querySelector(".popup-image__close");
const popupImageDescription = document.querySelector(".popup-image__description");

// ----- Popup de imagem
function abrirPopupImagem(src, alt) {
  popupImageFull.src = src;
  popupImageFull.alt = alt;
  popupImageDescription.textContent = alt;
  popup.classList.remove("isOpen"); // garante que não conflita
  popupImage.classList.add("isOpen");
}

popupImageClose.addEventListener("click", () => {
  popupImage.classList.remove("isOpen");
});

// ----- Dados iniciais
const initialCards = [
  {
    name: "Praia de Itamambuca-Ubatuba-SP",
    image:
      "https://www.viagenscinematograficas.com.br/wp-content/uploads/2023/01/Ubatuba-Melhores-Praias-Capa.jpg",
  },
  {
    name: "Isla del sol - Bolívia",
    image:
      "https://cdn.pixabay.com/photo/2013/11/09/02/11/bolivia-207674_1280.jpg",
  },
  {
    name: "Miami- USA",
    image: "https://cdn.pixabay.com/photo/2015/08/11/18/45/miami-885032_1280.jpg",
  },
  {
    name: "Ilha de Mallorca - Espanha",
    image: "https://cdn.pixabay.com/photo/2013/05/26/09/07/palma-113712_1280.jpg",
  },
  {
    name: "Owl City - Canadá",
    image: "https://cdn.pixabay.com/photo/2019/08/02/23/09/man-4380804_1280.jpg",
  },
  {
    name: "Swazland - Africa do sul",
    image:
      "https://cdn.pixabay.com/photo/2017/02/17/08/23/giraffe-2073609_1280.jpg",
  },
];

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsWrapper = document.querySelector(".photo-grid");

// ----- Criação e render de cards
function generateCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".photo-grid__name");
  const cardImage = cardElement.querySelector(".photo-grid__item");
  const coracao = cardElement.querySelector(".photo-grid__coracao");
  const lixeira = cardElement.querySelector(".photo-grid__trash");

  cardImage.src = data.image;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  configurarDelete(lixeira);
  coracao.addEventListener("click", handleLike);

  cardImage.addEventListener("click", () =>
    abrirPopupImagem(cardImage.src, cardImage.alt)
  );
  return cardElement;
}

const handleLike = (event) => {
  event.target.classList.toggle("photo-grid__coracao-active");
};

function renderCard(data, wrap) {
  wrap.prepend(generateCard(data));
}

// ----- Popups: perfil
function closeProfileModal() {
  popup.classList.remove("isOpen");
}

function openProfileModal() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  popupImage.classList.remove("isOpen");
  popup.classList.add("isOpen");

  // revalida depois de preencher via JS
  if (window.refreshPopupForm) window.refreshPopupForm(".popup__form");
}

modalOpenButton.addEventListener("click", openProfileModal);
modalCloseButton.addEventListener("click", closeProfileModal);

// ----- Popups: add card
function closeAddCardModal() {
  cardPopup.classList.remove("isOpen");
}

function openAddCardModal() {
  cardPopup.classList.add("isOpen");
  // ao abrir, revalida (inputs possivelmente vazios -> botão desativado + mensagens)
  if (window.refreshPopupForm) window.refreshPopupForm(".popup-add-photo__form");
}
addButton.addEventListener("click", openAddCardModal);
closeAddCardButton.addEventListener("click", closeAddCardModal);

// ----- Submit de novo card
const cardNameInput = document.querySelector(".popup-add-photo__input-lugar");
const cardImageInput = document.querySelector(".popup-add-photo__input-link");
const cardpopup = document.querySelector(".popup-add-photo__form");
const cardpopupwrapper = document.querySelector(".popup-add-photo__form");

function createCard(evt) {
  evt.preventDefault();

  renderCard(
    { name: cardNameInput.value, image: cardImageInput.value },
    cardsWrapper
  );

  closeAddCardModal();
  cardpopup.reset();
  if (window.refreshPopupForm) window.refreshPopupForm(".popup-add-photo__form");
}

cardpopupwrapper.addEventListener("submit", createCard);

// ----- Like com troca de imagem (se usar img de coração)
const coracaoVazio = "./images/photo-grid/Coracao.jpg";
const coracaoCheio = "./images/photo-grid/coracao-cheio.png";

function configurarLike(coracao) {
  coracao.addEventListener("click", () => {
    const curtido = coracao.getAttribute("data-like") === "true";
    if (curtido) {
      coracao.src = coracaoVazio;
      coracao.setAttribute("data-like", "false");
    } else {
      coracao.src = coracaoCheio;
      coracao.setAttribute("data-like", "true");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const coracoes = document.querySelectorAll(".photo-grid__coracao");
  coracoes.forEach(configurarLike);
});

// ----- Excluir card
function configurarDelete(lixeira) {
  lixeira.addEventListener("click", () => {
    const card = lixeira.closest(".card");
    card.remove();
  });
}

// ----- Perfil: submit
const inputName = document.querySelector(".popup__input-name");
const inputOccupation = document.querySelector(".popup__input-occupation");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const form = document.querySelector(".popup__form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  popup.classList.remove("isOpen");
});

// Preencher inputs com valores atuais
inputName.value = profileName.textContent;
inputOccupation.value = profileOccupation.textContent;

// Render inicial
initialCards.forEach((card) => renderCard(card, cardsWrapper));

// ====== Inicializa validação (definida em validate.js)
document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.initPopupValidation === "function") {
    window.initPopupValidation([
      { form: ".popup__form", submit: ".popup__button-save" },
      { form: ".popup-add-photo__form", submit: ".popup-add-photo__button-criar" },
    ]);
  }
});

// ----- Fechar ao clicar fora (para overlays com classe .overlay)
function closeModal(popupEl) {
  popupEl.classList.remove("isOpen");
}
function handlePopupClose(evt) {
  if (evt.target === evt.currentTarget) closeModal(evt.currentTarget);
}
const popupList = document.querySelectorAll(".overlay");
popupList.forEach((item) => item.addEventListener("click", handlePopupClose));

// ----- Fechar com Esc
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAddCardModal();
    closeModal(popupImage);
    closeProfileModal();
  }
});
