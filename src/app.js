// Fontawesome @import
import '@fortawesome/fontawesome-free/js/all';
//  Tailwind @import
import "./assets/css/styles.css";

// Generate random numbers function
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min));
};


// Get Id and random numbers function
const randomAccount = document.getElementById("random-account");
const randomIban = document.getElementById("random-iban");
const randomBic = document.getElementById("random-bic");
const randomSold = document.getElementById("random-sold");

const randomFname = document.getElementById("random-fname");
const randomLname = document.getElementById("random-lname");

const buttonRandom = () => {
  randomAccount.innerHTML = getRandom(11111111111, 99999999999);
  randomIban.innerHTML = `FR` + getRandom(759999999999, 770000000000);
  randomBic.innerHTML = `AGRIPFR` + getRandom(1,9);
  randomSold.innerHTML = getRandom(100, 300) + `$`;
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

// const input = document.getElementById("gorkem-test");
// const button = document.getElementById("gorkem-test-id");
// const result = document.getElementById("gorkem-test-result");

// const postalCode = () => {
//   // ...
//   const getPostalCode = () => {
//     try {
//       let inputVal = parseInt(input.value);

//       const dept = [77, 78, 93, 94, 75, 80];
//       dept.map((element) => {
//         if (inputVal === element) {
//           console.log("success !!!");
//           result.innerHTML = `Votre code postal : ${inputVal} !`;
//         } 
//       })
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   //   ...
//   try {
//     button.addEventListener("click", () => getPostalCode());
//     input.addEventListener("keydown", (key) => {
//       key.key === "Enter" ? getPostalCode() : "";
//     })
//   } catch (error) {
//     console.error(error);
//   }
// };
// postalCode();

// const city = () => {
//   const town = ["92", "91", "75"];

//   const getCity = () => {
//     let inputVal = input.value;
//     // Si l'utilisateur saisie une ville contenue dans notre tableau, il ne peut pas commander
//     town.map((city) => {
//       if(inputVal === city) {
//         console.log("Vous ne pouvez pas commander");
//       }
//     })
//   }

//   button.addEventListener("click", () => getCity());
// }
// city();