class FormValidator {
  constructor(classValidate, popupForm) {
    this._formSelector = classValidate.formSelector;
    this._inputSelector = classValidate.inputSelector;
    this._submitButtonSelector = classValidate.submitButtonSelector;
    this._inactiveButtonClass = classValidate.inactiveButtonClass;
    this._inputErrorClass = classValidate.inputErrorClass;
    this._errorClass = classValidate.errorClass;
    this._popupForm = popupForm;
    this._inputList = Array.from(popupForm.querySelectorAll(this._inputSelector));
    this._buttonElement = popupForm.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._preventDefaultAction();
    this._setEventListeners();
  }

  _preventDefaultAction() {
    this._popupForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._inputElement=inputElement;
        this._checkInputValidity();
        this._toggleButtonState();
      });
    });
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity() {
    if (!this._inputElement.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  };

  _showInputError() {
    const errorElement = this._popupForm.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = this._inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError() {
    const errorElement = this._popupForm.querySelector(`.${this._inputElement.id}-error`);
    this._inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

}

export { FormValidator };
