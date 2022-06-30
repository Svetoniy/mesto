const editButton = document.querySelector('.button_type_edit');
const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupEdit = document.querySelector('.popup_type_edit');
const submitPopupEdit = document.querySelector('.popup__form_type_edit');
const popupName = document.querySelector('.popup__input_type_name');
const popupSubtitle = document.querySelector('.popup__input_type_subtitle');
const addButton = document.querySelector('.button_type_add');
const popupAdd = document.querySelector('.popup_type_add');
const submitPopupAdd = document.querySelector('.popup__form_type_add');
const popupPlace = document.querySelector('.popup__input_type_place');
const popupPlaceUrl = document.querySelector('.popup__input_type_place-url');
const placeTemplate = document.querySelector('#place-template').content;
const exitButtons = document.querySelectorAll('.button_type_exit');
const places = document.querySelector('.places');
const view = document.querySelector('.popup_type_view');
const img = view.querySelector('.popup__image');
const alt = view.querySelector('.popup__alt');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/* popup Edit block */ //
function openedPopupEdit() {
  popupName.value = profileName.textContent;
  popupSubtitle.value = profileSubtitle.textContent;
  openPopup(popupEdit);
}

function submitFormPopupEdit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupSubtitle.value;
  closePopup(popupEdit);
}

/* popup Add block*/
function createPlaceItem(placeItem) {
  const place = createCard(placeItem);
  places.prepend(place);
}

function createCard(card) {
  const place = placeTemplate.querySelector('.place').cloneNode(true);
  const placeImage = place.querySelector('.place__image');
  const placeName = place.querySelector('.place__name');
  const placeLike = place.querySelector('.button_type_like');
  const placeTrash = place.querySelector('.button_type_trash');
  placeImage.src = card.link;
  placeImage.alt = card.name;
  placeName.textContent = card.name;
  placeLike.addEventListener('click', togleLike);
  placeTrash.addEventListener('click', deletePlaceItem);
  placeImage.addEventListener('click', () => openedPopupView(placeImage));
  return place;
}

function togleLike(event) {
  event.currentTarget.classList.toggle('button_type_like-active');
}
function deletePlaceItem(event) {
  event.currentTarget.closest('.place').remove();
}

function saveAddForm(evt) {
  evt.preventDefault();
  const placeItem = {
    name: popupPlace.value,
    link: popupPlaceUrl.value
  }
  createPlaceItem(placeItem);
  evt.target.reset();
  closePopup(popupAdd);
}

/* view block */

function openedPopupView(imageCard) {
  img.src = imageCard.src;
  img.alt = imageCard.alt;
  alt.textContent = imageCard.alt;
  openPopup(view);
}
/* open-close block */

/*function closestPopup(evt){
  const popup = evt.currentTarget.closest('.popup')
  return (popup)
}*/

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

/* prerender block */
function preRender() {
  initialCards.slice().reverse().forEach(createPlaceItem);
  editButton.addEventListener('click', openedPopupEdit);
  submitPopupEdit.addEventListener('submit', submitFormPopupEdit);
  submitPopupAdd.addEventListener('submit', saveAddForm);
  addButton.addEventListener('click', () => openPopup(popupAdd));
  exitButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });
}

preRender();
