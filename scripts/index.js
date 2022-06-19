const editButton=document.querySelector('.profile__edit-button');
const exitButton=document.querySelector('.popup__exit');
const popupForm=document.querySelector('.popup__form')
const popup=document.querySelector('.popup');
const profileName=document.querySelector('.profile__title');
const profileSubtitle=document.querySelector('.profile__subtitle');
const popupName=document.querySelector('.popup__name');
const popupSubtitle=document.querySelector('.popup__subtitle');
const likeButton=document.querySelector('.place__like-button')

function popupOpened(){
/*вставить класс переключатель попапа*/popup.classList.add('popup_opened');
popupName.value=profileName.innerText;
popupSubtitle.value=profileSubtitle.innerText;
}

function popupExit(){
popup.classList.remove('popup_opened');
}

function popupSubmit(evt){
evt.preventDefault();
profileName.textContent=popupName.value;
profileSubtitle.textContent=popupSubtitle.value;
popupExit();
}

function likeButtonToggle(){
  likeButton.classList.toggle('place__like-button_active')
}

editButton.addEventListener('click',popupOpened);
exitButton.addEventListener('click',popupExit);
popupForm.addEventListener('submit',popupSubmit)
likeButton.addEventListener('click',likeButtonToggle);
