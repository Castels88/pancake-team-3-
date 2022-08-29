// Win Millions In Prizes
function randomNum(base, x) {
  return Math.floor(Math.random() * x + base);
}

let prediction = randomNum(190, 10);
let lottery1 = "61";
let lottery2 = randomNum(255, 367);

let leftCard = document.querySelector(".left-card");
let amountLeftCard = leftCard.querySelector(".card-amount");
let leftCardAmount = amountLeftCard.querySelector("h2");
leftCardAmount.innerHTML = `${prediction}$ billion`;

let rightCard = document.querySelector(".right-card");
let amountRightCard = rightCard.querySelector(".card-amount");
let rightCardAmount = amountRightCard.querySelector("h2");
rightCardAmount.innerHTML = `$${lottery1}.${lottery2}`;

// Cake Makes our world go round
let dataTable = document.querySelector(".cake-data-table");
let data1 = dataTable.querySelector(".data1");
let dataValue1 = data1.querySelector(".data-num");
let data2 = dataTable.querySelector(".data2");
let dataValue2 = data2.querySelector(".data-num");
let data3 = dataTable.querySelector(".data3");
let dataValue3 = data3.querySelector(".data-num");
let data4 = dataTable.querySelector(".data4");
let dataValue4 = data4.querySelector(".data-num");
let data5 = dataTable.querySelector(".data5");
let dataValue5 = data5.querySelector(".data-num");
let data6 = dataTable.querySelector(".data6");
let dataValue6 = data6.querySelector(".data-num");

dataValue1.innerHTML = `${randomNum(147, 10)},${randomNum(
  000,
  999
)},${randomNum(000, 999)}`;
dataValue2.innerHTML = `${randomNum(315, 10)},${randomNum(
  000,
  999
)},${randomNum(000, 999)}`;
dataValue3.innerHTML = `${randomNum(750, 5)},000,000`;
dataValue4.innerHTML = `$${randomNum(500, 20)} million`;
dataValue5.innerHTML = `${randomNum(522, 10)}.${randomNum(
  000,
  999
)}.${randomNum(000, 999)}`;
dataValue6.innerHTML = `13.${randomNum(00, 75)}/block`;
