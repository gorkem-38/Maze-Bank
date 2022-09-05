// Fontawesome @import
import '@fortawesome/fontawesome-free/js/all';
import { max } from 'lodash';
//  Tailwind @import
import "./assets/css/styles.css";

const resultsBank = document.getElementById("results-bank");
const resultsCounter = document.getElementById("results-counter");
const resultsAccount = document.getElementById("results-account");
const resultsRib = document.getElementById("results-rib");
const resultsIban = document.getElementById("results-iban");
const resultsBic = document.getElementById("results-bic");

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min));
};

resultsBank.innerHTML = getRandom(12345678901, 99999999999);
resultsCounter.innerHTML = getRandom(7630001007941234, 7630099999999999);
resultsAccount.innerHTML = getRandom(10000, 99999);
resultsRib.innerHTML = getRandom(1, 999999);
resultsIban.innerHTML = "FR" + getRandom(10, 99);
resultsBic.innerHTML = getRandom(10, 99);

const depositMoney = document.getElementById("deposit-money");
const getMoney = document.getElementById("get-money");
const btn = document.getElementById("btn-reset");
const randomSold = getRandom(-100, 1000);

depositMoney.innerHTML = randomSold;

const body = document.querySelector("body");

const calculate = () => {
  if (randomSold < 1) {
    let results = parseInt(depositMoney.value);
    let total = (randomSold += results);
    resultsSold.innerHTML = total;
    return total;
  } else randomSold > 1;
  {
    body.classList.add("bg-blue-500");
    body.classList.remove("bg-red-500");
    let results = parseInt(inputDepot.value);
    let total = (randomSold += results);
    resultsSold.innerHTML = total;
    return total;
  };
};

btn.addEventListener("click", calculate);

const calculateNegatif = () => {
  if (randomSold > 1) {
    let results = parseInt(inputTrade.value);
    let total = (randomSold -= results);
    resultsSold.innerHTML = total;
    Math.max(-100);
    return total;
  } else randomSold < 1; {
    body.classList.remove("bg-blue-500");
    body.classList.add("bg-red-500");
  }
}