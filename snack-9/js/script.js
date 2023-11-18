

//!Snack C:
//Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre): 
//moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

//* chiedo due numeri all'utente */



const calc = document.querySelector('button');




calc.addEventListener("click", 
function(){
   const numberMinUser = parseInt(document.getElementById('numberMin').value);
    const numberMaxUser = parseInt(document.getElementById('numberMax').value);
let numeroFinale = numberMinUser ;
    console.log(numberMinUser, numberMaxUser);

    for(let i=0; i< 1; i++){
   numeroFinale=numeroFinale*2;
   if (numeroFinale<numberMaxUser){
    i--;
   }
   console.log(`il valore della moltiplicazione per due è:`,numeroFinale)
}
console.warn('Risultato:' ,numeroFinale)
})