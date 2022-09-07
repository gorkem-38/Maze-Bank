// function pause(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function afficherDate() {
//   while (true) {
//     await pause(1000);
//     var cejour = new Date();
//     var options = {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "2-digit",
//     };
//     var date = cejour.toLocaleDateString("fr-FR", options);
//     var heure =
//       ("0" + cejour.getHours()).slice(-2) +
//       ":" +
//       ("0" + cejour.getMinutes()).slice(-2) +
//       ":" +
//       ("0" + cejour.getSeconds()).slice(-2);
//     var dateheure = date + " " + heure;
//     var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, (lettre) =>
//       lettre.toUpperCase()
//     );
//     document.getElementById("dateheure").innerHTML = dateheure;
//   }
// }
// afficherDate();
// ******************* fin de date **************

// fonction add euro

// Fontawesome @import
import '@fortawesome/fontawesome-free/js/all';
import { max } from 'lodash';
//  Tailwind @import
import "./assets/css/styles.css";

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min));
}

const randomBank = document.getElementById("random-bank");
const randomCounter = document.getElementById("random-counter");
const randomAccount = document.getElementById("random-account");
const randomRib = document.getElementById("random-rib");
const randomIban = document.getElementById("random-iban");
const randomBic = document.getElementById("random-bic");

randomBank.innerHTML = getRandom(12345678901, 99999999999);
randomAccount.innerHTML = getRandom(12345678901, 99999999999);
randomCounter.innerHTML = getRandom(1, 999999);
randomRib.innerHTML = getRandom(10, 99);
randomIban.innerHTML = `FR` + getRandom(7630001007941234, 7630099999999999);
randomBic.innerHTML = getRandom(10000, 99999);

const depotMoney = document.getElementById("deposit-money");
const submitMoney = document.getElementById("submit-money");
const getMoney = document.getElementById("get-money");
const withdrawMoney = document.getElementById("withdraw-money");
const resultsSold = document.getElementById("result-sold");
const afterSold = document.getElementById("after-sold");

const btnGenerate = document.getElementById("btn-gen")

const randomSold = getRandom(-400, 1500);

resultsSold.innerHTML = randomSold;

const final = () => {
  if (randomSold < 1) {
    let results = parseInt(submitMoney.value);
    let total = (randomSold += results);
    resultsSold.innerHTML = total;
    return total;
  } else randomSold >= 1; 
  {
    let results = parseInt(submitMoney.value);
    let total = (randomSold += results);
    resultsSold.innerHTML = total;
    return total;
  };
};

depotMoney.addEventListener("click", changes);

const negatif = () => {
  if (randomSold > 1) {
    let results = parseInt(getMoney.value);
    let total = (randomSold -= results);
    resultsSold.innerHTML = total;
    Math.max(-100);
    return total;
  } else randomSold < 1;
  {
    body.classList.remove("bg-blue-500");
    body.classList.add("bg-red-500");
  };
};

negatif();