// Fontawesome @import
import '@fortawesome/fontawesome-free/js/all';
//  Tailwind @import
import "./assets/css/styles.css";

// Generate random numbers function
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min));
};

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

// Get Id and random numbers function
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

const buttonGenerate = document.getElementById("btn-gen");
buttonGenerate.addEventListener("click", buttonRandom);

////////////////////////////////////////

// Get Id button and input
const depoCash = document.getElementById("deposit-money");
const buttonDepo = document.getElementById("submit-money");
const withdrawCash = document.getElementById("get-money");
const buttonWithdraw = document.getElementById("withdraw-money");

const resultsSold = document.getElementById("results-sold");

////////////////////////////////////////

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
  key.code === "Enter" || key.code === "NumpadEnter" ? withdrawSold() : ""
});


// Overdraft message -200

const beneficiary = document.getElementById("account-received")

let beneficiarySold = 0;

const transfer = document.getElementById("transfer");
transfer.addEventListener("keydown", (key) => {
    let value = parseInt(transfer.value);
    let total = value += beneficiarySold;
    beneficiary.innerHTML = total;
    key.code === "Enter" || key.code === "NumpadEnter" ? transfer() : ""
});

const inputFname = document.getElementById("input-fname");
const inputLname = document.getElementById("input-lname"); 
const inputAccount = document.getElementById("input-account"); 
const inputIban = document.getElementById("input-iban"); 
const inputBic = document.getElementById("input-bic"); 

const resultFname = document.getElementById("result-fname");
const resultLname = document.getElementById("result-lname");
const resultAccount = document.getElementById("result-account");
const resultIban = document.getElementById("result-iban");
const resultBic = document.getElementById("result-bic");


const accountData = () => {
  resultFname.innerHTML = inputFname.value;
  resultLname.innerHTML = inputLname.value;
  resultAccount.innerHTML = inputAccount.value;
  resultIban.innerHTML = inputIban.value;
  resultBic.innerHTML = inputBic.value;
};

const buttonData = document.getElementById("btn-submit")
buttonData.addEventListener("click", accountData);

// const msgOverdraft = document.getElementById("msg-overdraft");
// let sold = 0;

// const overdraft = () => {
//   let currSold = -200;
//   let overDraft = -20;
//   if (currSold < overDraft){
//       msgOverdraft.classList.add("block");
//       msgOverdraft.style.color = "red";
//       msgOverdraft.textContent = "";
//   } else {
//     msgOverdraft.classList.add("block");
//     msgOverdraft.style.color = "red";
//     msgOverdraft.textContent = "Vous êtes à découvert !";
//   };
// };

// overdraft()

// const overdraft = () => {
  //   let value = parseInt(withdrawCash.value);
  //   let newSold = (soldNegative -= value);
//   let overdraft = -300;
//   msgOverdraft.textContent = newSold;
//   if (newSold < -200) {
//     console.log("50");
//   }
// };

// console.log(overdraft());