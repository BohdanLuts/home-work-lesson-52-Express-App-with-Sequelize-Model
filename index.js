const { sequelize, Phone, Sequelize } = require('./models');

sequelize
  .sync()
  .then(() => console.log('Sync OK'))
  .catch(e => console.log('e :>> ', e));

// 1. Додавання нового телефону: (Пулл телефонів в кінці коду)

// (async () => {
//   const phone = {
//     model: '12 Pro',
//     brand: 'Iphone',
//     year: 2020,
//     ram: 128,
//     processor: 'Apple A14 Bionic',
//     screenDiagonal: 6.7,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// 2. Отримання списку телефонів:

// (async () => {
//   const foundPhones = await Phone.findAll({ raw: true });
//   console.log('foundPhones :>> ', foundPhones);
// })();

// 2*. 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва):

// (async () => {
//   const foundPhones = await Phone.findAll({
//     raw: true,
//     limit: 4,
//     offset: 8,
//     order: [['year', 'DESC']],
//   });
//   console.log('foundPhones :>> ', foundPhones);
// })();

//3.*отримання списку телефонів певного року видання:

// (async () => {
//   const foundPhones = await Phone.findAll({
//     raw: true,
//     where: {
//       year: '2010',
//     },
//   });
//   console.log('foundPhones :>> ', foundPhones);
// })();

// 4.*отримання списку телефонів старше 2020 року випуску:

// (async () => {
//   const foundPhones = await Phone.findAll({
//     raw: true,
//     where: {
//       year: {
//         [Sequelize.Op.lt]: 2020,
//       },
//     },
//   });
//   console.log('foundPhones :>> ', foundPhones);
// })();

// 5. оновлення: додати нфс всім телефонам 2021 року випуску:

// (async () => {
//   const updatePhones = await Phone.update(
//     { hasNFC: true },
//     {
//       raw: true,
//       where: {
//         year: 2021,
//       },
//     }
//   );
//   console.log('updatePhones :>> ', updatePhones);
// })();

// 6. Видалення телефонів 2010 року випуску:

// (async () => {
//   const deletePhones = await Phone.destroy({
//     raw: true,
//     where: {
//       year: 2010,
//     },
//   });
//   console.log('deletePhones :>> ', deletePhones);
// })();

////Phones pool////////

// (async () => {
//   const phone = {
//     model: '12 Mini',
//     brand: 'Iphone',
//     year: 2020,
//     ram: 128,
//     processor: 'Apple A14',
//     screenDiagonal: 6.1,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: '11 Pro Max',
//     brand: 'Iphone',
//     year: 2019,
//     ram: 128,
//     processor: 'Apple A13 Bionic',
//     screenDiagonal: 7.0,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: '11 Pro',
//     brand: 'Iphone',
//     year: 2019,
//     ram: 128,
//     processor: 'Apple A13 Bionic',
//     screenDiagonal: 6.7,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: '11 Pro Max',
//     brand: 'Iphone',
//     year: 2019,
//     ram: 128,
//     processor: 'Apple A13 Bionic',
//     screenDiagonal: 7.0,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: '11',
//     brand: 'Iphone',
//     year: 2019,
//     ram: 128,
//     processor: 'Apple A13',
//     screenDiagonal: 6.7,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: '12',
//     brand: 'Iphone',
//     year: 2020,
//     ram: 128,
//     processor: 'Apple A14',
//     screenDiagonal: 6.7,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: 'Iphone 8',
//     brand: 'Iphone',
//     year: 2016,
//     ram: 128,
//     processor: 'Apple A10',
//     screenDiagonal: 5.9,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: '8S',
//     brand: 'Iphone',
//     year: 2017,
//     ram: 128,
//     processor: 'Apple A11',
//     screenDiagonal: 5.9,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: '6S',
//     brand: 'Iphone',
//     year: 2014,
//     ram: 64,
//     processor: 'Apple A9',
//     screenDiagonal: 5.3,
//     hasNFC: true,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: 'E72',
//     brand: 'Nokia',
//     year: 2010,
//     ram: 16,
//     processor: 'Symbian',
//     screenDiagonal: 3.5,
//     hasNFC: false,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: 'Signature',
//     brand: 'Vertu',
//     year: 2010,
//     ram: 32,
//     processor: 'Symbian 4.9',
//     screenDiagonal: 2.5,
//     hasNFC: false,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: 'A20',
//     brand: 'Samsung',
//     year: 2021,
//     ram: 128,
//     processor: 'SA20',
//     screenDiagonal: 5.6,
//     hasNFC: false,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: 'A22',
//     brand: 'Samsung',
//     year: 2021,
//     ram: 256,
//     processor: 'SA69',
//     screenDiagonal: 5.8,
//     hasNFC: false,
//   };

//   const createdPhone = await Phone.create(phone);
// })();

// (async () => {
//   const phone = {
//     model: 'Redmi note 12',
//     brand: 'Xiaomi',
//     year: 2022,
//     ram: 256,
//     processor: 'XR21',
//     screenDiagonal: 7.0,
//     hasNFC: false,
//   };

//   const createdPhone = await Phone.create(phone);
// })();
