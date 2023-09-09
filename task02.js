'use strict';
{

    const anyStr = (takeStr) => {
        const getStr = prompt('Введите строку');
        return (getStr.slice(0, 1).toLocaleUpperCase() + getStr.slice(1).toLowerCase());
    }
    console.log(anyStr());
    
}