function alurChop(taka){
    console.log('mama alur chop er jonno dise', taka);
    console.log('alur chop den');
    var alurChopPrice = 5;
    var alurChopQuantity = taka / alurChopPrice;
    return alurChopQuantity;
}
var USD = 200;
var alurChop = alurChop(USD);
console.log('ei nen alurchop', alurChop);