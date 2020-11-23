 // 1. Присвоить значения.
const money = 21000,
      income = 'Донорство',
      addExpenses = 'ЖКЧ, алкоголь, Ипотека',
      deposit = true,
      mission = 1000000,
      period = 7,
      budgetDay = money / 30;
// 2. методы и свойтва
console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));

console.log( budgetDay);