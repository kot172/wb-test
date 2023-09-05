const cardsData = [
    {
        cardTitle: "Футболка UZcotton мужская",
        cardParams: "Размер: 56",
        cardParamsMissing: "56",
        cardColor: "Цвет: белый",
        cardFrom: "Коледино WB",
        cardAuthor: "OOO Вайлдберриз",
        ogrn: "ОГРН: 1067746062449",
        adress: "142181, Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1",
        img: "./images/img-1.png",
        cardPrice: "522",
        CardPriceOld: "1051",
        count: '1',
        maxCount: '3',
    },

    {
        cardTitle:
            "Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe",
        cardParams: "",
        cardParamsMissing: "",
        cardColor: "Цвет: прозрачный",
        cardFrom: "Коледино WB",
        cardAuthor: "OOO Мегапрофстиль",
        ogrn: "ОГРН: 5167746237148",
        adress: "129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34",
        img: "./images/img-2.png",
        cardPrice: "10500.235",
        CardPriceOld: "11500.235",
        count: '200',
        maxCount: '210',
    },

    {
        cardTitle:
            'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',
        cardParams: "",
        cardParamsMissing: "56/54/52...",
        cardFrom: "Коледино WB",
        cardAuthor: "OOO Вайлдберриз",
        ogrn: "ОГРН: 1067746062449",
        adress: "142181, Московская обл, г.о. Подольск, д Коледино, тер. Индустриальный парк Коледино, д. 6, стр. 1",
        img: "./images/img-3.png",
        cardPrice: "247",
        CardPriceOld: "475",
        count: '2',
        maxCount: '4',
    },
];

const disableBtngoods = document.getElementById("basket__off-goods"); // Нашли корзину
const disableBtnMissing = document.getElementById("basket__off-missing"); //Нашли корзину(отсутствует)
const basketGoods = document.getElementById("basket__card-goods"); // Карточки в корзине
const basketMissing = document.getElementById("basket__card-missing");// Карточки в корзине(отсутствует)

const orderInput = document.getElementById("order__input"); //получили чекбокс
const orderBtn = document.getElementById("order__button"); // нашли кнопку
const orderPrice = document.getElementById("order__price"); //нашли итоговую сумму

const basketCheckbox = document.getElementById("basket__allinput"); //нашли чекбокс
const checkboxes = document.querySelectorAll('#basket__input');
const basketCount = document.getElementById("basket__count"); //нашли итог товаров и суммы

const basketCardContainer = document.getElementById("basket__card-goods");//карты для темплейта
const basketCardTemplate = document.getElementById("basket__card");// Темплейт
const cardContainer = document.getElementById("basket__card-missing");// карты для темплейта(остутствуют)
const cardTemplate = document.getElementById("card-template");//Темплейт (отсутствую)
const allCheckbox = document.getElementById('basket__allinput') //Инпуты в карточках

const orderCaption = document.querySelector('.order__input-caption')//подпись под чекбоксом в (order)

// Получаем элементы ввода и сообщения об ошибке
const emailInput = document.getElementById("inputEmail");
const phoneInput = document.getElementById("inputPhone");
const innInput = document.getElementById("inputInn");
const nameInput = document.getElementById("inputName");
const surnameInput = document.getElementById("inputSurname");
const errorEmail = document.getElementById("errorEmail");
const errorPhone = document.getElementById("errorPhone");
const errorInn = document.getElementById("errorInn");
const errorName = document.getElementById("errorName");
const errorSurname = document.getElementById("errorSurname");
const spanName = document.getElementById("spanName");
const spanSurname = document.getElementById("spanSurname");
const spanEmail = document.getElementById("spanEmail");
const spanPhone = document.getElementById("spanPhone");
const spanInn = document.getElementById("spanInn");
const spanInnDown = document.getElementById("spanInnDown")

// Получаем элементы попапа
const popup = document.getElementById('popupPay');
const checkboxesPopup = popup.querySelectorAll('.popup__card-checkbox');// чекбоксы доставки
const confirmButton = popup.querySelector('.popup__button');
const checkboxesCourier = popupDelivery.querySelectorAll('#popupDeliveryInput');// чекбоксы курьера

// Получаем элемент для вывода картинки и текста
const userCard = document.querySelector('.user__card');
const userCardImage = userCard.querySelector('img');
const userCardText = userCard.querySelector('span');
const userOrderCard = document.querySelector('.order__card')
const userOrderImage = userOrderCard.querySelector('img')
const userOrderText = userOrderCard.querySelector('p')


// Получаем элементы для вставки блока содержимого
const checkboxesDelivery = popupDelivery.querySelectorAll('.popup__card-checkbox');
const confirmButtonPoint = popupDelivery.querySelector('#btnPoint');
const confirmButtonCourier = popupDelivery.querySelector('#btnCourier')
const deliveryText = document.querySelector('.delivery__text-l');
const deliveryCaption = document.querySelector('.delivery__text-s');
const deliveryName = document.getElementById('deliveryMethod');
const orderTextAdress = document.getElementById('orderText');
const orderName = document.getElementById('orderName');
const orderDate = document.getElementById('orderDate');



export {
    cardsData,
    disableBtngoods,
disableBtnMissing,
basketGoods,
basketMissing,
orderInput,
orderBtn,
orderPrice,
basketCheckbox,
checkboxes,
basketCount,
basketCardContainer,
basketCardTemplate,
cardContainer,
cardTemplate,
allCheckbox,
orderCaption,
emailInput,
phoneInput,
innInput,
nameInput,
surnameInput,
errorEmail,
errorPhone,
errorInn,
errorName,
errorSurname,
spanName,
spanSurname,
spanEmail,
spanPhone,
spanInn,
spanInnDown,
popup,
checkboxesPopup,
confirmButton,
userCard,
userCardImage,
userCardText,
userOrderCard,
userOrderImage,
userOrderText,
checkboxesDelivery,
confirmButtonPoint,
confirmButtonCourier,
deliveryText,
deliveryCaption,
deliveryName,
orderTextAdress,
orderName,
orderDate,
checkboxesCourier,

};