

//!Snack C:
//Chiedi all'utente due numeri, uno piu' piccolo (due cifre) e uno piu' grande (almeno quattro cifre): 
//moltiplica il primo numero per 2 finche' non arriva ad essere maggiore del secondo numero.

//* chiedo due numeri all'utente */



const calc = document.querySelector('button');





calc.addEventListener("click", 
function(){
   const numberMinUser = parseInt(document.getElementById('numberMin').value);
    const numberMaxUser = parseInt(document.getElementById('numberMax').value);

    console.log(numberMinUser, numberMaxUser);

    if (numberMinUser<=numberMaxUser){
        const result=numberMinUser * 2;
        console.log(`moltiplicazione per due con il numero minimo ${result}`)
    }else{
        console.log(`la moltiplicazione si è fermata perchè il numero minimo è maggiore del numero massimo`)
    }

})