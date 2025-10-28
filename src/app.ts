import { Account } from './models/account';
import { accounts } from './data/accounts';
import { displayMovements, calcDisplayBalance, calcDisplaySummary } from './ui';
import {
  btnLogin,
  btnTransfer,
  btnLoan,
  btnClose,
  btnSort,
  containerApp,
  labelWelcome,
  inputLoginUsername,
  inputLoginPin,
  inputTransferTo,
  inputTransferAmount,
  inputLoanAmount,
  inputCloseUsername,
  inputClosePin,
} from './dom';
import { createUsernames } from './utils/createUsernames';

createUsernames(accounts);
console.log(accounts);
let currentAccount: Account | undefined;
let timer: number | undefined;

console.log(accounts);
console.log(accounts);

const updateUI = (acc: Account): void => {
  displayMovements(acc);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = '1';
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  const acc = currentAccount;
  if (
    acc &&
    inputCloseUsername.value === acc.username &&
    +inputClosePin.value === acc.pin
  ) {
    const index = accounts.findIndex(a => a.username === acc.username);
    accounts.splice(index, 1);
    containerApp.style.opacity = '0';
    currentAccount = undefined;
  }
});

console.log(111);
console.log('hiii');
