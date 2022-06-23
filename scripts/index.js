const editButton = document.querySelector('.button_type_edit');
const exitButtonEdit = document.querySelector('.button_type_exit');
//собрать кнопки в массив
const exitButtonAdd = document.querySelector('.button_type_exit');
const addButton = document.querySelector('.button_type_add');
const likeButton = document.querySelector('.button_type_like');

const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupFormEdit = document.querySelector('.popup__form_type_edit');
const popupFormAdd = document.querySelector('.popup__form_type_add');

const popupName = document.querySelector('.popup__input_type_name');
const popupSubtitle = document.querySelector('.popup__input_type_subtitle');
const popupPlace = document.querySelector('.popup__input_type_place');
const popupPlaceUrl = document.querySelector('.popup__input_type_place-url');

const placeTemplate = document.querySelector('#place-template').content;
const places = document.querySelector('.places');

//***popupEdit */
function openedPopupEdit() {
  popupName.value = profileName.textContent;
  popupSubtitle.value = profileSubtitle.textContent;
  popupEdit.classList.add('popup_opened');
}

function closePopupEdit() {
  popupEdit.classList.remove('popup_opened');
}

function submitFormPopupEdit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupSubtitle.value;
  closePopup();
}
//***popupAdd */
function openedPopupAdd() {
  popupAdd.classList.add('popup_opened');
}

function closePopupAdd() {
  popupAdd.classList.remove('popup_opened');
}

function submitFormPopupAdd(evt) {
  evt.preventDefault();
  closePopupAdd();
}

editButton.addEventListener('click', openedPopupEdit);
exitButtonEdit.addEventListener('click', closePopupEdit);
popupEdit.addEventListener('submit', submitFormPopupEdit);

addButton.addEventListener('click', openedPopupAdd);
exitButtonAdd.addEventListener('click', closePopupAdd);
popupAdd.addEventListener('submit', submitFormPopupAdd);

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

  initialCards.forEach(placeItemAdd);

  function placeItemAdd(placeItem){
    let place = placeTemplate.querySelector('.place').cloneNode(true);
    place.querySelector('.place__image').src = placeItem.link;
    place.querySelector('.place__image').alt = placeItem.name;
    place.querySelector('.place__name').textContent=placeItem.name;

    places.append(place);
  }

