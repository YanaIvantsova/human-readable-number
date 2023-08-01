module.exports = function toReadable(number) {
    let result = '';

    if (number === 100) {
        return "one hundred";
    }
    if (mapUnits.has(number)) {
        return mapUnits.get(number).trim();
    }

    if (number / 100 >= 1) {
        let hundreds = Math.floor(number / 100);
        result += getFromMap(hundreds, 100);
        let decimal = number - (hundreds * 100);
        if (mapUnits.has(decimal) && decimal != 0) {
            result += getFromMap(decimal);
        } else if (decimal != 0) {
            let decimalNumber = Math.floor(decimal / 10);
            result += getFromMap(decimalNumber * 10, decimal % 10);
        }
    } else {
        let ostatok = number % 10;
        result += getFromMap(number - ostatok, ostatok);
    }

    return result.trim();
}

let getFromMap = function(...values) {
    let res = '';
    values.forEach(element => {
        res += mapUnits.get(element)
    });
    return res;
}


let mapUnits = new Map([
    [0, 'zero '],
    [1, 'one '],
    [2, 'two '],
    [3, 'three '],
    [4, 'four '],
    [5, 'five '],
    [6, 'six '],
    [7, 'seven '],
    [8, 'eight '],
    [9, 'nine '],
    [10, 'ten '],
    [11, 'eleven '],
    [12, 'twelve '],
    [13, 'thirteen '],
    [14, 'fourteen '],
    [15, 'fifteen '],
    [16, 'sixteen '],
    [17, 'seventeen '],
    [18, 'eighteen '],
    [19, 'nineteen '],
    [20, 'twenty '],
    [30, 'thirty '],
    [40, 'forty '],
    [50, 'fifty '],
    [60, 'sixty '],
    [70, 'seventy '],
    [80, 'eighty '],
    [90, 'ninety '],
    [100, 'hundred ']
]);
