'use strict';

{
const summRub = +prompt('Сумма Ваших покупок:');
const countCart = +prompt('Сколько товаров Вы купили:');
const promoKod = prompt('Введите Ваш промокод:');

const summSale = (summ, count, promo) => {
    let skidos = 0;
    count >= 10 ? skidos = summ * 0.03 : skidos += 0;
    summ >= 30000 ? skidos += (summ-30000) * 0.15 : skidos += 0;
    promo === "METHED" ? skidos += summ * 0.10 : skidos += 0;
    if (promo === "G3H2Z1" && 2000 < (summ-skidos)) {
        skidos += 500;
    } else {
        skidos += 0;
    }
    return(skidos);
}

console.log(`Вы купили ${countCart} товаров, на сумму: ${summRub}, с промокодом ${promoKod} Ваша скидка составила: ${summSale(summRub, countCart, promoKod)} рублей`);



}