// validate.js
(function () {
  function ensureErrorSpan(form, input) {
    let err = input.nextElementSibling;
    if (!(err && err.classList.contains('popup__error'))) {
      err = document.createElement('span');
      err.className = 'popup__error';
      if (input.id) err.id = `${input.id}-error`;
      input.insertAdjacentElement('afterend', err);
    }
  }

  function getErrorEl(form, input) {
    if (input.id) {
      const byId = form.querySelector(`#${input.id}-error`);
      if (byId) return byId;
    }
    const sib = input.nextElementSibling;
    return sib && sib.classList.contains('popup__error') ? sib : null;
  }

  // --- Regra pedida:
  // 0 caracteres  -> mensagem em vermelho ("Preencha este campo")
  // 1 caractere   -> mensagem "Mínimo de 2 caracteres" (ou do minlength do input)
  // URL inválida  -> mensagem clara de URL
  function computeMessage(input) {
    const value = input.value.trim();
    const min = Number(input.getAttribute('minlength') || 0);

    if (value.length === 0) {
      // Mesmo se não tiver "required" no HTML, tratamos como obrigatório
      return input.type === 'url' ? 'Preencha o link' : 'Preencha este campo';
    }

    if (input.type === 'url' && input.validity.typeMismatch) {
      return 'Insira uma URL válida (ex.: https://exemplo.com)';
    }

    if (min > 0 && value.length < min) {
      return `Mínimo de ${min} caracteres`;
    }

    return ''; // sem erros
  }

  function showError(form, input, msg) {
    const el = getErrorEl(form, input);
    if (!el) return;
    el.textContent = msg;
    input.classList.add('popup__input_type_error');
    el.classList.add('popup__error_visible');
  }

  function clearError(form, input) {
    const el = getErrorEl(form, input);
    if (!el) return;
    el.textContent = '';
    input.classList.remove('popup__input_type_error');
    el.classList.remove('popup__error_visible');
  }

  function validateInput(form, input) {
    const msg = computeMessage(input);
    if (msg) {
      showError(form, input, msg);
      return false;
    }
    clearError(form, input);
    return true;
  }

  function updateButton(form, button) {
    const inputs = Array.from(form.querySelectorAll('input'));
    const allValid = inputs.every((i) => validateInput(form, i));
    if (button) {
      button.disabled = !allValid;
      button.classList.toggle('popup__button_disabled', !allValid);
    }
  }

  function wireForm(form, submitSel) {
    if (!form) return;
    const button =
      form.querySelector(submitSel) ||
      form.querySelector('button[type="submit"]');

    const inputs = Array.from(form.querySelectorAll('input'));
    inputs.forEach((i) => ensureErrorSpan(form, i));

    // estado inicial
    updateButton(form, button);

    // ao digitar
    inputs.forEach((i) => {
      i.addEventListener('input', () => updateButton(form, button));
    });

    // evita submit inválido
    form.addEventListener('submit', (e) => {
      const inputsNow = Array.from(form.querySelectorAll('input'));
      const allValid = inputsNow.every((i) => validateInput(form, i));
      if (!allValid) {
        e.preventDefault();
        updateButton(form, button);
      }
    });
  }

  // API pública
  window.initPopupValidation = function (setups) {
    setups.forEach(({ form, submit }) => {
      wireForm(document.querySelector(form), submit);
    });
  };

  // revalida quando você abrir um popup e preencher via JS
  window.refreshPopupForm = function (formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;
    const button =
      form.querySelector('button[type="submit"]') ||
      form.querySelector('.popup__button-save') ||
      form.querySelector('.popup-add-photo__button-criar');
    updateButton(form, button);
  };
})();
