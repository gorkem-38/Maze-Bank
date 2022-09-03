// Fontawesome @import
import '@fortawesome/fontawesome-free/js/all';
import { max } from 'lodash';
//  Tailwind @import
import "./assets/css/styles.css";

let bank = new Bank("hfj", "uvdkj");

const resultsBank = document.getElementById("results-bank");
const resultsCounter = document.getElementById("results-counter")
const resultsNumber = document.getElementById("account-number");
const resultsRib = document.getElementById("key-rib");
const resultsIban = document.getElementById("iban");
const resultsBic = document.getElementById("bic");

const btnReset = document.getElementById("btn-reset");

const getMoney = document.getElementById("get-money");
const depositMoney = document.getElementById("deposit-money");

const Bank = () => {
    let bank = new Bank(resultsBank.value, resultsCounter.value, resultsNumber.value, resultsRib.value, resultsIban.value, resultsBic.value);
    getMoney.append(bank.resultsBank);
    getMoney.append(bank.resultsCounter);
    getMoney.append(bank.resultsNumber);
    getMoney.append(bank.resultsRib);
    getMoney.append(bank.resultsIban);
    getMoney.append(bank.resultsBic);
    console.log(bank);
}
btnReset.addEventListener("click", Bank);