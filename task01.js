'use strict';
{


const countPurchase = +prompt('Введите стоимость покупки в евро:');
    Number.isNaN(countPurchase)
    ? console.log('Вы ввели невеные данные')
    : calc(countPurchase);
    
function calc(summ) {
    const summRub = summ * 64 * 1.2;
    console.log(`Ваша покупка составила ${summRub.toFixed(2)} рублей`);
}


}