const modalCloseButton = document.querySelector(".popup__x-popup");
const popup = document.querySelector(".overlay");
const modalOpenButton = document.querySelector(".profile__button-edit-name");
const addButton = document.querySelector(".profile__button-add");
const closeAddCardButton = document.querySelector(".popup-add-photo__x-popup");
const cardPopup = document.querySelector(".popup-add-photo");
const popupImage = document.querySelector('.popup-image');
const popupImageFull = document.querySelector('.popup-image__full');
const popupImageClose = document.querySelector('.popup-image__close');
const popupImageDescription = document.querySelector(".popup-image__description")


function abrirPopupImagem(src, alt) {
  popupImageFull.src = src;
  popupImageFull.alt = alt;
  popupImageDescription.textContent = alt;
  popupImage.classList.add('isOpen');
}

 popupImageClose.addEventListener('click', () => {
   popupImage.classList.remove('isOpen');
 });
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

function generateCard(data){
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".photo-grid__name");
  const cardImage = cardElement.querySelector(".photo-grid__item");
  const coracao = cardElement.querySelector(".photo-grid__coracao");
  const lixeira = cardElement.querySelector(".photo-grid__trash");

  cardImage.src = data.image;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  
  configurarDelete(lixeira)

  coracao.addEventListener("click", handleLike);

    cardImage.addEventListener('click', () => 
  abrirPopupImagem(cardImage.src, cardImage.alt));
  return cardElement;
};

const handleLike= (event)=> {
   event.target.classList.toggle("photo-grid__coracao-active");
}



function renderCard(data, wrap) {
  wrap.prepend(generateCard(data))
  console.log(wrap);
}

function closeProfileModal() {
  popup.classList.remove("isOpen");
}

function openProfileModal() {
  inputName.value = profileName.textContent;
  inputOccupation.value = profileOccupation.textContent;
  popup.classList.add("isOpen");
}

modalOpenButton.addEventListener("click", openProfileModal);
modalCloseButton.addEventListener("click", closeProfileModal);


function closeAddCardModal() {
  cardPopup.classList.remove("isOpen");
}

function openAddCardModal() {
  cardPopup.classList.add("isOpen");
}
addButton.addEventListener("click",  openAddCardModal);
closeAddCardButton.addEventListener("click", closeAddCardModal);

const cardNameInput= document.querySelector(".popup-add-photo__input-lugar");
const cardImageInput= document.querySelector(".popup-add-photo__input-link");
const cardpopup= document.querySelector(".popup-add-photo__form");
const cardpopupwrapper= document.querySelector(".popup-add-photo__form");
function createCard(evt) {
evt.preventDefault();

renderCard({
  name: cardNameInput.value,
  image: cardImageInput.value
}, cardsWrapper)
closeAddCardModal()
cardPopup.reset()
}

cardpopupwrapper.addEventListener("submit", createCard);

const coracaoVazio = './images/photo-grid/Coracao.jpg';
const coracaoCheio = './images/photo-grid/coracao-cheio.png';

function configurarLike(coracao) {
  coracao.addEventListener('click', () => {
    const curtido = coracao.getAttribute('data-like') === 'true';

      if (curtido) {
      coracao.src = coracaoVazio;
      coracao.setAttribute('data-like', 'false');
    } else {
      coracao.src = coracaoCheio;
      coracao.setAttribute('data-like', 'true');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const coracoes = document.querySelectorAll('.photo-grid__coracao');
  coracoes.forEach(configurarLike);
});

function configurarDelete(lixeira) {
  lixeira.addEventListener('click', () => {
    const card = lixeira.closest('.card');
      card.remove();
    }
  );
}

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


inputName.value = profileName.textContent;
inputOccupation.value = profileOccupation.textContent;

initialCards.forEach((card) => {
  renderCard(card, cardsWrapper);
});


(function wireInlineErrors() {
  const forms = document.querySelectorAll('.popup__form, .popup-add-photo__form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    function updateError(input) {
      const errorEl = input.nextElementSibling && input.nextElementSibling.classList.contains('popup__error')
        ? input.nextElementSibling
        : null;
      if (!errorEl) return;

      if (!input.validity.valid) {
        // mensagem padrão do browser (pt-BR). Customize se quiser:
        let msg = input.validationMessage;
        if (input.type === 'url' && input.value) {
          msg = 'Insira uma URL válida (ex.: https://exemplo.com)';
        }
        errorEl.textContent = msg;
        input.classList.add('popup__input_type_error');
        errorEl.classList.add('popup__error_visible');
      } else {
        errorEl.textContent = '';
        input.classList.remove('popup__input_type_error');
        errorEl.classList.remove('popup__error_visible');
      }
    }

    function toggleOnInput(input) {
      input.addEventListener('input', () => updateError(input));
      updateError(input); // estado inicial
    }

    inputs.forEach(toggleOnInput);

    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        inputs.forEach(updateError);
      }
    });
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  const setups = [
    { form: '.popup__form', submit: '.popup__button-save' },
    { form: '.popup-add-photo__form', submit: '.popup-add-photo__button-criar' }
  ];

  setups.forEach(({ form: fSel, submit: bSel }) => {
    const form = document.querySelector(fSel);
    if (!form) return;

    const button = form.querySelector(bSel);
    const inputs = Array.from(form.querySelectorAll('input'));

    // garante que exista um <span.popup__error> logo após cada input
    inputs.forEach((input) => {
      let err = input.nextElementSibling;
      if (!(err && err.classList.contains('popup__error'))) {
        err = document.createElement('span');
        err.className = 'popup__error';
        if (input.id) err.id = `${input.id}-error`;
        input.insertAdjacentElement('afterend', err);
      }
    });

    function getErrorEl(input){
      if (input.id){
        const byId = form.querySelector(`#${input.id}-error`);
        if (byId) return byId;
      }
      const sib = input.nextElementSibling;
      return (sib && sib.classList.contains('popup__error')) ? sib : null;
    }

    function showError(input, msg){
      const el = getErrorEl(input);
      if (!el) return;
      el.textContent = msg;
      input.classList.add('popup__input_type_error');
      el.classList.add('popup__error_visible');
    }

    function clearError(input){
      const el = getErrorEl(input);
      if (!el) return;
      el.textContent = '';
      input.classList.remove('popup__input_type_error');
      el.classList.remove('popup__error_visible');
    }

    function customMsg(input){
      if (input.type === 'url' && input.value && !input.validity.valid)
        return 'Insira uma URL válida (ex.: https://exemplo.com)';
      return input.validationMessage;
    }

    function validateInput(input){
      if (!input.validity.valid) showError(input, customMsg(input));
      else clearError(input);
    }

    function updateButton(){
      const valid = form.checkValidity();
      if (button){
        button.disabled = !valid;
        button.classList.toggle('popup__button_disabled', !valid);
      }
    }

    // estado inicial
    inputs.forEach(validateInput);
    updateButton();

    // ao digitar
    inputs.forEach((i) => {
      i.addEventListener('input', () => {
        validateInput(i);
        updateButton();
      });
    });

    // evita submit inválido
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()){
        e.preventDefault();
        inputs.forEach(validateInput);
        updateButton();
      }
    });
  });
});

function closeModal(popup) {
  popup.classList.remove("isOpen");
}

function handlePopupClose(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

const popupList = document.querySelectorAll(".overlay");

popupList.forEach((item) => {
  item.addEventListener("click", handlePopupClose);
});






