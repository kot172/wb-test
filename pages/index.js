import {
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
} from "../scripts/constants.js"

//Функции переворачивание стрелочки
function rotateGoods() {
    disableBtngoods.classList.toggle("basket__disable-active");
}

function rotateMissing() {
    disableBtnMissing.classList.toggle("basket__disable-active");
}

//Функции открытия и закрытия корзин
function handleGoods() {
    basketGoods.classList.toggle("card__disable");
}

function handleMissing() {
    basketMissing.classList.toggle("card__disable");
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

//рендерим корзину "отсутсвуют"
function renderCards() {
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

//Рендерим актуальную корзину
function renderBasketCard() {
    cardsData.forEach((cardData) => {
        const basketCardClone = basketCardTemplate.content.cloneNode(true);
        const card = basketCardClone.getElementById('card')
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

        card.classList.add('active-card');
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

// Устанавливаем слушатель на чекбоксы
allCheckbox.addEventListener('click', () => {
    allCheckboxes()
})

function allCheckboxes() {
    const checkbox = document.querySelectorAll('#basket__input') 
    const isChecked = allCheckbox.querySelector('input[name=allInput]:checked') 

    checkbox.forEach((element) => {
        if (isChecked) {
            element.checked = true
        } else {
            element.checked = false
        }

    })
}
allCheckboxes()

//функция, которая меняет текст заказать на сумму
function changeButtonText() {
    // Проверяем состояние чекбокса
    if (orderInput.checked) {
        // Если чекбокс отмечен, меняем текст кнопки на "Выключить"
        orderBtn.textContent = 'Оплатить ' + orderPrice.textContent + ' сом';
        orderCaption.style.display = "none";
    } else {
        // Если чекбокс не отмечен, меняем текст кнопки на "Включить"
        orderBtn.textContent = "Заказать";
        orderCaption.style.display = "block";
    }
}
orderInput.addEventListener('click', () => changeButtonText());


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

//Функции валидации, делаем условия
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


function isValidPhone(phone) {
    const phonePattern = /^\+7 \d{3} \d{3} \d{2} \d{2}$/;
    return phonePattern.test(phone);
}


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
    const cards = document.querySelectorAll('.active-card');

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
        const sumPrice = (count * originalPrice);
        priceDisplay.textContent = sumPrice.toLocaleString();
        priceDisplaySmall.textContent = sumPrice.toLocaleString();//
        const sumOld = count * originalOldPrice;
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
                const price = (count * originalPrice);
                priceDisplay.textContent = Math.round(price).toLocaleString();
                priceDisplaySmall.textContent = Math.round(price).toLocaleString(); //
                const priceOld = (count * originalOldPrice)
                priceOldDisplay.textContent = Math.round(priceOld).toLocaleString() + ' сом';
                priceOldDisplaySmall.textContent = Math.round(priceOld).toLocaleString() + ' сом';
                getTotalSum();
                getTotalSale();
                totalSale();
                changeButtonText();
                countCaption();
                renderDeliveryImages();
                priceSize();
                totalAmount();
                hideDeliverySlow();
            }
        });
        incrementBtn.addEventListener('click', () => {
            count = parseInt(countDisplay.textContent, 10);
            if (count < countMax) {
                count++;
                countDisplay.textContent = count;
                const price = (count * originalPrice);
                priceDisplay.textContent = Math.round(price).toLocaleString();
                priceDisplaySmall.textContent = Math.round(price).toLocaleString(); //
                const priceOld = (count * originalOldPrice)
                priceOldDisplay.textContent = Math.round(priceOld).toLocaleString() + ' сом';
                priceOldDisplaySmall.textContent = Math.round(priceOld).toLocaleString() + ' сом';
                getTotalSum();
                getTotalSale();
                totalSale();
                changeButtonText();
                countCaption();
                renderDeliveryImages();
                priceSize();
                totalAmount();
                hideDeliverySlow();
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
        hideDeliverySlow();
    })
);

//Функция итоговой суммы
const getTotalSum = () => {
    const totalValue = card.reduce((acc, val) => {
        const isChecked = val.querySelector('input[name=basket__input]:checked')
        if (isChecked) {
            const price = parseFloat(
                val.querySelector("#price__new-m").textContent.replace(/\s/g, "")
            );
            const count = parseInt(
                val.querySelector(".card__count-number").textContent.replace(/\s/g, "")
            ); return acc + price;
        }
        return acc;
    }, 0);
    const orderPriceElement = document.getElementById("order__price");
    const formattedSum = Math.round(totalValue).toLocaleString();
    orderPriceElement.textContent = formattedSum;
};
setTimeout(getTotalSum, 50)


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
    orderPriceSaleElement.textContent = formattedSaleSum + ' com';
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
setTimeout(totalSale, 50)

//Меняем шрифт у суммы, если кол-во символов больше 6
function priceSize() {
    const priceElement = document.querySelectorAll(".price__new-sum");//Сумма товара
    priceElement.forEach((element) => {
        if (element.textContent.length > 6) {
            element.classList.add("price__text-m");
        } else {
            element.classList.remove("price__text-m");
        };
    });
}
priceSize()
  
// Функция рендера карточке в блок доставки
function renderDeliveryImages() {
    const card = document.querySelectorAll('.card');
    const delivery = document.querySelector('#imgDelivery'); // Блок доставки 5-6 февраля
    const deliverySlow = document.querySelector('#imgDeliverySlow'); // Блок доставки 7-8 февраля
    const containerBlock = document.getElementById('containerBlockSlow');

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

// функция которая генерирует надпись, когда корзина свёрнута
function totalAmount() {
const basketProduct = document.getElementById('basket__product');
const basketSum = document.getElementById('basket__sum');
const fullSumm = document.querySelectorAll('#price__new-l');
const fullCount = document.querySelectorAll('#card__count')
let totalSum = 0;
let totalCount = 0;

fullSumm.forEach(item => {
  const price = parseFloat(item.textContent.replace(/\s/g, ""));
  totalSum += price;
});

fullCount.forEach(item => {
    const count = parseFloat(item.textContent);
    totalCount += count;
  });
basketProduct.textContent =  totalCount + ' товаров ';
basketSum.textContent = ' ' + totalSum.toLocaleString() + ' сом';
}
setTimeout(totalAmount, 50);


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

function hideDeliverySlow() {
    const containerBlock = document.querySelectorAll('.delivery__container-date');
    containerBlock.forEach(element => {
        const deliveryFast = element.querySelector('.delivery__container-img')
        const picture = element.querySelector('.card__avatar')
        if (!deliveryFast.innerHTML) {
            deliveryFast.parentElement.style.display = 'none'
                }
        else {
            deliveryFast.parentElement.style.display = 'flex'
        }
    });

}
hideDeliverySlow()