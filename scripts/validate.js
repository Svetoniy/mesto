//список форм
function objectValidate(classValidate) {
  const formList = Array.from(document.querySelectorAll(classValidate.formSelector));
  formList.forEach((popupForm) => {
    preventDefaultAction(popupForm);
    setEventListeners(classValidate, popupForm);
  });
}

function setEventListeners(classValidate, popupForm) {
  const inputList = Array.from(popupForm.querySelectorAll(classValidate.inputSelector));
  const buttonElement = popupForm.querySelector(classValidate.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(classValidate, popupForm, inputElement);
      toggleButtonState(classValidate.inactiveButtonClass, buttonElement, inputList);
    });
  });
};

function checkInputValidity(classValidate, popupForm, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(classValidate, popupForm, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(classValidate, popupForm, inputElement);
  }
};

function showInputError(classValidate, popupForm, inputElement, errorMessage) {
  const errorElement = popupForm.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(classValidate.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(classValidate.errorClass);
}

function hideInputError(classValidate, popupForm, inputElement) {
  const errorElement = popupForm.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(classValidate.inputErrorClass);
  errorElement.classList.remove(classValidate.errorClass);
  errorElement.textContent = '';
};

function toggleButtonState(inactiveButtonClass, buttonElement, inputList) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function preventDefaultAction(popupForm) {
  popupForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
}

objectValidate({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
