const disableBtngoods = document.getElementById("basket__off-goods");
const disableBtnMissing = document.getElementById("basket__off-missing");
const basketGoods = document.getElementById("basket__card-goods");
const basketMissing = document.getElementById("basket__card-missing");

const orderInput = document.getElementById("order__input"); //получили чекбокс
const orderBtn = document.getElementById("order__button"); // нашли кнопку
const orderPrice = document.getElementById("order__price"); //нашли итоговую сумму

const basketCheckbox = document.getElementById("basket__allinput"); //нашли чекбокс
const checkboxes = document.querySelectorAll('#basket__input');
const basketCount = document.getElementById("basket__count"); //нашли итог товаров и суммы

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






//Функции переворачивание стрелочки
function rotateGoods() {
    disableBtngoods.classList.toggle("basket__disable-active");
}

function rotateMissing() {
    disableBtnMissing.classList.toggle("basket__disable-active");
}

//Функции открытия и закрытия корзин
function handleGoods() {
    basketGoods.classList.toggle("active");
}

function handleMissing() {
    basketMissing.classList.toggle("active");
}

function handleBasketInfo() {
    basketCount.classList.toggle("basket__none");
    basketCheckbox.classList.toggle("basket__none");
}

//Слушатели стрелочек
disableBtnMissing.addEventListener("click", () => {
    handleMissing();
    rotateMissing();
});

disableBtngoods.addEventListener("click", () => {
    handleGoods();
    rotateGoods();
    handleBasketInfo();
});


function renderCards() {
    const cardContainer = document.getElementById("basket__card-missing");
    const cardTemplate = document.getElementById("card-template");

    cardsData.forEach((cardData) => {
        const cardClone = cardTemplate.content.cloneNode(true);
        const cardTitle = cardClone.getElementById("card__title");
        const cardDescription = cardClone.getElementById("card__params");
        const cardImage = cardClone.querySelector(".card__avatar-missing");
        const cardColor = cardClone.getElementById("card__color");
        const cardParamsMissing = cardClone.getElementById("card__paramsMissing")

        cardTitle.textContent = cardData.cardTitle;
        cardDescription.textContent = cardData.cardParams;
        cardImage.src = cardData.img;
        cardColor.textContent = cardData.cardColor;
        cardParamsMissing.textContent = cardData.cardParamsMissing;


        cardContainer.appendChild(cardClone);
    });
}

renderCards();

//корзина
function renderBasketCard() {
    const basketCardContainer = document.getElementById("basket__card-goods");
    const basketCardTemplate = document.getElementById("basket__card");// VYNESTI

    cardsData.forEach((cardData) => {
        const basketCardClone = basketCardTemplate.content.cloneNode(true);
        const cardTitle = basketCardClone.getElementById("card__title");
        const cardParams = basketCardClone.getElementById("card__params");
        const cardParamsImg = basketCardClone.getElementById("card__paramsImg");
        const cardImage = basketCardClone.querySelector(".card__avatar");
        const cardColor = basketCardClone.getElementById("card__color");
        const cardFrom = basketCardClone.getElementById("card__from");
        const cardAuthor = basketCardClone.getElementById("card__author-text");
        const cardPriceM = basketCardClone.getElementById("price__new-m");
        const cardPriceL = basketCardClone.getElementById("price__new-l");
        const cardPriceOld = basketCardClone.getElementById("price__old");
        const cardCount = basketCardClone.getElementById("card__count");
        const CardMaxCount = basketCardClone.getElementById("count__balance");
        const cardHang = basketCardClone.getElementById('card__hang');
        const cardOrganization = basketCardClone.querySelector('.card__tooltip-organization');
        const cardOgrn = basketCardClone.querySelector('.card__tooltip-ogrn');
        const cardAdress = basketCardClone.querySelector('.card__tooltip-adress')

        cardTitle.textContent = cardData.cardTitle;
        cardParams.textContent = cardData.cardParams;
        cardParamsImg.textContent = cardData.cardParams.replace(/[^0-9]/g, "");
        cardColor.textContent = cardData.cardColor;
        cardFrom.textContent = cardData.cardFrom;
        cardAuthor.textContent = cardData.cardAuthor;
        cardImage.src = cardData.img;
        cardPriceM.textContent = cardData.cardPrice;
        cardPriceL.textContent = cardData.cardPrice;
        cardPriceOld.textContent = cardData.CardPriceOld;
        cardCount.textContent = cardData.count;
        CardMaxCount.textContent = cardData.maxCount;
        cardOrganization.textContent = cardData.cardAuthor.toLocaleUpperCase();
        cardOgrn.textContent = cardData.ogrn;
        cardAdress.textContent = cardData.adress;
 

        basketCardContainer.appendChild(basketCardClone);

        if (!cardData.cardColor) {
            cardHang.remove()
            cardParamsImg.remove()
        }

        if (!cardData.cardParams) {
            cardParamsImg.remove()
        }
    });
}

