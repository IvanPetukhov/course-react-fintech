import React from 'react';

export default ({value, currency}) => {
    const floor = Math.floor(value);
    const fract = (value - floor === 0) ? '' : Math.round((value - floor) * 100).toString();
    const currencySymb = {'RUB' : '₽', 'EUR' : '€', 'GBP' : '£', 'USD' : '$'};

    return (<span><span>{floor}</span>{fract && <span>{`,${fract}`}</span>}{currency && <span>{currencySymb[currency]}</span>}</span>);
}