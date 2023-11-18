//!Snack D (bonus):
//Inserisci un <h1> al centro della pagina con un numero randomico all'interno e un bottone sotto. 
//Ad ogni click del bottone aumento il numero nell'h1 di 3 e lo aggiorno in pagina.

const number = document.getElementById('bigNumber')


//number.innerHTML=(`${randomNumber}`)

const button = document.querySelector('button');

button.addEventListener("click",
function(){
    const randomNumber = (Math.random());
    console.log(randomNumber) ;
    const add = randomNumber + 3;
    number.innerHTML=(`numero random <br> ${randomNumber} + 3 = ${add}`);
})