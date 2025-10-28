import { Account } from '../models/account';

export const createUsernames = (accs: Account[]): void => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
