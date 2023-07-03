let formElement = document.querySelector('.popup__container')

let nameInput = document.querySelector('.popup__input_name')
let jobInput = document.querySelector('.popup__input_job')
let nameElement = document.querySelector('.profile__name')
let jobElement = document.querySelector('.profile__descr')

let openBtnPop = document.querySelector('.profile__btn-edit')
let closeBtnPop = document.querySelector('.popup__close-btn')
let popup = document.querySelector('.popup')
let saveBtnPop = document.querySelector('.popup__btn-save')

nameInput.value +=  nameElement.textContent;
jobInput.value += jobElement.textContent;

openBtnPop.addEventListener('click', function(){
    popup.classList.add('popup_opened')
})

closeBtnPop.addEventListener('click', function(){
    popup.classList.remove('popup_opened')
})

nameInput.addEventListener('input' , function() {
    nameElement.textContent = nameInput.value 
})

jobInput.addEventListener('input' , function() {
    jobElement.textContent = jobInput.value 
})

saveBtnPop.addEventListener('click', function(){
    popup.classList.remove('popup_opened')
})