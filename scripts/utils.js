export const initialCards = [
  { name: "Praia de Itamambuca-Ubatuba-SP", image: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2023/01/Ubatuba-Melhores-Praias-Capa.jpg" },
  { name: "Isla del sol - Bolívia", image: "https://cdn.pixabay.com/photo/2013/11/09/02/11/bolivia-207674_1280.jpg" },
  { name: "Miami- USA", image: "https://cdn.pixabay.com/photo/2015/08/11/18/45/miami-885032_1280.jpg" },
  { name: "Ilha de Mallorca - Espanha", image: "https://cdn.pixabay.com/photo/2013/05/26/09/07/palma-113712_1280.jpg" },
  { name: "Owl City - Canadá", image: "https://cdn.pixabay.com/photo/2019/08/02/23/09/man-4380804_1280.jpg" },
  { name: "Swazland - Africa do sul", image: "https://cdn.pixabay.com/photo/2017/02/17/08/23/giraffe-2073609_1280.jpg" }
];


// // index,js guardado!
// // index.js (type="module")

// import { initialCards } from './utils.js';
// import { generateCard } from './card.js';

// // Elements
// const modalCloseButton = document.querySelector('.popup__x-popup');
// const popup = document.querySelector('.overlay');
// const modalOpenButton = document.querySelector('.profile__button-edit-name');
// const addButton = document.querySelector('.profile__button-add');
// const closeAddCardButton = document.querySelector('.popup-add-photo__x-popup');
// const cardPopup = document.querySelector('.popup-add-photo');

// const popupImage = document.querySelector('.popup-image');
// const popupImageFull = document.querySelector('.popup-image__full');
// const popupImageClose = document.querySelector('.popup-image__close');
// const popupImageDescription = document.querySelector('.popup-image__description');

// const cardsWrapper = document.querySelector('.photo-grid');

// const cardNameInput = document.querySelector('.popup-add-photo__input-lugar');
// const cardImageInput = document.querySelector('.popup-add-photo__input-link');
// const cardForm = document.querySelector('.popup-add-photo__form');

// const inputName = document.querySelector('.popup__input-name');
// const inputOccupation = document.querySelector('.popup__input-occupation');
// const profileName = document.querySelector('.profile__name');
// const profileOccupation = document.querySelector('.profile__occupation');
// const profileForm = document.querySelector('.popup__form');

// // Image popup
// function abrirPopupImagem(src, alt) {
//   popupImageFull.src = src;
//   popupImageFull.alt = alt;
//   popupImageDescription.textContent = alt;
//   popup.classList.remove('isOpen');
//   popupImage.classList.add('isOpen');
// }
// popupImageClose.addEventListener('click', () => popupImage.classList.remove('isOpen'));

// // Like (classe)
// function handleLike(event) {
//   event.target.classList.toggle('photo-grid__coracao-active');
// }

// // Delete
// function handleDelete(cardEl) {
//   cardEl.remove();
// }

// // Render card
// function renderCard(data, wrap) {
//   const cardEl = generateCard(data, {
//     onImageClick: abrirPopupImagem,
//     onLike: handleLike,
//     onDelete: handleDelete
//   });
//   wrap.prepend(cardEl);
// }

// // Profile popup
// function closeProfileModal() { popup.classList.remove('isOpen'); }
// function openProfileModal() {
//   inputName.value = profileName.textContent;
//   inputOccupation.value = profileOccupation.textContent;
//   popupImage.classList.remove('isOpen');
//   popup.classList.add('isOpen');
//   if (window.refreshPopupForm) window.refreshPopupForm('.popup__form');
// }
// modalOpenButton.addEventListener('click', openProfileModal);
// modalCloseButton.addEventListener('click', closeProfileModal);

// // Add card popup
// function closeAddCardModal() { cardPopup.classList.remove('isOpen'); }
// function openAddCardModal() {
//   cardPopup.classList.add('isOpen');
//   if (window.refreshPopupForm) window.refreshPopupForm('.popup-add-photo__form');
// }
// addButton.addEventListener('click', openAddCardModal);
// closeAddCardButton.addEventListener('click', closeAddCardModal);

// // Submit add card
// function createCard(evt) {
//   evt.preventDefault();
//   renderCard({ name: cardNameInput.value, image: cardImageInput.value }, cardsWrapper);
//   closeAddCardModal();
//   cardForm.reset();
//   if (window.refreshPopupForm) window.refreshPopupForm('.popup-add-photo__form');
// }
// cardForm.addEventListener('submit', createCard);

// // Profile submit
// profileForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   profileName.textContent = inputName.value;
//   profileOccupation.textContent = inputOccupation.value;
//   popup.classList.remove('isOpen');
// });

// // Initial values
// inputName.value = profileName.textContent;
// inputOccupation.value = profileOccupation.textContent;

// // Initial render
// initialCards.forEach((c) => renderCard(c, cardsWrapper));

// // Init validation (validate.js expõe funções no window)
// document.addEventListener('DOMContentLoaded', () => {
//   if (typeof window.initPopupValidation === 'function') {
//     window.initPopupValidation([
//       { form: '.popup__form', submit: '.popup__button-save' },
//       { form: '.popup-add-photo__form', submit: '.popup-add-photo__button-criar' }
//     ]);
//   }
// });

// // Overlay click to close (.overlay)
// function closeModal(popupEl) { popupEl.classList.remove('isOpen'); }
// function handlePopupClose(evt) { if (evt.target === evt.currentTarget) closeModal(evt.currentTarget); }
// document.querySelectorAll('.overlay').forEach((item) => item.addEventListener('click', handlePopupClose));

// // Esc to close
// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape') {
//     closeAddCardModal();
//     closeModal(popupImage);
//     closeProfileModal();
//   }
// });