renderBasketCard();

const allCheckbox = document.getElementById('basket__allinput') // VYNESTI

allCheckbox.addEventListener('click', () => {
    allCheckboxes()
})

function allCheckboxes() {
    const checkbox = document.querySelectorAll('#basket__input') // VYNESTI

    const isChecked = allCheckbox.querySelector('input[name=allInput]:checked') // VYNESTI
    checkbox.forEach((element) => {
        if (isChecked) {
            element.checked = true
        } else {
            element.checked = false
        }

    })
}
allCheckboxes()



const orderCaption = document.querySelector('.order__input-caption')

//функция, которая меняет текст заказать на сумму
function changeButtonText() {
    // Проверяем состояние чекбокса
    if (orderInput.checked) {
        // Если чекбокс отмечен, меняем текст кнопки на "Выключить"
        orderBtn.textContent = orderPrice.textContent + ' сом';
        orderCaption.style.display = "none";
    } else {
        // Если чекбокс не отмечен, меняем текст кнопки на "Включить"
        orderBtn.textContent = "Заказать";
        orderCaption.style.display = "block";
    }
}

const priceElement = document.querySelectorAll(".price__new-sum");

priceElement.forEach((element) => {
    if (element.textContent.length > 6) {
        element.classList.toggle("price__text-m");
    } else return;
});



// Оживляем попапы

const btnPoint = document.getElementById("btn__point"); //изменить в способе доставки
const btnPointOrder = document.getElementById("btnPointOrder"); // изменить в способе доставки(order)
const btnPay = document.getElementById("btnPay"); // изменить в способе оплаты
const btnPayOrder = document.getElementById("btnPayOrder"); // изменить в способе оплаты(order)
const popupDeliveryClose = document.getElementById("deliveryClose"); //крестик закрытия попап
const popupPayClose = document.getElementById("payClose"); // крестик закрытия попап
const popupDelivery = document.getElementById("popupDelivery");
const popupPay = document.getElementById("popupPay");
const blockPoint = document.getElementById("popup__point"); // блок пункта выдачи
const blockCorier = document.getElementById("popup__courier"); //блок адреса доставки
const btnChoiceCourier = document.getElementById("btnChoiceCourier"); //кнопка адреса доставки
const btnChoicePoint = document.getElementById("btnChoicePoint"); //кнопка пункта выдачи

function openPopupDelivery() {
    popupDelivery.classList.add("popup__active");
}

function closePopupDelivery() {
    popupDelivery.classList.remove("popup__active");
}

// функции переключения на блок доставки/курьера
function switchCorier() {
    blockCorier.classList.add("popup__visible");
    btnChoiceCourier.classList.add("popup__choice-active");
    blockPoint.classList.remove("popup__visible");
    btnChoicePoint.classList.remove("popup__choice-active");
}

function switchPoint() {
    blockCorier.classList.remove("popup__visible");
    btnChoiceCourier.classList.remove("popup__choice-active");
    blockPoint.classList.add("popup__visible");
    btnChoicePoint.classList.add("popup__choice-active");
}

function openPopupPay() {
    popupPay.classList.add("popup__active");
}

function closePopupPay() {
    popupPay.classList.remove("popup__active");
}

btnPayOrder.addEventListener("click", () => openPopupPay());

