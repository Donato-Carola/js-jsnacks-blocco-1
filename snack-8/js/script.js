//! Snack B:
// ? Chiedi un numero di 7 cifre all'utente e calcola la somma di tutte le cifre 
//? che compongono il numero.


const numberUser = prompt('inserisci numero con 7 cifre');

const arrayCifre = numberUser.split('');

let somma = 0;

for(let i = 0; i < arrayCifre.length; i++){
   
   somma = somma + parseInt(arrayCifre[i]);
}


console.log(`la somma delle cifre del numero inserito è ${somma}`)
