 // 1. Присвоить значения.
const money = +prompt('Ваш месячный доход?'),
      income = 'Донорство',
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
      deposit = confirm('Есть ли у вас депозит в банке?'),
      expenses1 = prompt('Введите обязательную статью расходов?'),
      expenses2 = prompt('Введите обязательную статью расходов?'),
      amount1 = +prompt('Во сколько это обойдется?'),
      amount2 = +prompt('Во сколько это обойдется?'),
      mission = 1000000,
      period = 7,     
      budgetMonth = (money - (amount1 + amount2)),  
      budgetDay = budgetMonth / 30,  
      missionTarget = ( mission / budgetMonth);
     
// 2. методы и свойтва
console.log(typeof money, typeof income, typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на месяц ' + budgetMonth);
console.log('цель будет достигнута за: ' + (Math.ceil(missionTarget)) + ' месяцев');
console.log(Math.floor(budgetDay));

if (budgetDay >= 1200){
   console.log('У вас высокий уровень дохода');
   } else if (budgetDay >= 600 && budgetDay < 1200) {
      console.log('У вас средний уровень дохода');
   } else if (budgetDay > 0 && budgetDay < 600) {
         console.log('К сожалению у вас уровень дохода ниже среднего');
   } else  {    console.log('Что то пошло не так'); }