btnPay.addEventListener("click", () => openPopupPay());

popupPayClose.addEventListener("click", () => closePopupPay());

popupDeliveryClose.addEventListener("click", () => closePopupDelivery());

btnPointOrder.addEventListener("click", () => openPopupDelivery());

btnPoint.addEventListener("click", () => openPopupDelivery());

btnChoiceCourier.addEventListener("click", () => switchCorier());

btnChoicePoint.addEventListener("click", () => switchPoint());



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

function isValidSurname(surname) {
    const surnamePattern = /^[а-яА-Яa-zA-Z]+$/;
    return surnamePattern.test(surname)
}

function isValidName(name) {
    const namePattern = /^[а-яА-Яa-zA-Z]+$/;
    return namePattern.test(name)
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Функция для проверки валидности телефона
function isValidPhone(phone) {
    const phonePattern = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
    return phonePattern.test(phone);
}

// Функция для проверки валидности ИНН
function isValidInn(inn) {
    const innPattern = /^\d{10}$/;
    return innPattern.test(inn);
}

function allValidity() {

    // Добавляем обработчики событий на потерю фокуса
    let wasInputEntered = false;

    surnameInput.addEventListener("blur", function () { 
        spanSurname.classList.add('user__input-active')
        if (surnameInput.value.trim() !== "") {
            wasInputEntered = true;
            if (!isValidSurname(surnameInput.value)) { 
                surnameInput.classList.add('user__input-red')
                errorSurname.textContent = "Неверный формат фамилии"; 
            } else {
                errorSurname.textContent = ""; 
            } 
        } else if (wasInputEntered) {
            errorSurname.textContent = "Введите фамилию";
        } else {
            errorSurname.textContent = "";
        }
    });

    nameInput.addEventListener("blur", function () { 
        spanName.classList.add('user__input-active')
        if (nameInput.value.trim() !== "") {
            wasInputEntered = true;
            if (!isValidName(nameInput.value)) { 
                errorName.textContent = "Неверный формат имени";
                nameInput.classList.add('user__input-red') 
            } else {
                errorName.textContent = ""; 
            } 
        } else if (wasInputEntered) {
            errorName.textContent = "Укажите имя";
        } else {
            errorName.textContent = "";
        }
    });

    emailInput.addEventListener("blur", function () { 
        spanEmail.classList.add('user__input-active')
        if (emailInput.value.trim() !== "") {
            wasInputEntered = true;
            if (!isValidName(emailInput.value)) { 
                errorEmail.textContent = "Проверьте адрес электронной почты"; 
                emailInput.classList.add('user__input-red')
            } else {
                errorEmail.textContent = ""; 
            } 
        } else if (wasInputEntered) {
            errorEmail.textContent = "Пустое поле";
        } else {
            errorEmail.textContent = "";
            emailInput.classList.remove('user__input-red')
        }
    });

    phoneInput.addEventListener("blur", function () { 
        spanPhone.classList.add('user__input-active')
        if (phoneInput.value.trim() !== "") {
            wasInputEntered = true;
            if (!isValidName(phoneInput.value)) { 
                errorPhone.textContent = "Формат: +9 999 999 99 99"; 
                phoneInput.classList.add('user__input-red')
            } else {
                errorPhone.textContent = ""; 
            } 
        } else if (wasInputEntered) {
            errorPhone.textContent = "Укажите номер телефона";
        } else {
            errorPhone.textContent = "";
        }
    });

    innInput.addEventListener("blur", function () { 
        spanInn.classList.add('user__input-active')
        if (innInput.value.trim() !== "") {
            wasInputEntered = true;
            if (!isValidName(innInput.value)) { 
                errorInn.textContent = "Проверьте ИНН"; 
                innInput.classList.add('user__input-red')
                spanInnDown.classList.add('user__input-disable')

            } else {
                errorInn.textContent = ""; 
            } 
        } else if (wasInputEntered) {
            errorInn.textContent = "Укажите ИНН";
        } else {
            errorInn.textContent = "";
        }
    });

    // Очищаем сообщения об ошибке при вводе
    surnameInput.addEventListener("input", function () {
        if (isValidName(surnameInput.value)) {
            errorSurname.textContent = "";
            surnameInput.classList.remove('user__input-red')
        }
    });


    nameInput.addEventListener("input", function () {
        if (isValidName(nameInput.value)) {
            errorName.textContent = "";
            nameInput.classList.remove('user__input-red')
        }
    });


    emailInput.addEventListener("input", function () {
        if (isValidEmail(emailInput.value)) {
            errorEmail.textContent = "";
            emailInput.classList.remove('user__input-red')
        }
    });

    phoneInput.addEventListener("input", function () {
        if (isValidPhone(phoneInput.value)) {
            errorPhone.textContent = "";
            phoneInput.classList.remove('user__input-red')
        }
    });

    innInput.addEventListener("input", function () {
        if (isValidInn(innInput.value)) {
            errorInn.textContent = "";
            innInput.classList.remove('user__input-red')
        }
    });
}
orderBtn.addEventListener('click', () =>
    allValidity()
)


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const decrementBtn = card.querySelector('#decrement__btn');
        const incrementBtn = card.querySelector('#increment__btn');
        let countDisplay = card.querySelector('.card__count-number');
        let countMaxDisplay = card.querySelector('.card__left');
        const priceDisplay = card.querySelector('#price__new-l');
        const priceOldDisplay = card.querySelector('#price__old'); // старая цена для desktop
        const priceOldDisplaySmall = card.querySelector('#price__oldSmall');// старая цена для mobile
        const priceDisplaySmall = card.querySelector('#price__new-m');
        const originalPrice = priceDisplay.textContent;
        const originalOldPrice = priceOldDisplay.textContent;



        // считаем итоговую сумму
        let count = parseInt(countDisplay.textContent, 10);
        sumPrice = count * originalPrice;
        priceDisplay.textContent = sumPrice.toLocaleString();
        sumOld = count * originalOldPrice;
        priceOldDisplay.textContent = sumOld.toLocaleString() + ' сом';
        priceOldDisplaySmall.textContent = sumOld.toLocaleString() + ' сом';

        const countMax = parseInt(countMaxDisplay.textContent, 10);

        // выводим текст под счётчиком
        function countCaption() {
            if (countMax - count <= 2) {
                countMaxDisplay.classList.add('card__left-active');
                const residue = countMax - count
                countMaxDisplay.textContent = 'Осталось ' + residue + ' шт.'
            }
            else {
                countMaxDisplay.classList.remove('card__left-active')
            }
        }
        countCaption()

        decrementBtn.addEventListener('click', () => {
            count = parseInt(countDisplay.textContent, 10);
            if (count > 0) {
                count--;
                countDisplay.textContent = count;
                price = (count * originalPrice);
                priceDisplay.textContent = Math.round(price).toLocaleString();
                priceOld = (count * originalOldPrice)
                priceOldDisplay.textContent = Math.round(priceOld).toLocaleString() + ' сом';
                priceOldDisplaySmall.textContent = Math.round(priceOld).toLocaleString() + ' сом';
                getTotalSum();
                getTotalSale();
                totalSale();
                changeButtonText();
                countCaption();
                renderDeliveryImages();
            }
        });
        incrementBtn.addEventListener('click', () => {
            count = parseInt(countDisplay.textContent, 10);
            if (count < countMax) {
                count++;
                countDisplay.textContent = count;
                price = (count * originalPrice);
                priceDisplay.textContent = Math.round(price).toLocaleString();
                priceOld = (count * originalOldPrice)
                priceOldDisplay.textContent = Math.round(priceOld).toLocaleString() + ' сом';
                priceOldDisplaySmall.textContent = Math.round(priceOld).toLocaleString() + ' сом';
                getTotalSum();
                getTotalSale();
                totalSale();
                changeButtonText();
                countCaption();
                renderDeliveryImages();
            }
            else {
            }
        });
    });
});



