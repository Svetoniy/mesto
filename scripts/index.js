const editButton = document.querySelector('.button_type_edit');
const exitButton = document.querySelector('.button_type_exit');
const popupForm = document.querySelector('.popup__form')
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupName = document.querySelector('.popup__input_name');
const popupSubtitle = document.querySelector('.popup__input_subtitle');
const likeButton = document.querySelector('.button_type_like')

function openedPopup() {
  popupName.value = profileName.textContent;
  popupSubtitle.value = profileSubtitle.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function submitFormPopup(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupSubtitle.value;
  closePopup();
}

editButton.addEventListener('click', openedPopup);
exitButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', submitFormPopup)
