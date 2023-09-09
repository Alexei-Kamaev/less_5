'use strict';

{

const strUser = prompt('Введите строку:');
console.log(`Ввёденная строка: ${strUser}`);
const strReverse = (stroka) => {
    return(stroka.split("").reverse().join(""));
}
console.log(`Полученная строка: ${strReverse(strUser)}`);

}