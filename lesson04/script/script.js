 'use strict';

let   money = +prompt('Ваш месячный доход?'),
      income = 'Донорство',
      addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', ['ЖКХ', ' ипотека']),
      deposit = confirm('Есть ли у вас депозит в банке?'),
      expenses1 = prompt('Введите обязательную статью расходов?', ['комуналка']),
      amount1 = +prompt('Во сколько это обойдется?', ['6500']),
      expenses2 = prompt('Введите обязательную статью расходов?', ['пожрать']),
      amount2 = +prompt('Во сколько это обойдется?', ['4000']),
      mission = 1000000,
      period = 7;     

 
 const showTypeOf = function(data) {
   console.log(data, typeof(data));
 };
let getExpensesMonth = function(){
   return amount1 + amount2;
};
let getAccumulatedMonth = function(){
  return money - (amount1 + amount2);
};
const    accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
  return mission / accumulatedMonth;
};
const    resultGetExpensesMonth = getExpensesMonth(),    
         budgetDay = accumulatedMonth / 30,  
         missionTarget = ( mission / accumulatedMonth);


 showTypeOf(money);
 showTypeOf(income);
 showTypeOf(deposit);

console.log(resultGetExpensesMonth);
console.log(addExpenses.toLowerCase().split(', '));
console.log('Бюджет на месяц ' + accumulatedMonth);
console.log('цель будет достигнута за: ' + (Math.ceil(getTargetMonth())) + ' месяцев');
console.log('Бюджет на день: ' + Math.floor(budgetDay));

const getStatusInCome = function(){
   if (budgetDay >= 1200){
      return('У вас высокий уровень дохода');
   }  else if (budgetDay >= 600 && budgetDay < 1200) {
      return('У вас средний уровень дохода');
   }  else if (budgetDay >= 0 && budgetDay < 600) {
      return('К сожалению у вас уровень дохода ниже среднего');
   }  else  {    console.log('Что то пошло не так'); }
   
};
console.log(getStatusInCome());




