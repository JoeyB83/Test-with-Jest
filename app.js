const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9 
    return Number(valueInYen.toFixed(2));
}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 127.9;
    let valueInPound = valueInEuro * 0.8; 
    return Number(valueInPound.toFixed(4));
}
console.log(fromYenToPound(100));

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };