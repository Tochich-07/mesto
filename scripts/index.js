let formElement = document.querySelector('.popup__container');

let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let nameElement = document.querySelector('.profile__name');
let jobElement = document.querySelector('.profile__descr');

let openBtnPop = document.querySelector('.profile__btn-edit');
let closeBtnPop = document.querySelector('.popup__close-btn');
let popup = document.querySelector('.popup');

openBtnPop.addEventListener('click', function(){
    popup.classList.add('popup_opened');
    nameInput.value =  nameElement.textContent;
    jobInput.value = jobElement.textContent;
});

closeBtnPop.addEventListener('click', function(){
    popup.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    nameElement.textContent = nameInput.value;
    jobElement.textContent = jobInput.value; 
    popup.classList.remove('popup_opened');
};

formElement.addEventListener('submit', handleFormSubmit); 