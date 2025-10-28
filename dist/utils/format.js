export const formatMovementDate = (date, locale) => {
    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(+date2 - +date1) / (1000 * 60 * 60 * 24));
    const daysPassed = calcDaysPassed(new Date(), date);
    if (daysPassed === 0)
        return 'Today';
    if (daysPassed === 1)
        return 'Yesterday';
    if (daysPassed <= 7)
        return `${daysPassed} days ago`;
    return new Intl.DateTimeFormat(locale).format(date);
};
export const formatCurrency = (value, locale, currency) => new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
