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

const basketCardContainer = document.getElementById("basket__card-goods");
const basketCardTemplate = document.getElementById("basket__card");
const cardContainer = document.getElementById("basket__card-missing");
const cardTemplate = document.getElementById("card-template");
const allCheckbox = document.getElementById('basket__allinput') //Инпуты в карточках











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
};