const checkbox = document.querySelectorAll("input[name=basket__input]");
const card = Array.from(document.querySelectorAll("#card"));

checkbox.forEach((item) =>
    item.addEventListener("click", () => {
        getTotalSum();
        getTotalSale();
        totalSale();
        changeButtonText();
        renderDeliveryImages();
    })
);

//Функция итоговой суммы
const getTotalSum = () => {
    const totalValue = card.reduce((acc, val) => {
        const isChecked = val.querySelector('input[name=basket__input]:checked')
        if (isChecked) {
            const price = parseFloat(
                val.querySelector(".price__new-sum").textContent.replace(/\s/g, "")
            );
            const count = parseInt(
                val.querySelector(".card__count-number").textContent.replace(/\s/g, "")
            );
            return acc + price * count;
        }
        return acc;
    }, 0);
    const orderPriceElement = document.getElementById("order__price");
    const formattedSum = Math.round(totalValue).toLocaleString();
    orderPriceElement.textContent = formattedSum;
};

getTotalSum()

//Функиця подсчёта скидки
const getTotalSale = () => {
    const totalSaleValue = card.reduce((acc, val) => {
        const isChecked = val.querySelector('input[name=basket__input]:checked')
        if (isChecked) {
            const priceOld = parseFloat(
                val.querySelector("#price__old").textContent.replace(/\s/g, "")
            );
            const count = parseInt(
                val.querySelector(".card__count-number").textContent.replace(/\s/g, "")
            );
            return acc + priceOld;
        }
        return acc;
    }, 0);
    const orderPriceSaleElement = document.getElementById("order__sale");
    const formattedSaleSum = totalSaleValue.toLocaleString();
    orderPriceSaleElement.textContent = formattedSaleSum + ' com2';
};

