//chiedere km da percorrere
var chilometri= prompt('quanti chilometri devi percorrere?');
console.log(chilometri);

//chiedere età passeggero
var eta= prompt('quanti anni hai?');
console.log(eta);

//tariffa biglietto al km
var prezzo = 0.21;

//calcolare costo viaggio
var costo= (chilometri * prezzo);

//sconto minorenne
var sconto_minorenne = 0.8;

//sconto minorenne
var sconto_over65 = 0.6;

//applicare sconti tariffa

if (eta < 18) {
    console.log(costo*sconto_minorenne)
} else if (eta > 65){
    console.log(costo*sconto_over65);
} else{
    console.log(costo);
}
