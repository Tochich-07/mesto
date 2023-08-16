let formElement = document.querySelector(".popup__container");

let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let nameElement = document.querySelector(".profile__name");
let jobElement = document.querySelector(".profile__descr");
let btnAddCard = document.querySelector(".profile__btn-add");

let openBtnPop = document.querySelector(".profile__btn-edit");
let closeBtnPop = document.querySelector(".popup__close-btn");
let popup = document.querySelector(".popup");
let popupAdd = document.getElementById("popup__add");
let closeBtnPopId = document.getElementById("popup__close-btn-id");

//Открытие/закрыте первого попапа

openBtnPop.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
});

closeBtnPop.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

//Открытие/закрыте второго попапа

btnAddCard.addEventListener("click", function () {
  popupAdd.classList.add("popup_opened");
});

closeBtnPopId.addEventListener("click", function () {
  popupAdd.classList.remove("popup_opened");
});

//Получение данных для профиля в попапе
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  popup.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleFormSubmit);

//Рендер карточек

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

let popImg = document.querySelector("#popup__img");
const card = document.getElementById("card");
const cardTemplate = document.getElementById("card").content;
const cardsUl = document.querySelector(".elements__grid");
let cloneCard = cardTemplate
  .querySelector(".elements__element")
  .cloneNode(true);
let cardName = cloneCard.querySelector(".elements__heading").textContent;
let cardLink = cloneCard.querySelector(".elements__img").src;
let PopImgBtn = document.querySelector("#pop-Img-Btn");
let PopImgCont = document.querySelector("#img-container");

function renderCard() {
  initialCards.forEach(function (el) {
    cloneCard = cardTemplate
      .querySelector(".elements__element")
      .cloneNode(true);
    cloneCard.querySelector(".elements__img").src = el.link.toString();
    cloneCard.querySelector(".elements__heading").textContent =
      el.name.toString();

    //Лайк карточки
    cloneCard.querySelector(".elements__btn").addEventListener("click", (e) => {
      e.target.classList.toggle("elements__btn_active");
    });

    //Открытие картинки
    cloneCard.querySelector(".elements__img").addEventListener("click", (e) => {
      popImg.classList.add("popup_opened");
      PopImgCont.style.background = ///Не понимаю как? Даже логику не понимаю, за счет какого то класса я должен сделать на весь экран или функции? че то вообще не понимаю(
        PopImgBtn.addEventListener("click", function () {
          popImg.classList.remove("popup_opened");
        });
    });
    //Удаление карточки
    cloneCard
      .querySelector(".elements__del")
      .addEventListener("click", function () {
        cloneCard.remove(); /// Тоже не понимаю как? почему удалятеся только первый элемент? какой же я тупой (
      });
    cardsUl.append(cloneCard);
  });
}

renderCard();

//Добавление карточек

let inputPlaceHeading = document.querySelector("#input-place-heading");
let inputPlaceLink = document.querySelector("#input-place-link");
let btnCreate = document.querySelector("#popup__btn-create");

function createCard(evt) {
  evt.preventDefault();
  let obj = {
    name: "",
    link: "",
  };
  cloneCard = cardTemplate.querySelector(".elements__element").cloneNode(true);

  obj.name = inputPlaceHeading.value;
  obj.link = inputPlaceLink.value;

  cloneCard.querySelector(".elements__img").src = obj.link.toString();
  cloneCard.querySelector(".elements__heading").textContent =
    obj.name.toString();
  cardsUl.prepend(cloneCard);
  inputPlaceHeading.value = "";
  inputPlaceLink.value = "";
  popupAdd.classList.remove("popup_opened");
}

popupAdd.addEventListener("submit", createCard);