function totalSale() {
    const totalOldPrice = document.getElementById('order__sale')
    const totalPrice = document.getElementById('order__price')
    const saleBlock = document.getElementById('block__sale')

    const totalOldNum = parseInt(totalOldPrice.textContent.replace(/\s/g, ""))
    const totalNum = parseInt(totalPrice.textContent.replace(/\s/g, ""))

    let totalSaleprice = totalOldNum - totalNum;
    let totalSale = totalSaleprice.toLocaleString();
    saleBlock.textContent = '− ' + totalSale + ' сом'
}
totalSale()

// Функция рендера карточке в блок доставки
function renderDeliveryImages() {
    const card = document.querySelectorAll('.card'); 
    const delivery = document.querySelector('#imgDelivery'); // Блок доставки 5-6 февраля
    const deliverySlow = document.querySelector('#imgDeliverySlow'); // Блок доставки 7-8 февраля
    const containerBlock = document.getElementById('containerBlock'); 

// Чистим содержимое
    delivery.innerHTML = '';
    deliverySlow.innerHTML = '';

    card.forEach((element) => {
        const cardCount = element.querySelector('.card__count-number')
        const isChecked = element.querySelector('input[name=basket__input]:checked')

        if (isChecked) {

            const img = element.querySelector('.card__avatar-container');
            const newImg = img.cloneNode(true);
            newImg.classList.add('delivery__image');
            const countSpan = document.createElement('span');
            countSpan.classList.add('card__count-span');
            countSpan.textContent = cardCount.textContent;
            if (countSpan.textContent > 184) {
                countSpan.textContent = '184';
            }

            newImg.appendChild(countSpan);
            delivery.appendChild(newImg);

            if (Number(cardCount.textContent) > 184) {
                const newImgSlow = newImg.cloneNode(true);
                const countSpanSlow = newImgSlow.querySelector('.card__count-span'); // находим элемент span в клонированном изображении
                countSpanSlow.textContent = Number(cardCount.textContent) - 184; // вычитаем 184 из значения счетчика
                deliverySlow.appendChild(newImgSlow);
                containerBlock.classList.remove('delivery__container-disable');
            } 
        }
    });
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', renderDeliveryImages);
});
renderDeliveryImages();




// Получаем элементы попапа
const popup = document.getElementById('popupPay');
const checkboxesPopup = popup.querySelectorAll('.popup__card-checkbox');
const confirmButton = popup.querySelector('.popup__button');

