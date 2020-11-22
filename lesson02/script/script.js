 // 1. Присвоить значения.
const money = 21000;
const income = 'Донорство';
const addExpenses = 'ЖКЧ, алкоголь, Ипотека';
const deposit = true;
const mission = 1000000;
const period = 7;
// 2. методы и свойтва
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

const budgetDay = money / 30;
console.log(budgetDay);