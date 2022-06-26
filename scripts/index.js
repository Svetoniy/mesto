const editButton = document.querySelector('.button_type_edit');
const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = document.querySelector('.popup__form_type_edit');
const popupName = document.querySelector('.popup__input_type_name');
const popupSubtitle = document.querySelector('.popup__input_type_subtitle');
const addButton = document.querySelector('.button_type_add');
const saveAddButton = document.querySelector('.button_type_save-add')
const popupAdd = document.querySelector('.popup_type_add');
const popupFormAdd = document.querySelector('.popup__form_type_add');
const popupPlace = document.querySelector('.popup__input_type_place');
const popupPlaceUrl = document.querySelector('.popup__input_type_place-url');
const placeTemplate = document.querySelector('#place-template').content;
const exitButtons = document.querySelectorAll('.button_type_exit');
const places = document.querySelector('.places');
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

/* popup Edit block */
function openedPopupEdit() {
  popupName.value = profileName.textContent;
  popupSubtitle.value = profileSubtitle.textContent;
  popupEdit.classList.add('popup_opened');
}

function submitFormPopupEdit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupSubtitle.value;
  closePopup(evt);
}

/* popup Add block*/
function CreatePlaceItem(placeItem) {
  const place = placeTemplate.querySelector('.place').cloneNode(true);
  place.querySelector('.place__image').src = placeItem.link;
  place.querySelector('.place__image').alt = placeItem.name;
  place.querySelector('.place__name').textContent = placeItem.name;
  place.querySelector('.button_type_like').addEventListener('click', togleLike);
  place.querySelector('.button_type_trash').addEventListener('click', deletePlaceItem);
  place.querySelector('.place__image').addEventListener('click', openedPopupView)
  places.prepend(place);
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
  CreatePlaceItem(placeItem);
  closePopup(evt);
}

function openedPopupAdd() {
  popupFormAdd.reset();
  popupAdd.classList.add('popup_opened');
}

/* view block */

function openedPopupView(evt) {
  const view = document.querySelector('.popup_type_view');
  view.querySelector('.popup__image').src = evt.currentTarget.src;
  view.querySelector('.popup__image').alt = evt.currentTarget.alt;
  view.querySelector('.popup__alt').textContent = evt.currentTarget.alt;
  view.classList.add('popup_opened');
}
/* close block */
function closePopup(popup) {
  popup.currentTarget.closest('.popup').classList.remove('popup_opened');
}

/* prerender block */
function preRender() {
  initialCards.slice().reverse().forEach(CreatePlaceItem);
  exitButtons.forEach(function (button) { button.addEventListener('click', closePopup) })
  editButton.addEventListener('click', openedPopupEdit);
  popupEdit.addEventListener('submit', submitFormPopupEdit);
  saveAddButton.addEventListener('click', saveAddForm)
  addButton.addEventListener('click', openedPopupAdd);
}

preRender();