// Получаем элемент для вывода картинки и текста
const userCard = document.querySelector('.user__card');
const userCardImage = userCard.querySelector('img');
const userCardText = userCard.querySelector('span');
const userOrderCard = document.querySelector('.order__card')
const userOrderImage = userOrderCard.querySelector('img')
const userOrderText = userOrderCard.querySelector('p')

// Обработчик события для кнопки "Выбрать"
confirmButton.addEventListener('click', () => {
    // Находим выбранный чекбокс
    const selectedCheckbox = Array.from(checkboxesPopup).find(checkbox => checkbox.checked);

    // Получаем картинку и текст из выбранного чекбокса
    const selectedImage = selectedCheckbox.nextElementSibling.querySelector('img').getAttribute('src');
    const selectedText = selectedCheckbox.nextElementSibling.textContent;

    // Очищаем содержимое элемента для текста
    userCardText.innerText = '';

    // Устанавливаем картинку и текст в элемент для вывода
    userCardImage.setAttribute('src', selectedImage);
    userOrderImage.setAttribute('src', selectedImage)
    userCardText.innerText = selectedText;
    userOrderText.innerText = selectedText;
});

// Обработчик события для каждого чекбокса
checkboxesPopup.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        // Снимаем выбор со всех чекбоксов
        checkboxesPopup.forEach(cb => {
            cb.checked = false;
        });

        // Выбираем только текущий чекбокс
        checkbox.checked = true;
    });
});


// Получаем элементы для вставки блока содержимого
const checkboxesDelivery = popupDelivery.querySelectorAll('.popup__card-checkbox');
const confirmButtonPoint = popupDelivery.querySelector('#btnPoint');
const confirmButtonCourier = popupDelivery.querySelector('#btnCourier')
const deliveryText = document.querySelector('.delivery__text-l');
const deliveryCaption = document.querySelector('.delivery__text-s');
const deliveryName = document.getElementById('deliveryMethod');
const orderTextAdress = document.getElementById('orderText');
const orderName = document.getElementById('orderName');
const orderDate = document.getElementById('orderDate')

// Обработчик события для кнопки "Выбрать"
confirmButtonPoint.addEventListener('click', () => {
    // Находим выбранный чекбокс
    const selectedCheckbox = Array.from(checkboxesDelivery).find(checkbox => checkbox.checked);

    // Получаем текст из выбранного чекбокса
    const selectedText = selectedCheckbox.nextElementSibling.querySelector('.popup__text').innerText;

    // Устанавливаем текст в блок для вывода
    deliveryText.innerText = selectedText;
    orderTextAdress.innerText = selectedText;
    deliveryName.innerText = 'Пункт выдачи';
    orderName.innerText = 'Доставка в пункт выдачи';
    deliveryCaption.style.display = 'block';
    orderDate.style.display = 'block';
});

// Обработчик события для каждого чекбокса
checkboxesDelivery.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        // Снимаем выбор со всех чекбоксов
        checkboxesDelivery.forEach(cb => {
            cb.checked = false;
        });

        // Выбираем только текущий чекбокс
        checkbox.checked = true;
    });
});

// курьером
const checkboxesCourier = popupDelivery.querySelectorAll('.popup__card-checkboxCourier');

// Обработчик события для кнопки "Выбрать"
confirmButtonCourier.addEventListener('click', () => {
    // Находим выбранный чекбокс
    const selectedCheckbox = Array.from(checkboxesCourier).find(checkbox => checkbox.checked);

    // Получаем текст из выбранного чекбокса
    const selectedText = selectedCheckbox.nextElementSibling.querySelector('.popup__text').innerText;

    // Устанавливаем текст в блок для вывода
    deliveryText.innerText = selectedText;
    orderTextAdress.innerText = selectedText;
    deliveryName.innerText = 'Курьером';
    orderName.innerText = 'Доставка курьером'
    deliveryCaption.style.display = 'none';
    orderDate.style.display = 'none';
});

// Обработчик события для каждого чекбокса
checkboxesCourier.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        // Снимаем выбор со всех чекбоксов
        checkboxesCourier.forEach(cb => {
            cb.checked = false;
        });

        // Выбираем только текущий чекбокс
        checkbox.checked = true;
    });
});

