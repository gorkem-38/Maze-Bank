// Fontawesome @import
import '@fortawesome/fontawesome-free/js/all';
//  Tailwind @import
import "./assets/css/styles.css";

// Generate random numbers
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min));
};

const randomBank = document.getElementById("random-bank");
const randomCounter = document.getElementById("random-counter");
const randomAccount = document.getElementById("random-account");
const randomRib = document.getElementById("random-rib");
const randomIban = document.getElementById("random-iban");
const randomBic = document.getElementById("random-bic");

const buttonRandom = () => {
  randomBank.innerHTML = getRandom(10000, 99999);
  randomCounter.innerHTML = getRandom(1000, 9999);
  randomAccount.innerHTML = getRandom(11111111111, 99999999999);
  randomRib.innerHTML = getRandom(10, 99);
  randomIban.innerHTML = `FR` + getRandom(759999999999, 770000000000);
  randomBic.innerHTML = `AGRIPFR` + getRandom(1,9);
};

const buttonGen = document.getElementById("btn-gen");
buttonGen.addEventListener("click", buttonRandom);


const depoCash = document.getElementById("deposit-money");
const buttonDepo = document.getElementById("submit-money");
const withdrawCash = document.getElementById("get-money");
const buttonWithdraw = document.getElementById("withdraw-money");

const resultsSold = document.getElementById("results-sold");

let currentSold = 0;

const addSold = () => {
  let value = parseInt(depoCash.value);
  let total = (currentSold += value);
  resultsSold.innerHTML = total;
  return total;
};
  
buttonDepo.addEventListener("click", addSold);
depoCash.addEventListener("keydown", (key) => {
  key.code === "Enter" || key.code === "NumpadEnter" ? addSold() : "";
});

const withdrawSold = () => {
  let value = parseInt(withdrawCash.value);
  let total = (currentSold -= value);
  resultsSold.innerHTML = total;
  return total;
};

buttonWithdraw.addEventListener("click", withdrawSold);
withdrawCash.addEventListener("keydown", (key) => {
  key.code === "Enter" || key.code === "NumpadEnter" ? withdrawSold() : "";
});


// const msgOverdraft = document.getElementById("msg-overdraft");