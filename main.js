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

//applicare sconti tariffa

if (eta < 18) {
    //sconto minorenne
    console.log(costo * 0.8)
} else if (eta > 65){
    //sconto over65
    console.log(costo * 0.6);
} else{
    console.log(costo);
}
