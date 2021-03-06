// Пример1
// Напишите две функции:
// letMeSeeYourName(callback) - спрашивает имя пользователя через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя и логирующий в консоль строку "Привет" + name

// function letMeSeeYourName(callback) {
//   const userName = prompt(`Как ваше имя?`);

//   userName !== null
//     ? callback(userName)
//     : alert(`Жаль, что вы не хотите знакомиться...`);
// }

// function greet(userName) {
//   console.log(`Привет ${userName}!`);
// }

// letMeSeeYourName(greet);
// console.log(letMeSeeYourName(greet));

// Пример2:
// Напишите две функции:
// makeProduct(name, price, callback) - принимает имя и цену товара, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// showProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль

function makeProduct(name, price, callback) {
  let id = 0;
  const product = { id: (id += 1), name, price };
  callback(product);
}

function showProduct(product) {
  console.log(product);
}

makeProduct('grecha', 50, showProduct);
makeProduct('pelmeshki', 80, showProduct);

// Пример 3:
// function makeDishWithShef(shefName, dish) {
//     console.log(`Шеф ${shefName} готовит ${dish}`);
// }
// makeDishWithShef('Поли', 'пирожок');
// makeDishWithShef('Поли', 'чай');
// makeDishWithShef('Манго', 'тортик');
// makeDishWithShef('Манго', 'кофе');
// Пример 4 (this):
// Исправьте ошибки чтобы код работал.
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   }
// }
// product.showPrice();

// Пример 5 - Привязка контекста
// Исправьте ошибки чтобы код работал.
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   }
// }
// function callAction(action) {
//   action();
// }
// callAction(product.showPrice);
