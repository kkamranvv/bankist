import { Account } from './models/account';
import { formatMovementDate, formatCurrency } from './utils/format';
import {
  labelBalance,
  labelSumIn,
  labelSumOut,
  labelSumInterest,
  containerMovements,
} from '../src/dom';

export const displayMovements = (acc: Account, sort = false): void => {
  containerMovements.innerHTML = '';
  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates[i],
  }));
  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach((obj, i) => {
    const type = obj.movement > 0 ? 'deposit' : 'withdrawal';
    const displayDate = formatMovementDate(
      new Date(obj.movementDate),
      acc.locale
    );
    const formattedMov = formatCurrency(obj.movement, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

export const calcDisplayBalance = (acc: Account): void => {
  acc.balance = acc.movements.reduce((sum, mov) => sum + mov, 0);
  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

export const calcDisplaySummary = (acc: Account): void => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((a, m) => a + m, 0);
  const out = acc.movements.filter(mov => mov < 0).reduce((a, m) => a + m, 0);
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(dep => (dep * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((a, i) => a + i, 0);

  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};
