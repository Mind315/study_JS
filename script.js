"use strict";

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let expenses1, expenses2;
let money,
  income = "Донорство",
  addExpenses = prompt("Перечислите возможные расходы через запятую", [
    "ЖКХ",
    " ипотека",
  ]),
  deposit = confirm("Есть ли у вас депозит в банке?");
// expenses1 = prompt('Введите обязательную статью расходов?', ['комуналка']),
// amount1 = +prompt('Во сколько это обойдется?', ['6500']),
// expenses2 = prompt('Введите обязательную статью расходов?', ['пожрать']),
// amount2 = +prompt('Во сколько это обойдется?', ['4000']),
const mission = 1000000,
  period = 7;

const start = function () {
  //money = +prompt('Ваш месячный доход?', 50000);

  do {
    money = +prompt("Ваш месячный доход?", 50000);
  } while (!isNumber(money));
};
start();
const showTypeOf = function (data) {
  console.log(data, typeof data);
};
const getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      expenses1 = prompt("Введите обязательную статью расходов?", [
        "комуналка",
      ]);
    } else if (i === 1) {
      expenses2 = prompt("Введите обязательную статью расходов?", ["пожрать"]);
    }

    do {
      sum += +prompt("Во сколько это обойдется?");
    } while (!isNumber(sum));
  }

  console.log(sum);
  return sum;
};
const expensesAmount = getExpensesMonth();

const getAccumulatedMonth = function () {
  return money - expensesAmount;
};
const accumulatedMonth = getAccumulatedMonth();

const budgetDay = accumulatedMonth / 30,
  missionTarget = mission / accumulatedMonth;


  const getTargetMonth = function () {
   if (mission / accumulatedMonth > 0) {
     return (mission / accumulatedMonth);
   } else {
     return;
   }
 };
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(expensesAmount);
console.log(addExpenses.toLowerCase().split(", "));
console.log("Бюджет на месяц " + accumulatedMonth);
console.log("Расходы замесяц: " + expensesAmount);
console.log("Бюджет на день: " + Math.floor(budgetDay));

if (mission / accumulatedMonth > 0) {
  console.log(
    "цель будет достигнута за: " + Math.ceil(getTargetMonth()) + " месяцев"
  );
} else {
  console.log("не будет достигнута");
}



const getStatusInCome = function () {
  if (budgetDay >= 1200) {
    return "У вас высокий уровень дохода";
  } else if (budgetDay >= 600 && budgetDay < 1200) {
    return "У вас средний уровень дохода";
  } else if (budgetDay >= 0 && budgetDay < 600) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else {
    console.log("Что то пошло не так");
  }
};
console.log(getStatusInCome());
