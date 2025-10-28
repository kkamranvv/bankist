// src/dom.ts

export const labelWelcome = document.querySelector(
  '.welcome'
) as HTMLParagraphElement;
export const labelDate = document.querySelector('.date') as HTMLSpanElement;
export const labelBalance = document.querySelector(
  '.balance__value'
) as HTMLElement;
export const labelSumIn = document.querySelector(
  '.summary__value--in'
) as HTMLElement;
export const labelSumOut = document.querySelector(
  '.summary__value--out'
) as HTMLElement;
export const labelSumInterest = document.querySelector(
  '.summary__value--interest'
) as HTMLElement;
export const labelTimer = document.querySelector('.timer') as HTMLSpanElement;

export const containerApp = document.querySelector('.app') as HTMLElement;
export const containerMovements = document.querySelector(
  '.movements'
) as HTMLDivElement;

export const btnLogin = document.querySelector(
  '.login__btn'
) as HTMLButtonElement;
export const btnTransfer = document.querySelector(
  '.form__btn--transfer'
) as HTMLButtonElement;
export const btnLoan = document.querySelector(
  '.form__btn--loan'
) as HTMLButtonElement;
export const btnClose = document.querySelector(
  '.form__btn--close'
) as HTMLButtonElement;
export const btnSort = document.querySelector(
  '.btn--sort'
) as HTMLButtonElement;

export const inputLoginUsername = document.querySelector(
  '.login__input--user'
) as HTMLInputElement;
export const inputLoginPin = document.querySelector(
  '.login__input--pin'
) as HTMLInputElement;
export const inputTransferTo = document.querySelector(
  '.form__input--to'
) as HTMLInputElement;
export const inputTransferAmount = document.querySelector(
  '.form__input--amount'
) as HTMLInputElement;
export const inputLoanAmount = document.querySelector(
  '.form__input--loan-amount'
) as HTMLInputElement;
export const inputCloseUsername = document.querySelector(
  '.form__input--user'
) as HTMLInputElement;
export const inputClosePin = document.querySelector(
  '.form__input--pin'
) as HTMLInputElement;
