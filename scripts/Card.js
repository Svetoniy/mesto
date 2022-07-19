class Card {
  constructor(placeItem, cardSelector, openedPopupView) {
    this._name = placeItem.name;
    this._link = placeItem.link;
    this._cardSelector = cardSelector;
    this._handleCardClick=openedPopupView
  }
  //#place-template
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.place')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._placeImage = this._element.querySelector('.place__image');
    this._placeName = this._element.querySelector('.place__name');
    this._setEventListeners();
    this._placeImage.src = this._link;
    this._placeImage.alt = this._name;
    this._placeName.textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector('.button_type_like');
    this._buttonTrash = this._element.querySelector('.button_type_trash');
    this._buttonLike.addEventListener('click', () => {
      this._toggleLike();
    });
    this._buttonTrash.addEventListener('click', () => {
      this._deletePlaceItem();
    });
    this._placeImage.addEventListener('click', () => {
      this._handleCardClick(this._link,this._name);
    });
  }

  _toggleLike() {
    this._buttonLike.classList.toggle('button_type_like-active');
  }

  _deletePlaceItem() {
    this._element.remove();
  }
}

export { Card };
