// Fontawesome @import
import "@fortawesome/fontawesome-free/js/all";
//  Tailwind @import
import "./assets/css/styles.css";

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min));
};

// Get Id and random numbers function
const randomAccount = document.getElementById("random-account");
const randomIban = document.getElementById("random-iban");
const randomBic = document.getElementById("random-bic");
const randomSold = document.getElementById("random-sold");

const buttonRandom = () => {
  randomAccount.innerHTML = getRandom(11111111111, 99999999999);
  randomIban.innerHTML = `FR` + getRandom(759999999999, 770000000000);
  randomBic.innerHTML = `AGRIPFR` + getRandom(1, 9);
  randomSold.innerHTML = getRandom(100, 300) + `$`;
};

const buttonGenerate = document.getElementById("btn-send");
buttonGenerate.addEventListener("click", buttonRandom);
////////////////////////-----------------
////////////////////////-----------------
////////////////////////-----------------
////////////////////////-----------------
////////////////////////-----------------
// Save Data
const inputFname = document.getElementById("input-fname");
const inputLname = document.getElementById("input-lname");
const inputAccount = document.getElementById("input-account");
const inputIban = document.getElementById("input-iban");
const inputBic = document.getElementById("input-bic");
const inputSold = document.getElementById("input-sold");

const randomFname = document.getElementById("random-fname");
const randomLname = document.getElementById("random-lname");

const button = document.getElementById("btn-submit");

const SaveData = () => {
  randomFname.innerHTML = inputFname.value;
  randomLname.innerHTML = inputLname.value;
  randomAccount.innerHTML = inputAccount.value;
  randomIban.innerHTML = inputIban.value;
  randomBic.innerHTML = inputBic.value;
  randomSold.innerHTML = `${inputSold.value}$`;
};

button.addEventListener("click", SaveData);

// Cash Deposit and Withdrawal
const inputDeposit = document.getElementById("deposit-money");
const btnDeposit = document.getElementById("submit-money");
const inputWithdrawal = document.getElementById("get-money");
const btnWithdrawal = document.getElementById("withdraw-money");

btnDeposit.addEventListener("click", () => {
  inputDeposit.value = randomSold.innerHTML;
});
